import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";


function App() {
  return (
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      
      </CartContextProvider>
  );
}

export default App;
