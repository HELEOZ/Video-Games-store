import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const menus = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Páginas",
    link: "/",
    submenu: [
      {
        id: 21,
        title: "Sobre Nosotros",
        link: "/about",
      },
      {
        id: 22,
        title: "Nuestros Juegos",
        link: "/games",
      },
      {
        id: 23,
        title: "Juego Único",
        link: "/game-single",
      },
    ],
  },
  {
    id: 3,
    title: "Noticias",
    link: "/",
    submenu: [
      {
        id: 31,
        title: "Todas las Noticias",
        link: "/blog",
      },
      {
        id: 32,
        title: "Noticia Individual",
        link: "/blog-single",
      },
    ],
  },
  {
    id: 4,
    title: "Tienda",
    link: "/",
    submenu: [
      {
        id: 41,
        title: "Todos los Productos",
        link: "/products",
      },
      {
        id: 42,
        title: "Producto Individual",
        link: "/product-single",
      },
      {
        id: 43,
        title: "Carro de Compras",
        link: "/cart",
      },
      {
        id: 44,
        title: "Facturar",
        link: "/checkout",
      },
    ],
  },
  {
    id: 5,
    title: "Contáctanos",
    link: "/contact",
  },
];

const MobileMenu = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [isOpen, setIsOpen] = useState(0);

  const toggleMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <>
      <div className="responsiveMenu">
        <nav id="mobileMenu" className={`mobileMenu ${menuShow ? "active" : ""}`}>
          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id} className="has-child">
                  {item.submenu ? (
                    <p
                      onClick={() => setIsOpen(isOpen ? 0 : item.id)}
                      aria-expanded={isOpen === item.id}
                    >
                      {item.title}
                    </p>
                  ) : (
                    <Link to={item.link}>{item.title}</Link>
                  )}

                  {item.submenu ? (
                    <Collapse in={item.id === isOpen}>
                      <ul className="sub-menu">
                        {item.submenu.map((submenu) => (
                          <li key={submenu.id}>
                            <Link to={submenu.link}>{submenu.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </Collapse>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className={`spinner-master ${menuShow ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div id="spinner-form" className="spinner-spin">
            <div className="spinner diagonal part-1"></div>
            <div className="spinner horizontal"></div>
            <div className="spinner diagonal part-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
