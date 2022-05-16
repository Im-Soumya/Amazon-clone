import './App.css';
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import ProductFeed from './components/ProductFeed/ProductFeed';
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import Success from './components/Payment/Success';
import Orders from "./components/Orders/Orders";

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser.displayName);
      } else {
        setUser(null);
      }
    })

    return () => {
      unsub();
    }
  }, [user]);

  // useEffect(() => {

  // }, [])

  useEffect(() => {
    function getProducts() {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(res => {
          setProducts(res)
        })
        .catch(e => console.log(e.message))
    }
    getProducts()
  }, [])


  return (
    <div className='bg-gray-100'>
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar user={user} setUser={setUser} /><Home /><ProductFeed products={products} /></>} />
          <Route path="/checkout" element={<><Navbar user={user} setUser={setUser} /><Checkout /></>} />
          <Route path="/payment" element={<><Navbar user={user} setUser={setUser} /><Payment /></>} />
          <Route path="/success" element={<><Navbar user={user} setUser={setUser} /><Success /></>} />
          <Route path="/orders" element={<><Navbar user={user} setUser={setUser} /><Orders user={user} setUser={setUser} /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;