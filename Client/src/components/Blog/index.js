import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaAngleRight,
  FaCalendar,
  FaCommentAlt,
  FaEye,
  FaPlay,
  FaSearch,
} from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import blogs1 from "../../img/blog-small-1.jpg";
import blogs2 from "../../img/blog-small-2.jpg";
import blogs3 from "../../img/blog-small-3.jpg";

import "./style.css";

function Blog(props) {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = (e) => {
    setModal(true);
    e.preventDefault();
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-news-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
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
                      Explora, Captura y Combate: La Aventura Pokémon Go en el Mundo Real
                      </Link>
                    </h3>
                    <p>
                    Embárcate en una emocionante aventura en el mundo real con Pokémon Go.
                    Explora tu entorno para descubrir y capturar una amplia variedad de Pokémon esparcidos por todos lados. 
                    Con tu smartphone como tu guía, el mundo real se convierte en el escenario de tu propia aventura Pokémon. 
                    Participa en intensas batallas de Gimnasio, une fuerzas con otros Entrenadores en emocionantes Incursiones y completa tu Pokédex mientras descubres nuevos Pokémon en cada esquina. Pokémon Go transforma la clásica experiencia de entrenador Pokémon, invitándote a salir al exterior y descubrir la magia de la naturaleza mientras interactúas con Pokémon en una experiencia de juego enriquecida y social. 
                    ¡Prepara tus Pokébolas y comienza tu viaje como Entrenador Pokémon en un mundo lleno de descubrimientos y desafíos!
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendar /> Septiembre 9, 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentAlt /> 32
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
                {/*/.end blog item*/}
                <div className="blog-item">
                  <div className="blog-image">
                    <Link to="/blog-single">
                      <img src={blog2} alt="blog" />
                    </Link>
                    <div
                      onClick={openModal}
                      className="play-video"
                      href="https://www.youtube.com/watch?v=uONO7jlQBO0"
                    >
                      <FaPlay />
                    </div>
                  </div>
                  <div className="blog-text">
                    <p className="blog-cat">
                      <Link to="/blog-single">Aventura</Link>
                    </p>
                    <h3>
                      <Link to="/blog-single">
                      Super Mario Bros. Wonder: ¡Una Maravillosa Aventura Lateral!
                      </Link>
                    </h3>
                    <p>
                    Descubre la magia y la maravilla en "Super Mario Bros. Wonder", una nueva y emocionante aventura de desplazamiento lateral en 2D para Nintendo Switch. 
                    Únete a Mario y sus amigos mientras exploran el colorido y encantador Reino Flor, donde las Flores Maravilla traen una nueva dimensión a la jugabilidad clásica de Mario.   
                    Al activar estas flores especiales, podrás transformar el mundo a tu alrededor y desbloquear habilidades únicas para cada personaje.
                    Experimenta con los nuevos objetos potenciadores como la Elefanzana, 
                    que permite a Mario transformarse en un elefante y usar su trompa para derrotar a los enemigos, 
                    o la Flor Burbuja que te permite crear burbujas para rebotar o atrapar a los villanos.
                    Además, descubre el Champitaladro para explorar áreas ocultas bajo tierra o incluso en el techo.
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendar /> Septiembre 22, 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentAlt /> 32
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
                {/*/.end blog item*/}
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
                      Naruto Shippuden: Ultimate Ninja Storm 4 - ¡La Batalla Ninja Definitiva!                      
                      </Link>
                    </h3>
                    <p>
                    Entra en el vibrante mundo de "Naruto Shippuden: Ultimate Ninja Storm 4", el capítulo final de la aclamada serie Ultimate Ninja Storm, desarrollado por CyberConnect2 y publicado por Bandai Namco Entertainment. 
                    Esta entrega, disponible para PlayStation 4, Xbox One y PC, te lleva a través de la emocionante Cuarta Gran Guerra Ninja, 
                    donde los jóvenes ninjas Naruto Uzumaki y Sasuke Uchiha se unen contra la organización terrorista Akatsuki en una lucha por la paz.

                   Revive los momentos cruciales del universo de Naruto en gráficos impresionantes y con un sistema de combate renovado que permite una experiencia de juego más fluida y emocionante. 
                   Con la capacidad de intercambiar personajes en medio de la batalla y ejecutar poderosos Jutsus Definitivos, 
                   cada enfrentamiento es una mezcla de estrategia y acción.
                   Descubre también la expansión "Road to Boruto", que trae nuevos personajes y aventuras basadas en la película "Boruto: Naruto the Movie".

                   El juego cuenta con la mayor lista de luchadores en la historia de la serie, 
                   con 106 personajes del universo Naruto, incluyendo variantes de los mismos personajes y figuras clave de las películas "The Last: Naruto the Movie" y "Boruto: Naruto the Movie". Además, disfruta de intensas batallas en arenas 3D donde la acción no tiene límites, desde combates en las paredes hasta duelos con armas y armaduras destructibles.
                    </p>
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/blog-single">
                          <FaCalendar /> Ocubre 9, 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/blog-single">
                          <FaCommentAlt /> 32
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
                {/*/.end blog item*/}
              </div>
              <div className="pagination-box-row">
                <p>Page 1 of 6</p>
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
            <Col lg={4}>
              <div className="sidebar-widget">
                <div className="news-sidebar-item">
                  <form>
                    <input type="search" placeholder="Search..." />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className="news-sidebar-item">
                  <h3>Categorias</h3>
                  <ul className="categories">
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Accion
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Aventura
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Deportes
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Carreras
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Pelea
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Estrategia
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single">
                        <FaAngleRight />
                        Supervivencia
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <FaAngleRight />
                        Horror
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="news-sidebar-item">
                  <h3>Publicaciones recientes</h3>
                  <ul className="recent-blog">
                    <li>
                      <div className="recent-img">
                        <Link to="/blog-single">
                          <img src={blogs1} alt="img" />
                        </Link>
                      </div>
                      <div className="recent-text">
                        <h4>
                          <Link to="/blog-single">
                          Explorando el Mundo de Pokémon Go: ¡Atrápalos Todos!
                          </Link>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="recent-img">
                        <Link to="/blog-single">
                          <img src={blogs2} alt="img" />
                        </Link>
                      </div>
                      <div className="recent-text">
                        <h4>
                          <Link to="/blog-single">
                          Descubriendo las Maravillas en Super Mario Bros. Wonder
                          </Link>
                        </h4>
                      </div>
                    </li>
                    <li>
                      <div className="recent-img">
                        <Link to="/blog-single">
                          <img src={blogs3} alt="img" />
                        </Link>
                      </div>
                      <div className="recent-text">
                        <h4>
                          <Link to="/blog-single">
                          Naruto Shippuden: Ultimate Ninja Storm 4 - ¡La Batalla Final!
                          </Link>
                        </h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="news-sidebar-item">
                  <h3>Archivados</h3>
                  <ul className="categories">
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        Agosto 2023 <span>(29)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        Septiembre 2023 <span>(12)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        <FaAngleRight />
                        Octubre 2023 <span>(22)</span>
                      </Link>
                    </li>
                  </ul>
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
                  src="https://www.youtube.com/watch?v=uONO7jlQBO0"
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

export default Blog;
