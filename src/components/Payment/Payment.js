import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from "react-router-dom";

const Payment = () => {

  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const elements = useElements();
  const stripe = useStripe();

  const timeout = () => {
    setTimeout(() => {
      navigate("/success");
    }, 4000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    console.log("card", cardElement);
    console.log("stripe", stripe);

    timeout();
  }

  return (
    <div className='max-w-screen-lg mx-auto p-10'>
      <h2 className='text-3xl border-b mb-2 pb-2 border-yellow-400'>
        Payment
      </h2>
      <div className=''>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className='mb-3 p-2 bg-gray-100 border-b border-gray-300'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CardElement className='mb-3 p-2 border-b border-gray-300' />
          </div>

          <h3 className='text-md mt-3 mb-2 ml-2'>Billing Address</h3>

          <div className='flex flex-col justify-between mb-5 sm:flex-row'>
            <input
              type="text"
              placeholder="Street address"
              className='flex-1 mb-3 p-2 bg-gray-100 border-b border-gray-300 sm:mr-6'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder='State/Province'
              className='mb-3 p-2 bg-gray-100 border-b border-gray-300 sm:mr-6'
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <input
              type="text"
              placeholder='Zip code'
              className='mb-3 p-2 bg-gray-100 border-b border-gray-300'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>

          <button className='button w-full' type="submit">Pay</button>
        </form>
      </div>
    </div>
  )
}

export default Payment