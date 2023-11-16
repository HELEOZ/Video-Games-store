import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaShoppingBag,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../img/Producto-1.jpeg";
import author1 from "../../img/4.jpg";
import author2 from "../../img/5.jpg";

import "./style.css";

function ProductsDetails(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-product-details section_100">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="product-details-image">
                <img src={img} alt="product" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="product-details-text">
                <h3>Audifonos Redragon Gaming</h3>
                <div className="tour-rating">
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
                  <p>(23 rating)</p>
                </div>
                <div className="single-pro-page-para">
                  <p>MARCA  --  edragon</p>
                  <p>NÚMERO DE PARTE  --  H350W-RGB</p>
                  <p>CÓDIGO DE BARRA  --  6950376772671</p>
                  <p>GARANTÍA  --  12 Meses</p>                 
                </div>
                <div className="single-shop-price">
                  <p>
                    Precio<span>L1,200.00</span>
                  </p>
                  <p>
                    Disponible:<span>En Stock</span>
                  </p>
                </div>
                <div className="quantity">
                  <p>Cantidad </p>
                  <div className="num-block skin-2">
                    <div className="num-in">
                      <input
                        type="number"
                        className="in-num"
                        defaultValue={1}
                        readOnly=""
                      />
                    </div>
                  </div>
                </div>
                <div className="single-shop-page-btn">
                  <Link to="/cart" className="fag-btn">
                    <FaShoppingBag /> añadir al carrito <span />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaPinterestP />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="product-panel-list">
                <Tabs
                  defaultActiveKey="description"
                  id="uncontrolled-tab-example"
                  className="product-tab"
                >
                  <Tab eventKey="description" title="description">
                    <div className="tab-gamess-details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tab-body">
                            <h3>Descripción del Producto</h3>
                            <p>
                            Audífono Redragon Gaming Pandora 3.5Mm Blanco Con Micrófono Rgb H350W
                            Diametro del diafragma: 50 mm con imanes de neodimio
                            Retroiluminación RGB de y función de apagado
                            Material Diadema: Metálica, Flexible y regulable, 
                            Recubierto de cuerina y anclajes de plástico reforzado.
                            Tipo de micrófono y captación: Omnidireccional, Desmontable con conexión 3.5 mm
                            Tipo de salida: Stereo
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Row */}
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
                                        <h4>Fer M</h4>
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
                                        <p>4 minitos atrás</p>
                                      </div>
                                      <div className="comment-text-inner">
                                        <p>
                                          Estan super lindos y son de buena calidad!!
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
                                        <h4>Karla K</h4>
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
                                        <p>12 minitos atrás</p>
                                      </div>
                                      <div className="comment-text-inner">
                                        <p>
                                          Tiene en otro color?{" "}
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
                                      <button type="submit" className="fag-btn">
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
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProductsDetails;
