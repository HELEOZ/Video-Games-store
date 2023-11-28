import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import product1 from "../../img/Producto-1.jpeg";
import product2 from "../../img/Producto-2.jpg";
import product3 from "../../img/Producto-3.jpg";
import product4 from "../../img/Producto-4.jpg";
import product5 from "../../img/Producto-5.png";
import product6 from "../../img/Producto-6.png";
import product7 from "../../img/Producto-7.jpg";
import product8 from "../../img/Producto-8.jpg";
import product9 from "../../img/Producto-9.jpg";

import "./style.css";
import { FaAngleRight } from "react-icons/fa";

function Products(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-product-page section_100">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="sidebar-widget">
                <div className="filter">
                  <h4 className="filter_title">
                    Filters <button type="button">LIMPIAR TODO</button>
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
                      Sort by:
                    </label>
                    <div className="filter_select-wrap">
                      <select name="sort" id="sort" className="filter_select">
                        <option value={0}>Relevance</option>
                        <option value={1}>Newest</option>
                        <option value={2}>Oldest</option>
                      </select>
                    </div>
                  </div>

                  <div className="filter_group">
                    <label className="filter_label">Categories:</label>
                    <ul className="filter_checkboxes">
                      <li className="custom-checkbox">
                        <input id="type5" type="checkbox" name="type5" />
                        <label htmlFor="type5">Action</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type6" type="checkbox" name="type6" />
                        <label htmlFor="type6">Adventure</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type7" type="checkbox" name="type7" />
                        <label htmlFor="type7">Fighting</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type8" type="checkbox" name="type8" />
                        <label htmlFor="type8">Flight simulation</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type9" type="checkbox" name="type9" />
                        <label htmlFor="type9">Platform</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type10" type="checkbox" name="type10" />
                        <label htmlFor="type10">Racing</label>
                        <span className="checkbox" />
                      </li>
                    </ul>
                  </div>
                  <div className="filter_group">
                    <button className="fag-btn" type="button">
                      APPLY FILTER
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="products-grid">
                <div className="row">
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product1} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">Audifonos Redragon Gaming</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L1,200.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product2} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">Teclado - DURGOD TGK021</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L1,500.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product3} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">IOGEAR KeyMander</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L1,000.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product4} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">
                            Mouse inalámbrico
                          </Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L1,000.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product5} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">Letrero LED Mario Bros</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L1,000.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                             Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product6} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">Bloque Luz - Paladone</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L1,000.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product7} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">Lámpara - Pac Man</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L800.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product8} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">Joy-Con (L)/(R)</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L1,800.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/product-single">
                            <img src={product9} alt="product" />
                          </Link>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/product-single">RTX - Tarjeta Gráfica</Link>
                        </h3>
                        <div className="game-rating">
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
                        </div>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>L5,000.00</h4>
                          </div>
                          <div className="game-buy">
                            <Link
                              to="/product-single"
                              className="fag-btn-outline"
                            >
                              Comprar!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
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
    </>
  );
}

export default Products;