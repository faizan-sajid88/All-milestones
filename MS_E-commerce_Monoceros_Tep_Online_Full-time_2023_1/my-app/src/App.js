import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home/home";
import Signin from "./components/pages/signin/signin";
import Signup from "./components/pages/signup/signup"
import Product from "./components/pages/product/product";
import Cart from "./components/pages/cart/cart";

function App() {
  return (
    <div className="App">

   <BrowserRouter>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/product" element={<Product />} />
</Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
