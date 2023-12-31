import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Cart from "../../components/Cart";
import Footer from "../../components/Footer";

const CartPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Carro de compras</>} />
      <Cart />
      <Footer />
    </>
  );
};
export default CartPage;
