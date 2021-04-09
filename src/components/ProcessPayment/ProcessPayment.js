import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SimpleCardPay'; 

const stripePromise = loadStripe('pk_test_51Ie0ZBABJxkoligZuw7g0COhATYP6Yp365wBwMdj8BQbeGLlC8haxK8W4USpimruwWVUHh2k9RXfapJVYYNZNbHA00MroWTTnX');

const ProcessPayment = (event) => {
    
    return (

        <Elements stripe={stripePromise}> 
        <SplitCardForm />
        </Elements>

    );
};
 
export default ProcessPayment;


