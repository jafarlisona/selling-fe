import React from "react";
import "./index.scss";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="image">
          <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
          <div className="img-text">
            <h2>Trusted Merchant </h2>
            <h3>FOR 50 YEARS</h3>
          </div>
        </div>
        <div className="content-about">
          <h4>MERCHANT COMPANY</h4>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}

export default About;
