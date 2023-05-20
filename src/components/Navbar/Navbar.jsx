import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import  { CartContext } from "../../context/CartContext";

const CartIcon = ({ itemCount }) => {
  return (
    <NavLink to="/app/cart" className="navbar-link label-lg link:hover header-icon">
      <div style={{ position: "relative" }}>
        <ion-icon name="cart-outline"></ion-icon>
        {itemCount > 0 && (
          <div
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              borderRadius: "50%",
              background: "#00a3ff",
              width: "20px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              color: "#fff",
            }}
          >
            {itemCount}
          </div>
        )}
      </div>
    </NavLink>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState("");
  const { cartItems } = useContext(CartContext);

  const navbarHandler = () => {
    if (nav) {
      setNav("");
    } else {
      setNav("active");
    }
  };

  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <NavLink to="/app/home">
            <img
              src="../src/assets/images/logo.png"
              width="100"
              height="100"
              alt="home"
              className="logo-small"
            />
          </NavLink>
          <nav className={`navbar ${nav}`}>
            <ul className="navbar-list">
              <li>
                <NavLink
                  to="/app/home"
                  className="navbar-link label-lg link:hover header-icon"
                >
                  <ion-icon name="home-outline" className="head-icon"></ion-icon>
                </NavLink>
              </li>
              <li>
                <CartIcon itemCount={cartItems.length} />
              </li>

              <li>
                <NavLink
                  to="/app/home"
                  className="navbar-link label-lg link:hover header-icon"
                >
                  <ion-icon name="bookmarks-outline"></ion-icon>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-action">
            <button
              className="btn-icon profil-btn"
              aria-label="Metalink account: Fiona doe"
            >
              <img
                src="../src/assets/images/profile.jpg"
                width="50"
                height="50"
                alt="Fiona doe"
                className="img-cover"
              />
            </button>

            <button className={`nav-toggle-btn ${nav}`} onClick={navbarHandler}>
              {!nav ? (
                <ion-icon
                  name="menu-outline"
                  className="default-icon"
                ></ion-icon>
              ) : (
                <ion-icon
                  name="close-outline"
                  aria-hidden="true"
                  className="active-icon"
                ></ion-icon>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
