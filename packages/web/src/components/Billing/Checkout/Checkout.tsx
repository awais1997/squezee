import React, { useState, FormEvent } from 'react';
import { loadStripe, CreatePaymentMethodData } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { prepareCheckout } from '../../../helpers/ApiClient'
import {CheckoutForm} from './CheckoutForm';
interface Props {
    styles: any;
    cardClass: any;
    plan: any;
}

export const Checkout = (props: Props) => {
    const [publishKey, setPublishKey] = React.useState<string>('')
    const [customer, setCustomer] = React.useState<any>()
    const [querying, setQuerying] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (!publishKey && !querying) {
            setQuerying(true)
            prepareCheckout()
                .then((data) => {
                    setPublishKey(data.publishKey);
                    setCustomer(data.customer);
                    setQuerying(false);
                });

        }
    }, [publishKey, setPublishKey, customer, setCustomer])

    if (!publishKey) {
        return (<div>Loading...</div>)
    }

    return (
        <Elements stripe={loadStripe(publishKey)}>
            <CheckoutForm customer={customer} {...props} />
        </Elements>
    )
};
