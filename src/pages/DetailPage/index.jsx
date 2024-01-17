import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Detail from "../../components/Detail";

function DetailPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selling Product Details Page</title>
      </Helmet>
      <Detail />
    </HelmetProvider>
  );
}

export default DetailPage;
