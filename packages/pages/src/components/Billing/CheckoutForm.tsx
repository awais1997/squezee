import React, { useState, FormEvent } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useCreatePaymentMutation} from '../../generated/graphql'
interface Props {
  styles: any;
  cardClass: any;
}
export const CheckoutForm = ({ styles, cardClass }: Props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [createPayment] = useCreatePaymentMutation();


  const downloadfile=(url:string, filename:string)=>{
    fetch(url)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.setAttribute("download", filename);
					a.click();
				});
		
		});
  }

  const handlePaymentCreation =({ token }: { token: any})=>{
    const data = {
      token: token,
  }
     console.log("Query data:", data);
     return createPayment({
      variables: {
          data
      }
  }) 
  .then((result) => {
        console.log("Result is here", result);
        downloadfile("https://get.geojs.io/v1/ip/geo.json","file.pdf")
})
.catch((err)=>{ 
    
    console.log("Somthing bad happen", err);
    
})

  }


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    // Block native form submission.
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
  }
  const cardElement:any = elements.getElement(CardElement);
        // Use your card Element with other Stripe.js APIs
        const {token, error} = await stripe.createToken(cardElement);

      //   const { error, paymentMethod } = await stripe.createPaymentMethod({
      //     type: 'card',
      //     card: cardElement!,
      // });
      if (error) {
        console.log('[createPaymentMethod error]', error);
        return;
    }
    
    if (!token) {
        console.log('[createPaymentMethod error] missing paymentMethod');
        return;
    }
    console.log('[PaymentMethod]', token);
    // const paymentMethodId = paymentMethod.id;
    

         handlePaymentCreation({
          token: token,
          
      });

  }

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
  )
}
