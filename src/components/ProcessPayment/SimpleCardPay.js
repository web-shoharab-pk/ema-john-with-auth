import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const SimpleCardPay = ({handlePayment}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, serPaymentError] = useState('')
    const [paymentSucess, serPaymentSeccess] = useState('')
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            serPaymentError(error.message);
            serPaymentSeccess('') 
        } else {
            serPaymentError('');
            serPaymentSeccess('Your payment is successful Thank you')
            console.log('[PaymentMethod]', paymentMethod);
            handlePayment(paymentMethod.id)
        }
    };

    return (
        <div>
            {
              paymentError &&   <p style={{color: 'red'}}>{paymentError}</p> 
            }
            { 
              paymentSucess && <p style={{color: 'green'}}>{paymentSucess}</p>
            }
           <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <button  className="btn px-5 btn-primary" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default SimpleCardPay;