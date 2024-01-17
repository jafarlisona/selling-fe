import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <h1>
            Selling<span>.</span>
          </h1>
        </div>
        <div className="pages">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addPage">Add</NavLink>
          <Link>Wishlist</Link>
          <NavLink to="/basket">Basket</NavLink>
          <Link>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
