import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Contactanos</>} />
      <Contact />
      <Footer />
    </>
  );
};
export default ContactPage;
