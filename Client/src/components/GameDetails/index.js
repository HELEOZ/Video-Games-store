import React, { useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import img from "../../img/Juego-1.jpg";
import game1 from "../../img/Juego1_acción.jpg";
import game2 from "../../img/Juego3_plataforma.jpg";
import game3 from "../../img/Juego3_carreras.jpg";
import game4 from "../../img/Juego1_simulación.jpg";
import feature1 from "../../img/feature-1.png";
import feature2 from "../../img/feature-2.png";
import feature3 from "../../img/feature-3.png";
import feature4 from "../../img/feature-4.png";
import author1 from "../../img/4.jpg";
import author2 from "../../img/5.jpg";

import "./style.css";

function GameDetails(props) {
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
      <section className="fag-breadcrumb-area">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="games-details-banner">
                <Row>
                  <Col lg={3} sm={4}>
                    <div className="details-banner-thumb">
                      <img src={img} alt="games" />
                    </div>
                  </Col>
                  <Col lg={6} sm={8}>
                    <div className="details-banner-info">
                      <h3>
                        Cyberpunk 2077{" "}
                        <span className="single_rating">
                          <AiFillStar />
                          4.5
                        </span>
                      </h3>
                      <div className="single_game_meta">
                        <p className="details-genre">Action | Desktop</p>
                        <p className="details-time-left">
                          <FaCalendarAlt />
                          Fecha de lanzamiento:<span> 09.12.2020</span>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className="game-price single_game_price">
                    <h4>L240.00</h4>
                      <p className="off">
                        <del>L800.00</del>
                        <span />
                        30% OFF
                      </p>
                    </div>
                    <div className="details-banner-action">
                      <Link to="/" className="fag-btn">
                        Comprar ahora
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fag-games-details-page section_100">
        <Container>
          <Row className="justify-content-end">
            <Col lg={9}>
              <div className="games-details-page-box">
              <ul>
              <li>Desarrollador:</li>
              <li>CD PROJEKT RED</li>
              <li>Editor:</li>
              <li>CD PROJEKT RED</li>
              <li>Lanzado el 09.12.2020</li>
              </ul>
                <div className="tv-panel-list">
                  <Tabs
                    defaultActiveKey="brief"
                    id="uncontrolled-tab-example"
                    className="tv-tab"
                  >
                    <Tab eventKey="brief" title="Game Brief">
                      <Row>
                        <Col md={12}>
                          <div className="tab-body">
                            <p>
                              Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto 
                              ambientado en el futuro sombrío de Night City, una peligrosa megalópolis 
                              obsesionada con el poder, el glamur y las incesantes modificaciones corporales.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="features" title="Features">
                      <div className="tab-gamess-details">
                        <Row>
                          <Col md={12}>
                            <div className="tab-body">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature1} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>Acción&amp; Aventura</h3>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature2} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>Multi Jugadores</h3>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature3} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>Héroes Gráficos Reales</h3>
                                    </div>
                                  </div>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <div className="features-game">
                                    <div className="feature-image">
                                      <img src={feature4} alt="feature" />
                                    </div>
                                    <div className="feature-text">
                                      <h3>Control Suave</h3>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Tab>
                    <Tab eventKey="reviews" title="reviews">
                      <div className="tab-gamess-details">
                        <Row>
                          <Col md={12}>
                            <div className="tab-body">
                              <div className="fag-comment-list">
                                <div className="single-comment-item">
                                  <div className="single-comment-box">
                                    <div className="main-comment">
                                      <div className="author-image">
                                        <img src={author1} alt="author" />
                                      </div>
                                      <div className="comment-text">
                                        <div className="comment-info">
                                          <h4>Cristian Lopez</h4>
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
                                              <AiFillStar />
                                            </li>
                                          </ul>
                                          <p>4 minutos atrás</p>
                                        </div>
                                        <div className="comment-text-inner">
                                          <p>
                                          Increíblemente envolvente y emocionante!!
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="single-comment-box comment_reply">
                                    <div className="main-comment">
                                      <div className="author-image">
                                        <img src={author2} alt="author" />
                                      </div>
                                      <div className="comment-text">
                                        <div className="comment-info">
                                          <h4>Carlos Rivera</h4>
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
                                              <AiFillStar />
                                            </li>
                                          </ul>
                                          <p>12 minutos atrás</p>
                                        </div>
                                        <div className="comment-text-inner">
                                        <p>
                                           Totalmente de acuerdo, una experiencia emocionante.{" "}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="single-comment-box">
                                    <div className="main-comment">
                                      <div className="author-image">
                                        <img src={author1} alt="author" />
                                      </div>
                                      <div className="comment-text">
                                        <div className="comment-info">
                                          <h4>Cristian Lopez</h4>
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
                                              <AiFillStar />
                                            </li>
                                          </ul>
                                          <p>4 minutos atrás</p>
                                        </div>
                                        <div className="comment-text-inner">
                                          <p>
                                           ¡Definitivamente! A pesar de los problemas iniciales, es un mundo que vale la pena explorar
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* /end comment list */}
                              <div className="fag-leave-comment">
                                <form>
                                  <Row>
                                    <Col lg={12}>
                                      <div className="comment-field">
                                        <textarea
                                          className="comment"
                                          placeholder="Comment..."
                                          name="comment"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg={12}>
                                      <div className="comment-field">
                                        <button
                                          type="submit"
                                          className="fag-btn"
                                        >
                                          Agregar Comentario <span />
                                        </button>
                                      </div>
                                    </Col>
                                  </Row>
                                </form>
                              </div>
                              {/* /end comment form */}
                            </div>
                          </Col>
                        </Row>
                        {/* End Row */}
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fag-games-area related_games section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Related <span>games</span>
                </h2>
                <p>
                  aquellos que se sienten halagados y comprometidos por los juegos.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6} lg={3}>
              <div className="games-item mobile">
                <div className="games-single-item img-contain-isotope">
                  <div className="games-thumb">
                    <div className="games-thumb-image">
                      <Link to="/">
                        <img src={game1} alt="games" />
                      </Link>
                    </div>
                    <div className="game-overlay">
                      <div onClick={openModal} className="popup-youtube">
                        <span>
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="games-desc">
                    <h3>
                      <Link to="/">Call of Duty: Vanguard</Link>
                    </h3>
                    <p className="game-meta">Acción | Escritorio</p>
                    <p className="game-meta">
                      Fecha de Lanzamiento:<span> 05.11.2021</span>
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
                        <h4>L700.00</h4>
                        <p className="off">40% OFF</p>
                      </div>
                      <div className="game-buy">
                        <Link to="/" className="fag-btn-outline">
                          Comprar!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="games-item desktop">
                <div className="games-single-item img-contain-isotope">
                  <div className="games-thumb">
                    <div className="games-thumb-image">
                      <Link to="/">
                        <img src={game2} alt="games" />
                      </Link>
                    </div>
                    <div className="game-overlay">
                      <div onClick={openModal} className="popup-youtube">
                        <span>
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="games-desc">
                    <h3>
                      <Link to="/">Little Nighmares</Link>
                    </h3>
                    <p className="game-meta">Plataforma | Escritorio</p>
                    <p className="game-meta">
                      Fecha de Lanzamiento:<span> 28.04.2017</span>
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
                        <Link to="/" className="fag-btn-outline">
                          Descargar
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="games-item mobile">
                <div className="games-single-item img-contain-isotope">
                  <div className="games-thumb">
                    <div className="games-thumb-image">
                      <Link to="/">
                        <img src={game3} alt="games" />
                      </Link>
                    </div>
                    <div className="game-overlay">
                      <div onClick={openModal} className="popup-youtube">
                        <span>
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="games-desc">
                    <h3>
                      <Link to="/">Need for Speed Unbound</Link>
                    </h3>
                    <p className="game-meta">Carreras | Escritorio</p>
                    <p className="game-meta">
                     Fecha de Lanzamiento:<span> 29.11.2022</span>
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
                        <h4>L1,000.00</h4>
                        <p className="off">40% OFF</p>
                      </div>
                      <div className="game-buy">
                        <Link to="/" className="fag-btn-outline">
                          Comprar!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <div className="games-item mobile">
                <div className="games-single-item img-contain-isotope">
                  <div className="games-thumb">
                    <div className="games-thumb-image">
                      <Link to="/">
                        <img src={game4} alt="games" />
                      </Link>
                    </div>
                    <div className="game-overlay">
                      <div onClick={openModal} className="popup-youtube">
                        <span>
                          <FaPlay />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="games-desc">
                    <h3>
                      <Link to="/">Railway Empire</Link>
                    </h3>
                    <p className="game-meta">Simulación| Escritorio</p>
                    <p className="game-meta">
                    Fecha de Lanzamiento:<span> 10.09.2017</span>
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
                        <h4>L200.00</h4>
                        <p className="off">50% OFF</p>
                      </div>
                      <div className="game-buy">
                        <Link to="/" className="fag-btn-outline">
                          Comprar!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default GameDetails;

