import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";
import logo from "../../img/logo.png";
import cart from "../../img/shopping-cart.png";

// Importa la biblioteca de Auth0
import { useAuth0 } from "@auth0/auth0-react";

import "./style.css";

function Header(props) {
  const [state, setstate] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setstate(true);
      setShowSubMenu(false);
    } else {
      setstate(false);
    }
  };
  window.addEventListener("scroll", changeClass);

  
  const handleMouseEnter = (index) => {
    setShowSubMenu(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  // Obtiene los métodos y propiedades de Auth0
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <>
      <header className={state ? "header-area scroll" : "header-area "}>
        <Container>
          <div className="header-inn d-flex align-items-center justify-content-between">
            <div className="site-logo">
              <Link to="/">
                <img src={logo} alt="img" />
              </Link>
            </div>
            <div className="header-navigation d-flex align-items-center justify-content-between">
              <div className="mainmenu">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Inicio</Link>
                    </li>
                                        <li
                      className="has-sub"
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to="/">Paginas</Link>
                      <ul style={{ display: showSubMenu && hoveredIndex === 1 ? 'block' : 'none' }}>
                        <li>
                          <Link to="/about">Sobre nosotros</Link>
                        </li>
                        <li>
                          <Link to="/games">Nuestros juegos</Link>
                        </li>
                        <li>
                          <Link to="/game-single">juego único del año</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-sub"
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link to="/">Noticias</Link>
                      <ul style={{ display: showSubMenu && hoveredIndex === 2 ? 'block' : 'none' }}>
                    <li>
                          <Link to="/blog">Todas las noticias</Link>
                        </li>
                        <li>
                          <Link to="/blog-single">Noticias rápidas</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                     className="has-sub"
                     onMouseEnter={() => handleMouseEnter(3)}
                     onMouseLeave={handleMouseLeave}
                    >
                    <Link to="/">Tienda</Link>
                    <ul style={{ display: showSubMenu && hoveredIndex === 3 ? 'block' : 'none' }}>
                    <li>
                          <Link to="/products">Todos los productos</Link>
                        </li>
                        <li>
                          <Link to="/product-single">Productos rápidos</Link>
                        </li>
                        <li>
                          <Link to="/cart">Carro de compras</Link>
                        </li>
                        <li>
                          <Link to="/checkout">Facturar</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contáctanos</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-auth">
                {/* Verifica si el usuario está autenticado */}
                {isAuthenticated ? (
                  <div className="user-profile">
                    <div className="user-info">
                      <img src={user.picture} alt={user.name} />
                      <span className="user-name" onClick={() => logout()}>
                        {user.name}
                        <div className="dropdown-content">
                          <Link to="/" onClick={() => logout()}>
                            Cerrar sesión
                          </Link>
                        </div>
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="lang-btn" onClick={() => loginWithRedirect()}>
                      {/* Agrega el botón de inicio de sesión */}
                      Iniciar sesión
                    </span>
                  </>
                )}
              </div>
              <div className="header-cart">
                <Link to="/cart">
                  <img src={cart} alt="Carro de compras" />
                  Carro de compras
                </Link>
              </div>
              {/* ... Código del menú móvil ... */}
              <MobileMenu />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

export default Header;