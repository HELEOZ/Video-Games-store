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

  const changeClass = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 100) {
      setstate(true);
    } else {
      setstate(false);
    }
  };
  window.addEventListener("scroll", changeClass);

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
                    <li className="has-sub">
                      <Link to="/" onClick={() => {}}>
                        Paginas
                      </Link>
                      <ul>
                        <li>
                          <Link to="/about">Sobre nosotros</Link>
                        </li>
                        <li>
                          <Link to="/games">Nuestros juegos</Link>
                        </li>
                        <li>
                          <Link to="/game-single">juego único del año</Link>
                        </li>
                        <li>
                          <Link to="/error">404 Error</Link>
                        </li>
                        <li>
                          <Link to="/login">Iniciar sesión</Link>
                        </li>
                        <li>
                          <Link to="/register">Registrarse</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <Link to="/" onClick={() => {}}>
                        Noticias
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog">Todas las noticias</Link>
                        </li>
                        <li>
                          <Link to="/blog-single">Noticias rápidas</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-sub">
                      <Link to="/" onClick={() => {}}>
                        Tienda
                      </Link>
                      <ul>
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
                    {/* Agrega un botón de registro si es necesario */}
                    {/* <Link to="/register" onClick={() => {}} className="lang-btn">
                      Registro
                    </Link> */}
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

