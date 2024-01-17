import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Wishlist from "../../components/Wishlist";

function WishlistPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selling Wishlist</title>
      </Helmet>
      <Wishlist />
    </HelmetProvider>
  );
}

export default WishlistPage;
