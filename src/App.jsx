import React, { lazy, Suspense } from "react";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isHomeOrCartPage = location.pathname.includes("/home") || location.pathname.includes("/cart");

  return (
    <>
      {isHomeOrCartPage && <Navbar />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
