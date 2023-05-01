import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CARTIMAGE from '../../src/assets/images/svg/cart.svg';
import Checkout from '../pages/Checkout';

function Cart() {
  const { cartItems, removeItem, addItem } = useContext(CartContext);
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
    setUpdatedCartItems(cartItems.filter((item) => item.id !== itemId));
  }

  // Calculate total price of items in cart
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);



  return (
    <>
      <section className="section hero-cart" aria-labelledby="discover-label">
          {cartItems.length > 0 ? (
            <div className="container-cart">
            <div className="cart-section">
            <h2 className='cart-title'>Your Shopping Cart</h2>
            <ul className="grid-list-cart">
              {cartItems.map((item) => (
                <li key={item.id} >
                  <div className="discover-card-cart card-cart">
                    
                <div className="card-banner img-holder-cart">
                      <img
                        src={item.banner} alt={item.title}
                        width="130"
                        height="130"
                        loading="lazy"
                        className="img-cover-cart"
                      />
                </div>
                <div className="card-profile">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <h4 className="cart-item-category">{item.category}</h4>
                      <p className="cart-item-price">{item.price} ETH</p>
                      <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>
                        <ion-icon className="remove-icon" name="trash-outline"></ion-icon>
                      </button>
                </div>
                  </div>
                </li>
              ))}
              </ul>
              <div className="btn-total">
                <h4 className="total-price">Total: {total} ETH</h4>
              </div>

              
            </div>
            
            <div className="checkout-section">
              <Checkout/>
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
