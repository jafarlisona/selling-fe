import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/Header";
import Products from "../../components/Products";
import About from "../../components/About.jsx";
import Leadership from "../../components/Leadership";
import Services from "../../components/Services";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selling Home</title>
      </Helmet>
      <Header />
      <Products />
      <About />
      <Leadership />
      <Services />
    </HelmetProvider>
  );
}

export default Home;
