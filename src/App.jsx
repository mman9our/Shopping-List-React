import React, { lazy, Suspense } from "react";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/*" element={<AppRoutes />} />
      </Routes>
    </CartContextProvider>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/home" element={<HomeWithNavbar />} />
        <Route path="/cart" element={<CartWithNavbar />} />
      </Routes>
    </Suspense>
  );
}

function HomeWithNavbar() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

function CartWithNavbar() {
  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
}

export default App;
