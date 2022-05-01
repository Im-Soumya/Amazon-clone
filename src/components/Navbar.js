import React from "react";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue flex-grow p-1 py-2">
        <div className="mt-2 flex items-center flex-grow mx-2 sm:flex-grow-0">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={100}
            height={30}
            className="object-contain cursor-pointer"
          />
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-300 hover:bg-yellow-400 duration-200">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Sonny Sangha</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-300 text-center rounded-full text-black font-bold">2</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar;