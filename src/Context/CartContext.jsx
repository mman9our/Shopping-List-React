import React, { createContext, useState } from "react";

// Create a context object
export const CartContext = createContext();

const CartContextProvider = (props) => {
  // Set up state for cart items
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.category === item.category
    );
  
    if (existingItemIndex > -1) {
      setCartItems(
        cartItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  // Remove item from cart
  const removeItem = (itemId) => {

      setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Define the values that the context will provide
  const contextValues = {
    cartItems,
    addItem,
    removeItem,
  };

  // Provide the context to all child components
  return <CartContext.Provider value={contextValues}>{props.children}</CartContext.Provider>;
};

export default CartContextProvider;
