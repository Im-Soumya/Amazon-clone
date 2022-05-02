import React, { useState } from "react";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { provider } from "../firebase";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userName, setUserName] = useState("")

  const auth = getAuth();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const user = res.user;
        console.log(auth.currentUser.displayName)
        setUserName(auth.currentUser.displayName)
        console.log(auth.currentUser)
      })
      .catch(e => {
        const errorCode = e.code;
        const errorMessage = e.message;
        const email = e.email;
        const credential = GoogleAuthProvider.credentialFromError(e);
        console.log(auth.currentUser)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
    setUserName("")
  }

  return (
    <header>
      <div className="flex items-center bg-amazon_blue flex-grow p-1 py-2">
        <div className="mt-2 flex items-center flex-grow mx-2 sm:flex-grow-0">
          <Link to="/">
            <img
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              width={100}
              height={30}
              className="object-contain cursor-pointer"
              alt="logo"
            />
          </Link>
        </div>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 duration-200">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div
          onClick={!auth.currentUser ? handleSignIn : handleSignOut}
          className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap"
        >
          <div className="link">
            <p>{userName === "" ? "Sign in" : `Hello ${userName}`}</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>

          <Link to="/checkout">
            <div className="relative link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">2</span>
              <ShoppingCartIcon className="h-8" />
              <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-2" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals'</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Todolist</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Navbar;