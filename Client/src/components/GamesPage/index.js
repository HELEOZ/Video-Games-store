import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import games1 from "../../img/Juego-1.jpg";
import games2 from "../../img/Juego-2.jpg";
import games3 from "../../img/Juego-3.jpg";
import games4 from "../../img/Juego-4.jpg";
import games5 from "../../img/Juego-5.jpg";
import games6 from "../../img/Juego-6.jpg";

import "./style.css";

function GamesPage(props) {
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

  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-game-page section_100">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="sidebar-widget">
                <div className="filter">
                  <h4 className="filter_title">
                    FILTROS <button type="button">LIMPIAR TODO</button>
                  </h4>
                  <div className="filter_group">
                    <label className="filter_label">Palabra clave:</label>
                    <input
                      type="text"
                      className="filter_input"
                      placeholder="Keyword"
                    />
                  </div>
                  <div className="filter_group">
                    <label htmlFor="sort" className="filter_label">
                      Pasar por:
                    </label>
                    <div className="filter_select-wrap">
                      <select name="sort" id="sort" className="filter_select">
                        <option value={0}>Relevante</option>
                        <option value={1}>Más nuevo</option>
                        <option value={2}>Más viejo</option>
                      </select>
                    </div>
                  </div>
                  <div className="filter_group">
                    <label className="filter_label">Plataformas:</label>
                    <ul className="filter_checkboxes">
                      <li className="custom-checkbox">
                        <input id="type1" type="checkbox" name="type1" />
                        <label htmlFor="type1">Playstation</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type2" type="checkbox" name="type2" />
                        <label htmlFor="type2">XBOX</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type3" type="checkbox" name="type3" />
                        <label htmlFor="type3">Windows</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type4" type="checkbox" name="type4" />
                        <label htmlFor="type4">Mac OS</label>
                        <span className="checkbox" />
                      </li>
                    </ul>
                  </div>
                  <div className="filter_group">
                    <label className="filter_label">Géneros:</label>
                    <ul className="filter_checkboxes">
                      <li className="custom-checkbox">
                        <input id="type5" type="checkbox" name="type5" />
                        <label htmlFor="type5">Acción</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type6" type="checkbox" name="type6" />
                        <label htmlFor="type6">Aventura</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type7" type="checkbox" name="type7" />
                        <label htmlFor="type7">Lucha</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type8" type="checkbox" name="type8" />
                        <label htmlFor="type8">Simulación</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type9" type="checkbox" name="type9" />
                        <label htmlFor="type9">Plataforma</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type10" type="checkbox" name="type10" />
                        <label htmlFor="type10">Carreras</label>
                        <span className="checkbox" />
                      </li>
                    </ul>
                  </div>
                  <div className="filter_group">
                    <button className="fag-btn" type="button">
                      APLICAR FILTRO
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="games-category">
                <Row>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games1} alt="games" />
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
                          <Link to="/game-single">Cyberpunk 2077</Link>
                        </h3>
                        <p className="game-meta">Acción | Escritorio</p>
                        <p className="game-meta">
                          Fecha de lanzamiento:<span> 09.12.2020</span>
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
                            <h4>L800.00</h4>
                            <p className="off">30% OFF</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games2} alt="games" />
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
                         <Link to="/game-single">The Last of Us Part 1</Link>
                        </h3>
                        <p className="game-meta">Aventura | Escritorio</p>
                        <p className="game-meta">
                          Fecha de Lanzamiento:<span> 28.03.2023</span>
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
                            <h4>L600.00</h4>
                            <p className="off">20% OFF</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games3} alt="games" />
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
                          <Link to="/game-single">Cities: Skylines</Link>
                        </h3>
                        <p className="game-meta">Simulación | Escritorio</p>
                        <p className="game-meta">
                          Fecha de lanzamiento:<span> 10.02.2015</span>
                        </p>
                        <div className="game-rating">
                          <h4>4.0</h4>
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
                            <p className="free">FREE</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Descargar
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games4} alt="games" />
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
                          <Link to="/game-single">The Sims 4</Link>
                        </h3>
                        <p className="game-meta">Simulación | Escritorio</p>
                        <p className="game-meta">
                          Fecha de lanzamiento:<span> 02.10.2014</span>
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
                              <del>L100.00</del>
                            </h4>
                            <p className="free">FREE</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Descargar
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games5} alt="games" />
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
                          <Link to="/game-single">Mortal Kombat 11</Link>
                        </h3>
                        <p className="game-meta">Lucha | Escritorio</p>
                        <p className="game-meta">
                          Fehca de lanzamiento:<span> 23.04.2019</span>
                        </p>
                        <div className="game-rating">
                          <h4>4.6</h4>
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
                            <h4>L800.00</h4>
                            <p className="off">50% OFF</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games6} alt="games" />
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
                          <Link to="/game-single">carX Drift Racing 2</Link>
                        </h3>
                        <p className="game-meta">Carreras | Escritorio</p>
                        <p className="game-meta">
                          Fehca de lanzamiento:<span> 26.10.2018</span>
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
                            <h4>L600.00</h4>
                            <p className="off">20% OFF</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="pagination-box-row">
                <p>Página 1 de 6</p>
                <ul className="paginations">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      3
                    </Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      6
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaAngleRight />
                    </Link>
                  </li>
                </ul>
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
                  src="https://youtu.be/Q_v3ttvCVfA?si=8pnI9e3d2yLcoA7d"
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

export default GamesPage;
