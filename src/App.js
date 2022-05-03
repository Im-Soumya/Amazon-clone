import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import ProductFeed from './components/ProductFeed/ProductFeed';
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [products, setProducts] = useState([])

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
          <Route path="/" element={<><Navbar /><Home /><ProductFeed products={products} /></>} />
          <Route path="/checkout" element={<><Navbar /><Checkout /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;