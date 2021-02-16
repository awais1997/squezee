import React, { useState, FormEvent } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useRetryInvoiceMutation, useCreateSubscriptionMutation} from '../../../generated/graphql'

interface Props {
    styles: any;
    cardClass: any;
    plan: any;
    customer: any;
}

export const CheckoutForm = ({ styles, cardClass, plan, customer }: Props) => {
    const stripe = useStripe();
    const elements = useElements();
    const [subscribing, setSubscribing] = useState(false);
    const [accountInformation, setAccountInformation] = useState(null);
    const [errorToDisplay, setErrorToDisplay] = useState('');
    const [retryInvoice] = useRetryInvoiceMutation();
    const [createSubscription] = useCreateSubscriptionMutation();

    const handlePaymentThatRequiresCustomerAction = async ({
        subscription,
        invoice,
        priceId,
        paymentMethodId,
        isRetry,
    }: any) => {
        if (subscription && subscription.status === 'active') {
            // subscription is active, no customer actions required.
            return { subscription, priceId, paymentMethodId };
        }

        // If it's a first payment attempt, the payment intent is on the subscription latest invoice.
        // If it's a retry, the payment intent will be on the invoice itself.
        const paymentIntent = invoice
            ? invoice.payment_intent
            : subscription.latest_invoice.payment_intent;

        if (
            paymentIntent.status === 'requires_action' ||
            (isRetry === true && paymentIntent.status === 'requires_payment_method')
        ) {
            const result = stripe && await stripe.confirmCardPayment(paymentIntent.client_secret, { payment_method: paymentMethodId });
            if (result?.error) {
                // start code flow to handle updating the payment details
                // Display error message in your UI.
                // The card was declined (i.e. insufficient funds, card has expired, etc)
                throw result;
            }

            if (result?.paymentIntent?.status === 'succeeded') {
                // There's a risk of the customer closing the window before callback
                // execution. To handle this case, set up a webhook endpoint and
                // listen to invoice.payment_succeeded. This webhook endpoint
                // returns an Invoice.
                return {
                    priceId: priceId,
                    subscription: subscription,
                    invoice: invoice,
                    paymentMethodId: paymentMethodId,
                };
            }
        }
        // No customer action needed
        return { subscription, priceId, paymentMethodId };
    }

    const handleRequiresPaymentMethod = ({
        subscription,
        paymentMethodId,
        priceId,
    }: any) => {
        if (subscription.status === 'active') {
            // subscription is active, no customer actions required.
            return { subscription, priceId, paymentMethodId };
        } else if (
            subscription.latest_invoice.payment_intent.status ===
            'requires_payment_method'
        ) {
            // Using localStorage to store the state of the retry here
            // (feel free to replace with what you prefer)
            // Store the latest invoice ID and status
            localStorage.setItem('latestInvoiceId', subscription.latest_invoice.id);
            localStorage.setItem(
                'latestInvoicePaymentIntentStatus',
                subscription.latest_invoice.payment_intent.status
            );
            throw new Error('Your card was declined.');
        } else {
            return { subscription, priceId, paymentMethodId };
        }
    }

    const retryInvoiceWithNewPaymentMethod = async ({
         paymentMethodId,
         invoiceId
        }: { paymentMethodId: string; invoiceId: string; }) => {
            const data = {
                customerId: customer.id,
                paymentMethodId: paymentMethodId,
                invoiceId: invoiceId,
            }
        return retryInvoice({
            variables: {
                data
            }
        })              
        // Normalize the result to contain the object returned by Stripe.
        // Add the addional details we need.
        .then((result) => {
            return {
                // Use the Stripe 'object' property on the
                // returned result to understand what object is returned.
                invoice: result,
                paymentMethodId: paymentMethodId,
                priceId: plan.planId,
                isRetry: true,
            };
        })
        // Some payment methods require a customer to be on session
        // to complete the payment process. Check the status of the
        // payment intent to handle these actions.
        .then(handlePaymentThatRequiresCustomerAction)
        // No more actions required. Provision your service for the user.
        .then(onSubscriptionComplete)
        .catch((error) => {
            console.log(error);
            // An error has happened. Display the failure to the user here.
            setSubscribing(false);
            setErrorToDisplay(error && error.error && error.error.decline_code);
        });
    }

    const onSubscriptionComplete = (result: any) => {
        console.log("Subscription result:",result);
        // Payment was successful. Provision access to your service.
        // Remove invoice from localstorage because payment is now complete.
        // clearCache();
        if (result && !result.subscription) {
            const subscription = { id: result.invoice.subscription };
            result.subscription = subscription;
            localStorage.clear();
        }

        setAccountInformation(result);
        // Change your UI to show a success message to your customer.
        // onSubscriptionSampleDemoComplete(result);
        // Call your backend to grant access to your service based on
        // the product your customer subscribed to.
        // Get the product by using result.subscription.price.product
    }

     const handleSubscriptionCreation = ({ paymentMethodId }: { paymentMethodId: string}) => {
    
        debugger
        const data = {
            customerId: customer.id,
            paymentMethodId: paymentMethodId,
            priceId: plan.planId,
        }
        console.log("Query data:", data);
        
        
        return createSubscription({
            variables: {
                data
            }
        })        
        // Normalize the result to contain the object returned
        // by Stripe. Add the addional details we need.
        .then((result) => {
            return {
                // Use the Stripe 'object' property on the
                // returned result to understand what object is returned.
                subscription: result,
                paymentMethodId: paymentMethodId,
                priceId: plan.planId,
            };
        })
        // Some payment methods require a customer to do additional
        // authentication with their financial institution.
        // Eg: 2FA for cards.
        .then(handlePaymentThatRequiresCustomerAction)
        // If attaching this card to a Customer object succeeds,
        // but attempts to charge the customer fail. You will
        // get a requires_payment_method error.
        .then(handleRequiresPaymentMethod)
        // No more actions required. Provision your service for the user.
        .then(onSubscriptionComplete)
        .catch((error) => {
            debugger
            // An error has happened. Display the failure to the user here.
            // We utilize the HTML element we created.
            setSubscribing(false);
            setErrorToDisplay(error.message || error.error.decline_code);
        })
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // Block native form submission.
        event.preventDefault();

        setSubscribing(true);

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // If a previous payment was attempted, get the lastest invoice
        const latestInvoicePaymentIntentStatus = localStorage.getItem(
            'latestInvoicePaymentIntentStatus'
        );
           console.log('Data from local',latestInvoicePaymentIntentStatus);
           
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement!,
        });
     
        if (error) {
            console.log('[createPaymentMethod error]', error);
            setSubscribing(false);
            setErrorToDisplay(error!.message!);
            return;
        }

        if (!paymentMethod) {
            console.log('[createPaymentMethod error] missing paymentMethod');
            setSubscribing(false);
            setErrorToDisplay('Something went wrong getting a payment method.');
            return;
        }

        console.log('[PaymentMethod]', paymentMethod);
        const paymentMethodId = paymentMethod.id;

        if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
            // Update the payment method and retry invoice payment
            const invoiceId = localStorage.getItem('latestInvoiceId') || '';
            retryInvoiceWithNewPaymentMethod({
                paymentMethodId: paymentMethodId,
                invoiceId: invoiceId,
            });

            return;
        }

        // Create the subscription
        handleSubscriptionCreation({
            paymentMethodId: paymentMethodId,
            
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box borderRadius={16} border={1} borderColor="text.primary" className={cardClass}>
                <CardElement
                    options={{
                        style: styles
                    }}
                />
            </Box>
            <Button type="submit" disabled={!stripe}>
                Pay
            </Button>
        </form>
    );
};
