import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import SplitCardForm from './SimpleCardPay'; 
import SimpleCardPay from './SimpleCardPay';

const stripePromise = loadStripe('pk_test_51Ie0ZBABJxkoligZuw7g0COhATYP6Yp365wBwMdj8BQbeGLlC8haxK8W4USpimruwWVUHh2k9RXfapJVYYNZNbHA00MroWTTnX');

const ProcessPayment = ({handlePayment}) => {
    
    return (

        <Elements stripe={stripePromise}>
            <SimpleCardPay handlePayment={handlePayment} />
        {/* <SplitCardForm /> */}
        </Elements>

    );
};
 
export default ProcessPayment;


