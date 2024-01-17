import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { BasketContext } from "../context/BasketProvider";

function Products() {
  const [products, setProducts] = useState([]);
  const {addBasket}=useContext(BasketContext)
  useEffect(() => {
    fetch("http://localhost:3000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section id="products">
      <div className="container">
        <h3>POPULAR PRODUCTS</h3>
        <h1>Our Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          <br />
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          <br />
          consequatur laboriosam ipsam.
        </p>
        <div className="cards">
          {products.map((x) => (
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
                  <button className="cart" onClick={()=>addBasket(x)}>CART</button>
                  <button className="view">VIEW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
