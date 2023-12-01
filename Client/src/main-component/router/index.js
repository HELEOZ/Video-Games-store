// AllRoute.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RutaProtegida from "../RutaProtegida/RutaProtegida";

// Importaciones de tus componentes de página
import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import OurGamePage from "../OurGamePage";
import GameDetailsPage from "../GameDetailsPage";
import MatchPage from "../MatchPage";
import MatchDetailsPage from "../MatchDetailsPage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import BlogPage from "../BlogPage";
import BlogDetailsPage from "../BlogDetailsPage";
import ProductPage from "../ProductPage";
import ProductDetailsPage from "../ProductDetailsPage";
import CartPage from "../CartPage";
import CheckoutPage from "../CheckoutPage";
import ContactPage from "../ContactPage";

const AllRoute = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas no protegidas */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rutas protegidas */}
        <Route path="/" element={<RutaProtegida><Homepage /></RutaProtegida>} />
        <Route path="/about" element={<RutaProtegida><AboutPage /></RutaProtegida>} />
        <Route path="/games" element={<RutaProtegida><OurGamePage /></RutaProtegida>} />
        <Route path="/game-single" element={<RutaProtegida><GameDetailsPage /></RutaProtegida>} />
        <Route path="/match" element={<RutaProtegida><MatchPage /></RutaProtegida>} />
        <Route path="/match-single" element={<RutaProtegida><MatchDetailsPage /></RutaProtegida>} />
        <Route path="/blog" element={<RutaProtegida><BlogPage /></RutaProtegida>} />
        <Route path="/blog-single" element={<RutaProtegida><BlogDetailsPage /></RutaProtegida>} />
        <Route path="/products" element={<RutaProtegida><ProductPage /></RutaProtegida>} />
        <Route path="/product-single" element={<RutaProtegida><ProductDetailsPage /></RutaProtegida>} />
        <Route path="/cart" element={<RutaProtegida><CartPage /></RutaProtegida>} />
        <Route path="/checkout" element={<RutaProtegida><CheckoutPage /></RutaProtegida>} />
        <Route path="/contact" element={<RutaProtegida><ContactPage /></RutaProtegida>} />

        {/* Página de error, también protegida */}
        <Route path="*" element={<RutaProtegida><ErrorPage /></RutaProtegida>} />
      </Routes>
    </Router>
  );
};

export default AllRoute;

