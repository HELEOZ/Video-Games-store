import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaEye, FaCommentDots, FaCalendarAlt } from "react-icons/fa";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import blog4 from "../../img/blog-4.jpg";
import "./style.css";

function LatestNews(props) {
  return (
    <>
      <section className="fag-blog-area section_100">
        <div className="top-layer" />
        <div className="bottom-layer" />
        <Container>
          <Row>
          <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Latest <span>news</span>
                </h2>
                <p>
                Pokémon GO revela los eventos e incursiones para el mes de noviembre 2023 
                Pokémon GO detalla sus eventos e incursiones de noviembre 2023
                Niantic ha compartido las novedades para el mes de noviembre de 2023 en España y todo el mundo en Pokémon GO;
                descubre aquí los Pokémon destacados, recompensas, eventos, fechas, horas y mucho más.

                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="post-large">
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog1} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Accion</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                        Pokémon GO revela los eventos e incursiones para el mes de noviembre 2023
                      </Link>
                    </h3>
                    <p>
                     Sara Borondo
                     No ha logrado superar a Super Mario Odyssey o Super Mario 3D All-Stars y
                     se sitúa como el quinto juego más vendido hasta el momento en 2023 en el país.. 
                     
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendarAlt />Octubre , 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 30
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="post-small">
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog2} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Aventura</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                      Super Mario Bros. Wonder es el tercer lanzamiento físico de la serie más grande en Reino Unido
                      </Link>
                    </h3>
                    <p>
                    La cadena de tienda contará con un obsequio muy especial para los que quieran reservar el juego de Naruto, 
                    así como venderá en exclusiva su Ultimate Edition.
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                      <Link to="/blog-single">
                          <FaCalendarAlt /> Octubre, 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog3} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Pelea</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                      GAME comienza las reservas con regalos exclusivos de Naruto X Boruto Ultimate Ninja Storm CONNECTIONS
                      </Link>
                    </h3>
                    <p>
                    Con el lanzamiento de Marvel's Spider-Man 2 para el 20 de octubre en PlayStation 5
                    no hemos podido evitar pensar en qué otros superhéroes de Disney 
                    y la Casa de las Ideas podrían tener su propio videojuego con un corte similar al presentado por Insomniac Games
                    con el preciado lanzar redes de Stan Lee. No son pocos los personajes que nos encantaría controlar 
                    con nuestras manos,pero a lo largo de este artículo encontraréis los que más molaría, bajo nuestra perspectiva,
                    poder mover libremente en todo tipo de escenarios y niveles...
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendarAlt /> octubre, 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog4} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Racing</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">10 personajes de Marvel que merecen un buen videojuego como Marvel's Spider-Man 2</Link>
                    </h3>
                    <p>
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendarAlt /> Octubre, 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentDots /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/blog-single">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="load_more text-center">
                <Link to="/blog" className="fag-btn">
                  Explorar todo
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default LatestNews;
