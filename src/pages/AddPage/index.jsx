import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Add from "../../components/Add";

function AddPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Selling Add Page</title>
      </Helmet>
      <Add />
    </HelmetProvider>
  );
}

export default AddPage;
