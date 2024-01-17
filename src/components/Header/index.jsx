import React from "react";
import "./index.scss";

function Header() {
  return (
    <header>
      <div className="bg">
        <div className="container">
          <h1>Shop With Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam{" "}
            <br />
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <div className="buttons">
            <button className="shop">SHOP NOW</button>
            <button className="club">CLUB MEMBERSHIP</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
