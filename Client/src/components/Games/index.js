import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import game1 from "../../img/Juego1.jpg";
import game2 from "../../img/Juego2.jpg";
import game3 from "../../img/Juego3.jpg";
import game4 from "../../img/Juego4.jpg";
import game5 from "../../img/Juego5.jpg";
import game6 from "../../img/Juego6.jpg";
import game7 from "../../img/Juego7.jpg";
import game8 from "../../img/Juego8.jpg";
import "./style.css";

function Games(props) {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      <section className="fag-games-area section_140">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Nuestros <span>Juegos</span>
                </h2>
                <p>
                Explora nuestra impresionante colección de juegos que abarca géneros y mundos diversos. 
                Desde épicas aventuras hasta emocionantes desafíos, tenemos algo para cada tipo de jugador. 
                Nuestro equipo trabaja constantemente para mantener la diversión en constante crecimiento, así que siempre encontrarás algo nuevo por descubrir. 
                ¡Prepárate para la diversión sin fin en 'Nuestros Juegos'!
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="first"
                className="games-masonary"
              >
                <Nav className="projectFilter project-btn">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Mostrar todo</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Escritorio / PC </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Movil</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="clearfix gamesContainer">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game1} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                     Dragon Ball FighterZ
                                  </Link>
                                </h3>
                                <p className="game-meta">Lucha | Escritorio</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 26.01.2018</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L400.00</h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game2} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Farming Simulator 22
                                  </Link>
                                </h3>
                                <p className="game-meta">Simulación | Escritorio</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 22.11.2021</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L300.00</h4>
                                    <p className="off">40% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game3} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Arena of Valor
                                  </Link>
                                </h3>
                                <p className="game-meta">Acción | Movil</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 19.12.2017</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L00.00</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Descargar
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game4} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Shadow of Death: Dark Knight
                                  </Link>
                                </h3>
                                <p className="game-meta">Acción | Movil</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 03.04.2018</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L50.00</h4>
                                    <p className="off">05% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game5} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Hot Lap League: Racing Mania!
                                  </Link>
                                </h3>
                                <p className="game-meta">Carreras| Movil</p>
                                <p className="game-meta">
                                   Fecha de Lanzamiento:<span> 10.04.2022</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.3</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L100.00</del>
                                    </h4>
                                    <p className="off">20% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game6} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Stardew Valley
                                  </Link>
                                </h3>
                                <p className="game-meta">Simulación | Movil</p>
                                <p className="game-meta">
                                   Fecha de Lanzamiento:<span> 12.03.2019</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L100.00</del>
                                    </h4>
                                    <p className="off">20% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game7} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    My Hero Ultra Rumble
                                  </Link>
                                </h3>
                                <p className="game-meta">Lucha | Escritorio</p>
                                <p className="game-meta">
                                   Fecha de Lanzamiento:<span> 28.09.2023</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L00.00</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Descargar
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game8} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Baldur's Gate 3
                                  </Link>
                                </h3>
                                <p className="game-meta">Aventura| Escritorio</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 03.08.2023</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L900.00</del>
                                    </h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game8} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Baldur's Gate 3
                                  </Link>
                                </h3>
                                <p className="game-meta">Aventura | Escritorio</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 03.08.2023</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L900.00</del>
                                    </h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game6} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    My Hero Ultra Rumble
                                  </Link>
                                </h3>
                                <p className="game-meta">Lucha | Escritorio</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 28.09.2023</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L00.00</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Descargar
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game1} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Dragon Ball FighterZ
                                  </Link>
                                </h3>
                                <p className="game-meta">Lucha | Escritorio</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 26.01.2018</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L400.00</h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game2} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Farming Simulator 22
                                  </Link>
                                </h3>
                                <p className="game-meta">Simulación | Escritorio</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 22.11.2021</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L300.00</h4>
                                    <p className="off">40% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game2} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Shadow of Death: Dark Knight
                                  </Link>
                                </h3>
                                <p className="game-meta">Acción | Movil</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 03.04.2018</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L50.00</h4>
                                    <p className="off">05% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game3} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Arena of Valor
                                  </Link>
                                </h3>
                                <p className="game-meta">Acción | Movil</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 19.12.2017</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>L00.00</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Descargar
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game4} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                   Stardew Valley
                                  </Link>
                                </h3>
                                <p className="game-meta">Simulación | Desktop</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 12.03.2019</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L100.00</h4>
                                    <p className="off">20% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game1} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Hot Lap League: Racing Mania!
                                  </Link>
                                </h3>
                                <p className="game-meta">Carreras | Movil</p>
                                <p className="game-meta">
                                  Fecha de Lanzamiento:<span> 10.04.2022</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.3</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>L100.00</h4>
                                    <p className="off">20% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Comprar!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
      {modal ? (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content">
              <span className="closeVideo" onClick={closeModal}>
                <MdClose />
              </span>
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner">
                    <BiLoaderAlt className="modal__spinner-style" />
                  </div>
                ) : null}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="500"
                  src="https://www.youtube.com/embed/3SAuuHCOkyI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Games;
