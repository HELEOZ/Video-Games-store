import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import product1 from "../../img/Producto-1.jpeg";
import product2 from "../../img/Producto-2.jpg";
import product3 from "../../img/Producto-3.jpg";

const Products = () => {
  const [filter, setFilter] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Audifonos Redragon Gaming",
      price: 1200,
      image: product1,
    },
    {
      id: 2,
      name: "Teclado - DURGOD TGK021",
      price: 1500,
      image: product2,
    },
    {
      id: 3,
      name: "IOGEAR KeyMander",
      price: 1000,
      image: product3,
    },
  ];

  const addToCart = (name) => {
    if (!cartItems.includes(name)) {
      setCartItems([...cartItems, name]);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <section className="product-section">
        <Container>
          <Row>
            <Col md={3}>
              <h3>Filtrar</h3>
              <Form.Control
                type="text"
                placeholder="Buscar productos"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </Col>
            <Col md={9}>
              <div className="products-list">
                <Row>
                  {filteredProducts.map((product) => (
                    <Col lg={4} sm={6} key={product.id}>
                      <div className="games-single-item">
                        <div className="games-thumb">
                          <div className="games-thumb-image">
                            <Link to="/product-single">
                              <img src={product.image} alt="product" />
                            </Link>
                          </div>
                        </div>
                        <div className="games-desc">
                          <h3>
                            <Link to="/product-single">{product.name}</Link>
                          </h3>
                          <div className="game-action">
                            <div className="game-price">
                              <h4>L{product.price}.00</h4>
                            </div>
                            <div className="game-buy">
                              <button
                                onClick={() => addToCart(product.name)}
                                className="fag-btn-outline"
                              >
                                {cartItems.includes(product.name)
                                  ? "En el carro"
                                  : "Añadir al carro"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
