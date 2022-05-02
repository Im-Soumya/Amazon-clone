import React from 'react';

const Checkout = () => {
  return (
    <main className='lg:flex max-w-screen-2xl mx-auto'>
      <div className='flex-grow m-5 shadow-sm'>
        <img
          src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
          width={1020} height={250}
          className="object-contain"
        />

        <div className='flex flex-col p-5 space-y-10 bg-white'>
          <h1 className='text-3xl border-b pb-4'>Your Shopping Basket</h1>
        </div>
      </div>
    </main>
  )
}

export default Checkout;