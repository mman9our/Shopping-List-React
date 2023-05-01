import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";

function App() {
  return (
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <div className="body-bg-shape"></div>
      
      </CartContextProvider>
  );
}

export default App;
