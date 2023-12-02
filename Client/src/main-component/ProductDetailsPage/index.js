import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ProductsDetails from "../../components/ProductsDetails";
import Footer from "../../components/Footer";

const ProductDetailsPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Detalles de producto</>} />
      <ProductsDetails />
      <Footer />
    </>
  );
};
export default ProductDetailsPage;
