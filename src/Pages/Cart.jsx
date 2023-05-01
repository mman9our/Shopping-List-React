import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import CARTIMAGE from '../../public/assets/images/cart.svg';

function Cart() {
  const { cartItems, removeItem, addItem } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);


  const handleRemoveItem = (item) => {
    removeItem(item);
    const updatedItems = updatedCartItems.filter((cartItem) => cartItem.id !== item.id);
    setUpdatedCartItems(updatedItems);
  }

  const handleAddToCart = (item) => {
    // Check if item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.category === item.category);
    if (existingItem) {
      alert(`You can only add one ${item.category} to the cart.`);
    } else {
      addItem(item);
    }
  };

  

  return (
    <>
      <section className="section hero-cart" aria-labelledby="discover-label">
          {cartItems.length > 0 ? (
          <div className="container">

            <h2 className="cart-title">Cart ({cartItems.length})</h2> {/* Add cart title and number of items */}
            <div className="cart-section">
              
            <ul className="grid-list-cart">
              {cartItems.map((item) => (
                <li key={item.id} >
                  <div className="discover-card-cart card-cart">
                    
                <div className="card-banner img-holder-cart">
                      <img
                        src={item.banner} alt={item.title}
                        width="150"
                        height="150"
                        loading="lazy"
                        className="img-cover-cart"
                      />
                </div>
                <div className="card-profile">
                    <h3 className="cart-item-title">{item.title}</h3>
                      <p className="cart-item-price">{item.price}</p>
                      
                      <button className="btn-remove" onClick={() => handleRemoveItem(item)}>
                        <ion-icon className="remove-icon" name="trash-outline"></ion-icon>
                      </button>
                </div>
                  </div>
                </li>
              ))}
            </ul>
              </div>
          </div>
          ) : (
            <div className="empty-cart">
              <img src={CARTIMAGE} alt="Cart is empty" />
              <h4 className="headline-md text-empty">Your cart is empty🛒 </h4>
              <p>Please add some products to your cart to continue shopping!</p>
            </div>
          )}           

      </section>
    </>
  );
}

export default Cart;
