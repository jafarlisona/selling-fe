import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Basket from "../../components/Basket";

function BasketPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selling Basket</title>
      </Helmet>
      <Basket />
    </HelmetProvider>
  );
}

export default BasketPage;
