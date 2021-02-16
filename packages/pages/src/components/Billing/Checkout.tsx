import React, { useState, FormEvent } from 'react';
import { loadStripe, CreatePaymentMethodData } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './CheckoutForm';
interface Props {
    styles: any;
    cardClass: any;
}

export const Checkout = (props: Props) => {
    return (
        <Elements stripe={loadStripe("pk_test_51IGJCIGJtEMkpOyaSN0jn3v5UkxU88WpghFBTtBGsFCdYdJpyyQTiRq2jk0Uc5DuuiH61LYcPM423AQA0IorffpZ00HH47ENey")}>
            <CheckoutForm {...props} />
        </Elements>
    )
};
