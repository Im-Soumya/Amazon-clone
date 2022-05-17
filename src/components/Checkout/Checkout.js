import React from 'react';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../../redux/basketSlice';
import CheckoutProduct from "../Checkout/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const navigate = useNavigate()

  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <main className='lg:flex max-w-screen-2xl h-screen mx-auto'>
      <div className='flex-grow m-5 shadow-sm'>
        <img
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          width={1020} height={250} alt=""
          className="object-contain"
        />

        <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pb-4'>
            {items.length === 0 ? "Your basket looks empty." : "Your shopping basket:"}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              rating={item.rating}
              image={item.image}
              hasPrime={item.hasPrime}
            />
          ))}
        </div>
      </div>

      {items.length !== 0 && (
        <div className='flex flex-col bg-white p-10 m-5 shadow-md'>
          <h2 className='whitespace-nowrap flex justify-between mx-1'>Subtotal ({items.length} items):
            <span className='font-bold ml-3'>
              <Currency quantity={total} currency="INR" />
            </span>
          </h2>
          <button
            onClick={() => navigate("/payment")}
            className="button mt-5"
          >
            Proceed to checkout
          </button>
        </div>
      )}
    </main>
  )
}

export default Checkout;