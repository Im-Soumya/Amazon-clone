import React from 'react';
import { Elements, CardElement, ElementConsumer, ElementsConsumer } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const Payment = () => {

  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card: cardElement })

    if (error) {
      console.log(error);
    } else {
      console.log("Yaay!")
    }
  }

  return (
    <div>
      <h2>Payment</h2>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <input type="text" />
              <br />
              <button className='button'>PAY</button>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  )
}

export default Payment