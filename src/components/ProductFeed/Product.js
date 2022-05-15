import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, price, description, category, image }) => {

  const [rating, setRating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime, setHasPrime] = useState(Math.random() < 0.5)

  const dispatch = useDispatch()

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

  return (
    <div className='relative flex justify-center flex-col m-5 bg-white z-30 p-10 rounded-md'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <img
        src={image}
        className="object-contain h-52 w-52 mx-auto"
        alt=""
      />
      <h4 className='my-3 '>{title}</h4>
      <div className='flex'>
        {Array(rating).fill().map((_, i) => (
          <StarIcon key={i} className='h-5 text-yellow-500' />
        ))}
      </div>

      <p className='text-xs my-2 line-clamp-2'>{description}</p>

      <div className="mb-5 font-bold">
        <Currency
          quantity={price}
          currency="INR"
        />
      </div>

      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img
            src="https://whitebox.com/wp-content/uploads/2020/05/Prime-tag-.png"
            alt="prime"
            className='w-12'
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}

      <button
        onClick={addItemToBasket}
        className='mt-auto button'
      >
        Add to Basket
      </button>
    </div>
  )
}

export default Product