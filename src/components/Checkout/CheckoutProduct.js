import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../features/basketSlice';

const CheckoutProduct = ({ id, title, price, description, category, rating, image, hasPrime }) => {

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    }
    dispatch(addToBasket(product))
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }))
  }
  return (
    <div className='grid grid-cols-5'>
      <img
        src={image}
        className="w-52 h-52 object-contain"
        alt=""
      />

      <div className='col-span-3 mx-3'>
        <p>{title}</p>

        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))
          }
        </div>

        <p className='text-xs my-2 line-clamp-3'>{description}</p>

        <Currency quantity={price} currency="INR" />

        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              loading='lazy'
              className='w-12'
              src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
              alt=""
            />

            <p className='text-xs text-gray-500'>FREE Next-Day Delivery</p>
          </div>
        )}
      </div>

      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button
          onClick={addItemToBasket}
          className='button'
        >
          Add to Basket
        </button>
        <button
          onClick={removeItemFromBasket}
          className='button'
        >
          Remove from Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct