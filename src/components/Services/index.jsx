import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <h4>OUR SERVICES</h4>
        <h1>We Offer Services</h1>
        <div className="services-cards">
          <div className="card">
            <i class="fa-solid fa-delete-left"></i>
            <div className="content">
              <span>Market Analysis</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card">
            <i class="fa-solid fa-delete-left"></i>
            <div className="content">
              <span>Market Analysis</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card">
            <i class="fa-solid fa-delete-left"></i>
            <div className="content">
              <span>Market Analysis</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card">
            <i class="fa-solid fa-delete-left"></i>
            <div className="content">
              <span>Market Analysis</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card">
            <i class="fa-solid fa-delete-left"></i>
            <div className="content">
              <span>Market Analysis</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
          <div className="card">
            <i class="fa-solid fa-delete-left"></i>
            <div className="content">
              <span>Market Analysis</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
              <Link to="#">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
