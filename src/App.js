import './App.css';
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home/Home';
import ProductFeed from './components/ProductFeed/ProductFeed';

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    function getProducts() {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(res => {
          setProducts(res)
          console.log(res)
        })
    }
    getProducts()
  }, [])
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Home />
      <ProductFeed products={products} />
    </div>
  );
}

export default App;
