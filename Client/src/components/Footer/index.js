import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCaretRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../img/logo.png";

import "./style.css";

function Footer(props) {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer className="fag-footer">
        <div className="footer-top-area">
          <Container>
            <Row>
              <Col lg={4} sm={6}>
                <div className="single-footer">
                  <h3>Sobre Nosotros</h3>
                  <p>
                  Nuestros jugadores son como héroes digitales, navegando por mundos virtuales, enfrentando monstruos, resolviendo enigmas y forjando amistades. 
                  Juntos, creamos historias épicas y compartimos risas y emoción. 
                  En cada pantalla, en cada plataforma, nuestros jugadores son los verdaderos protagonistas.
                  </p>
                  <p>
                    {" "}
                  </p>
                </div>
              </Col>
              <Col lg={2} sm={6}>
                <div className="widget-content">
                  <div className="single-footer">
                    <h3>Explora</h3>
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Sobre Nostros
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Nuestros Juegos
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Conctactanos
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Ayuda &amp; Soporte
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Politicas de privacidad
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="widget-content">
                  <div className="single-footer">
                    <h3>Otros juegos</h3>
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Need For Speed
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Call Of Duty
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Resident Evil
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />
                          Dragons Fight
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaCaretRight />2 Player Champions
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg={3} sm={6}>
                <div className="single-footer">
                  <h3>Contactanos</h3>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaMapMarkerAlt />
                      Direccion{" "}
                    </h4>
                    <p>
                    Tegucigalpa, Francisco Morazan
                     Honduras 11101
                      <br />
                    </p>
                  </div>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaEnvelope />
                      Email Address
                    </h4>
                    <p>info@unah.com</p>
                  </div>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaPhoneAlt />
                      Telefono{" "}
                    </h4>
                    <p>+504 9830-3022</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="footer-bottom-inn">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaYoutube />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>
                      &copy; Copyrights {new Date().getFullYear()} Gaming React - All Rights Reserved
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;
