// App.js
import React, { lazy, Suspense } from "react";
import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import DefaultLayout from "./Layout/DefaultLayout";

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
        <Route element={<DefaultLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
