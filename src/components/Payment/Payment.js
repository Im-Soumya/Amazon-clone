import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const Payment = () => {
  const elements = useElements();
  const stripe = useStripe();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    // const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement })

    // if (error) {
    //   console.log(error);
    // } else {
    //   console.log("Yaay!")
    // }

    console.log("card", cardElement);
    console.log("stripe", stripe);
  }

  // console.log(stripePromise);

  return (
    <div className='flex flex-col justify-evenly'>
      <h2 className='mb-3 text-2xl text-center '>Payment</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button>Pay</button>
        </form>
      </div>
    </div>
  )
}

export default Payment