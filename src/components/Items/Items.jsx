import React, { useContext } from "react";
import { items } from "../../data";
import { CartContext } from "../../context/CartContext";

const Items = () => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addItem(item);
  };

  return (
    <>
      <section className="section discover" aria-labelledby="discover-label">
        <div className="container">
          <ul className="grid-list">
            {items.map((card) => (
              <li key={card.id}>
                <div className="discover-card card">
                  <div className="card-banner img-holder">
                    <img
                      src={card?.banner}
                      width="500"
                      height="500"
                      loading="lazy"
                      alt="Windchime #768/"
                      className="img-cover"
                    />

                    <button className="btn btn-primary" onClick={() => handleAddToCart(card)}>
                      <ion-icon name="cart-outline"></ion-icon>
                      <span className="span">Add to Cart</span>
                    </button>
                  </div>

                  <div className="card-profile">
                    <img
                      src={card?.avatar}
                      width="32"
                      height="32"
                      loading="lazy"
                      alt="CutieGirl profile/"
                      className="img"
                    />

                    <a href="#" className="link:hover">
                      {card?.artist}
                    </a>
                  </div>

                  <h3 className="title-sm card-title">
                    <a href="#" className="link:hover">
                      {card?.title}
                    </a>
                  </h3>

                  <div className="card-meta">
                    <div>
                      <p>Price</p>

                      <div className="card-price">
                        <img
                          src="../src/assets/images/svg/ethereum.svg"
                          width="16"
                          height="24"
                          loading="lazy"
                          alt="ethereum icon"
                        />
                        <span className="span">{card.price} ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <a href="#" className="btn-link link:hover">
            <span className="explore-text span">Explore More</span>
            <ion-icon name="arrow-forward"></ion-icon>
          </a>
        </div>
      </section>
    </>
  );
};

export default Items;
