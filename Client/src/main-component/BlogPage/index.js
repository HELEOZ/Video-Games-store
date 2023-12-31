import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Blog from "../../components/Blog";
import Footer from "../../components/Footer";

const BlogPage = () => {
  return (
    <>
      <Header />
      <PageTitle
        Title={
          <>
            Todas <span>Las Noticias</span>
          </>
        }
      />
      <Blog />
      <Footer />
    </>
  );
};
export default BlogPage;
