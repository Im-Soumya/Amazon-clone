import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotal } from '../../redux/basketSlice';
import { v4 as uuid } from "uuid";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useNavigate } from "react-router-dom";
import Currency from "react-currency-formatter";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../../firebase";
import { clearBasket } from '../../redux/basketSlice';

const Payment = ({ user }) => {

  const dispatch = useDispatch();

  const unique_id = uuid();
  const small_uid = unique_id.slice(0, 8);

  const total = useSelector(selectTotal);

  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const elements = useElements();
  const stripe = useStripe();

  const timeout = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/success");
      dispatch(clearBasket());
      setIsLoading(false);
    }, 4000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    console.log("card", cardElement);
    console.log("stripe", stripe);

    try {
      const usersRef = collection(db, "users");
      await addDoc((usersRef, user.email, "orders", small_uid), {
        timestamp: serverTimestamp(),
      })
    } catch (e) {
      console.log(e.message);
    }

    timeout();
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className="max-w-screen-lg bg-white p-10">
        <h2 className='text-3xl border-b mb-2 pb-3 border-yellow-400'>
          Payment
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className='mt-4 mb-5 p-2 border-b border-gray-300 focus:outline-none'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CardElement className='mb-3 p-2 border-b border-gray-300' />
            </div>

            <h3 className='text-md mt-9 mb-2 ml-2'>Billing Address</h3>

            <div className='flex flex-col justify-between mt-5 mb-5 md:flex-row'>
              <input
                type="text"
                placeholder="Street address"
                className='mb-3 p-2 border-b border-gray-300 md:mr-6 flex-1 focus:outline-none'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder='State/Province' md
                className='mb-3 p-2 border-b border-gray-300 md:mr-6 focus:outline-none'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="text"
                placeholder='Zip code'
                className='mb-3 p-2 border-b border-gray-300 focus:outline-none'
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>

            <button
              className='button mt-3 w-full text-lg font-semibold'
              type="submit"
              disabled={!zip}
            >
              {isLoading ?
                (<p>Processing...</p>) :
                (<p>Pay <Currency quantity={total} currency="INR" /></p>)
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Payment