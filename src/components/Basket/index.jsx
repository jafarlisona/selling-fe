import React, { useContext } from "react";
import "./index.scss";
import { BasketContext } from "../context/BasketProvider";

function Basket() {
  const { basket, removeItem } = useContext(BasketContext);
  return (
    <section id="basket">
      <div className="cards">
        {basket.length &&
          basket.map((x) => (
            <div className="card" key={x._id}>
              <div className="img">
                <img src={x.image} alt="" />
                <div className="border"></div>
              </div>
              <div className="content">
                <span>{x.title}</span>
                <div className="rating-likes">
                  <div className="rating">
                    <i className="fa-solid fa-star"></i> <span>5.0</span>
                  </div>
                  <div className="likes">
                    <i className="fa-solid fa-heart"></i> <span>29</span>
                  </div>
                </div>
                <p>{x.description}</p>
                <div className="buttons">
                  <button className="remove" onClick={() => removeItem(x)}>
                    REMOVE
                  </button>
                  <button className="view">VIEW</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Basket;
