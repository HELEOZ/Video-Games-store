import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Product from "../../components/Products";
import Footer from "../../components/Footer";

const ProductPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Productos</>} />
      <Product />
      <Footer />
    </>
  );
};
export default ProductPage;
