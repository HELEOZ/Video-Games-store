import React, { useState } from "react";
import CommentComponent from "./coment";
import axios from 'axios';

// Resto de tu código...

import { Container, Row, Col } from "react-bootstrap";
import {
  FaAngleRight,
  FaCalendar,
  FaCommentAlt,
  FaEye,
  FaSearch,
} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import blog1 from "../../img/blog-1.jpg";
import blog2 from "../../img/blog-2.jpg";
import blog3 from "../../img/blog-3.jpg";
import blogs1 from "../../img/blog-small-1.jpg";
import blogs2 from "../../img/blog-small-2.jpg";
import blogs3 from "../../img/blog-small-3.jpg";
import author1 from "../../img/4.jpg";
import author2 from "../../img/5.jpg";

import "./style.css";

function BlogDetails(props) {

  // Estado para los datos del comentario y para todos los comentarios
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    comment: ""
  });
  const [comments, setComments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza la solicitud POST a tu backend
      const response = await axios.post('http://localhost:9000/api/comments', commentData);
  
      // Verifica si la solicitud fue exitosa (código 201)
      if (response.status === 201) {
        // Agrega el nuevo comentario al arreglo de comentarios
        setComments([...comments, response.data]);
        // Resetea el formulario
        setCommentData({ name: "", email: "", comment: "" });
      } else {
        // Maneja errores si la solicitud no fue exitosa
        console.error('Error al enviar el comentario');
      }
    } catch (error) {
      // Maneja errores de la solicitud
      console.error('Hubo un problema con la solicitud:', error);
    }
  };

  const [editing, setEditing] = useState(null); // Almacena el índice del comentario que se está editando
  const handleEdit = (index) => {
    setEditing(index);
    setCommentData({ ...comments[index] });
  };
  // Función para eliminar un comentario
  const handleDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const saveComment = () => {
    const updatedComments = [...comments];
    updatedComments[editing] = commentData;
    setComments(updatedComments);
    setEditing(null);
    setCommentData({ name: "", email: "", comment: "" });
  };


  return (
    <>
      <section className="fag-news-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="post-large blog-details">
                <div className="blog-item">
                  <div className="blog-image">
                    <img src={blog1} alt="blog" />
                  </div>
                  <div className="blog-text">
                    <ul className="post-info">
                      <li className="post-date">
                        <Link to="/">
                          <FaCalendar /> Ocubre 15, 2023
                        </Link>
                      </li>
                      <li className="post-comments">
                        <Link to="/">
                          <FaCommentAlt /> 32
                        </Link>
                      </li>
                      <li className="post-fav">
                        <Link to="/">
                          <FaEye />
                          56
                        </Link>
                      </li>
                    </ul>
                    <h3>"Explora Nuevos Mundos y Enfrenta Desafíos Épicos con Pokémon Go, Super Mario Bros. Wonder y Naruto Shippuden: Ultimate Ninja Storm 4 en Variadas Plataformas</h3>
                    <p>
                      Descubre la emoción y la aventura con tres de los títulos de videojuegos más populares que continúan capturando la imaginación de los jugadores alrededor del mundo. Pokémon Go, Super Mario Bros. Wonder y Naruto Shippuden: Ultimate Ninja Storm 4 ofrecen una mezcla de exploración, combate y estrategia en plataformas variadas. Aquí te presentamos un vistazo a lo que cada uno de estos emocionantes juegos tiene para ofrecer:
                    </p>
                    <p>
                      Pokémon Go:
                      Plataformas Disponibles: Disponible en dispositivos móviles iOS y Android.
                      Características Destacadas: Explora el mundo real para capturar Pokémon, participa en batallas de Gimnasio, y coopera con otros entrenadores en Incursiones.
                    </p>
                    <p>
                      Super Mario Bros. Wonder:
                      Plataformas Disponibles: Exclusivo para Nintendo Switch.
                      Características Destacadas: Un nuevo giro en la jugabilidad clásica de Mario con la incorporación de las Flores Maravilla que transforman el mundo del juego y desbloquean habilidades únicas.
                    </p>
                    <p>
                      Naruto Shippuden: Ultimate Ninja Storm 4:
                      Plataformas Disponibles: PlayStation 4, Xbox One, PC y Nintendo Switch (versión Road to Boruto).
                      Características Destacadas: Revive la Cuarta Gran Guerra Ninja con una amplia lista de 106 luchadores, y experimenta combates en 3D con un sistema de batalla renovado.
                    </p>
                    <div className="blog-inner-image">
                      <Row>
                        <Col sm={6}>
                          <div className="destination-desc-img">
                            <img src={blog2} alt="gallery 1" />
                          </div>
                        </Col>
                        <Col sm={6}>
                          <div className="destination-desc-img">
                            <img src={blog3} alt="gallery 1" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <p>
                      Estos juegos no solo brindan horas de entretenimiento, sino que también permiten a los jugadores sumergirse en mundos fantásticos, enfrentar desafíos emocionantes y compartir la experiencia con amigos. Ya sea que estés buscando la nostalgia de un juego de Mario, la emoción de las batallas ninja o la exploración del mundo real en busca de Pokémon, hay algo para todos en estos títulos.
                    </p>
                    <blockquote>
                      Con una combinación de jugabilidad innovadora, gráficos impresionantes y historias envolventes, Pokémon Go, Super Mario Bros. Wonder y Naruto Shippuden: Ultimate Ninja Storm 4 siguen siendo opciones sólidas para los aficionados a los videojuegos en 2023.
                    </blockquote>
                    <p>
                      Es importante destacar que los precios y los requisitos específicos pueden variar según la plataforma y la región, por lo que se recomienda revisar las tiendas oficiales y los sitios web de los desarrolladores para obtener información detallada y actualizada sobre cada juego.
                    </p>
                  </div>
                </div>
                {/*/.end blog item*/}
                <div className="fag-comment-list">
                  <div className="comment-group-title">
                    <h3>Comments (03)</h3>
                  </div>
                  <div className="single-comment-item">
                    <div className="single-comment-box">
                      <div className="main-comment">
                        <div className="author-image">
                          <img src={author1} alt="author" />
                        </div>
                        <div className="comment-text">
                          <div className="comment-info">
                            <h4>david kamal</h4>
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
                            <p>Hace 4 minutos</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              ¡Qué emocionante es ver cómo estos juegos continúan evolucionando y ofreciendo nuevas experiencias! He jugado Pokémon Go desde su lanzamiento y la forma en que integra el mundo real con el mundo Pokémon es simplemente genial. Me encanta la idea de salir y explorar para encontrar nuevos Pokémon. ¡Y las incursiones en grupo son siempre una explosión!
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
                            <h4>Jerix Ablin</h4>
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
                            <p>Hace 2 minutos</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              Super Mario Bros. Wonder es una verdadera joya para los aficionados de Mario como yo. La incorporación de las Flores Maravilla añade un nuevo nivel de estrategia y diversión al juego. Es increíble cómo un pequeño giro en la jugabilidad puede hacer que un juego clásico se sienta fresco y emocionante de nuevo. Además, la opción de jugar con amigos en el modo multijugador local es un gran acierto. ¡Es Mario en su máxima expresión!{" "}
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
                            <h4>David Kamal</h4>
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
                            <p>Hace un momento</p>
                          </div>
                          <div className="comment-text-inner">
                            <p>
                              Naruto Shippuden: Ultimate Ninja Storm 4 es, en mi opinión, uno de los mejores juegos de lucha basados en anime que he jugado. La lista de personajes es impresionante y las batallas son intensas y visualmente impactantes. La historia te lleva a través de momentos cruciales de la saga Naruto y es emocionante de principio a fin. La expansión Road to Boruto es la cereza del pastel, extendiendo la historia y añadiendo nuevos personajes y mecánicas. ¡Altamente recomendado para cualquier fan de Naruto!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sección de Lista de Comentarios */}
                <div className="fag-comment-list">
                  <div className="comment-group-title">
                    <h3>Comentarios personales ({comments.length})</h3>
                  </div>
                  {comments.map((comment, index) => (
                    <div key={index} className="single-comment-item">
                      <div className="single-comment-box">
                        <div className="main-comment">
                          {/* Aquí puedes agregar una imagen de autor si lo deseas */}
                          {editing === index ? (
                            <div>
                              {/* Formulario para editar el comentario */}
                              <textarea
                                className="form-control"
                                value={commentData.comment}
                                onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                              />
                              <button onClick={saveComment}>Guardar</button>
                              <button onClick={() => setEditing(null)}>Cancelar</button>
                            </div>
                          ) : (
                            <div className="comment-text-inner">
                              <p>{comment.comment}</p>
                              <button onClick={() => handleEdit(index)}>Editar</button>
                              {/* Botón actualizado para eliminar */}
                              <button onClick={() => handleDelete(index)}>Eliminar</button>
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* /end comment list */}
                {/* Comienzo del formulario de comentarios */}
                <div className="fag-comment-form">
                  <h3>Deja tu comentario</h3>
                  {/* Renderiza el componente CommentComponent aquí */}
                  {/* <CommentComponent /> */}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre Completo"
                        value={commentData.name}
                        onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={commentData.email}
                        onChange={(e) => setCommentData({ ...commentData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Tu Comentario"
                        rows="5"
                        value={commentData.comment}
                        onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar Comentario</button>
                  </form>
                </div>
                {/* Fin del formulario de comentarios */}

                {/* /end comment form */}
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
                  <h3>Archive</h3>
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
    </>
  );
}

export default BlogDetails;
