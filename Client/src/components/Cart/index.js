import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../img/product-1.png";
import product2 from "../../img/product-3.png";

import "./style.css";

function Cart(props) {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="fag-cart-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="cart-table-left">
                <h3>Shopping Cart</h3>
                <div className="table-responsive cart_box">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Preview</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="shop-cart-item">
                        <td className="fag-cart-preview">
                          <Link to="/product-single">
                            <img src={product1} alt="cart-1" />
                          </Link>
                        </td>
                        <td className="fag-cart-product">
                          <Link to="/product-single">
                            <p>Sunglasses</p>
                          </Link>
                        </td>
                        <td className="fag-cart-price">
                          <p>$20</p>
                        </td>
                        <td className="fag-cart-quantity">
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
                        </td>
                        <td className="fag-cart-total">
                          <p>$20</p>
                        </td>
                        <td className="fag-cart-close">
                          <Link to="/" onClick={onClick}>
                            <FaTimes />
                          </Link>
                        </td>
                      </tr>
                      <tr className="shop-cart-item">
                        <td className="fag-cart-preview">
                          <Link to="/product-single">
                            <img src={product2} alt="cart-1" />
                          </Link>
                        </td>
                        <td className="fag-cart-product">
                          <Link to="/product-single">
                            <p>Flip-flops</p>
                          </Link>
                        </td>
                        <td className="fag-cart-price">
                          <p>$15</p>
                        </td>
                        <td className="fag-cart-quantity">
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
                        </td>
                        <td className="fag-cart-total">
                          <p>$15</p>
                        </td>
                        <td className="fag-cart-close">
                          <Link to="/" onClick={onClick}>
                            <FaTimes />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cart-clear">
                  <Link to="/" onClick={onClick}>
                    Vaciar Carro
                  </Link>
                  <Link to="/" onClick={onClick}>
                    Actualizar Carro
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="order-summury-box">
                <h3>Resumen del pedido</h3>
                <div className="summury-inn">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td>$35</td>
                      </tr>
                      <tr>
                        <td>Gastos de Envío </td>
                        <td>Envío  gratutito</td>
                      </tr>
                      <tr>
                        <td>Total de la orden</td>
                        <td>$35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="checkout-action">
                <Link to="/checkout" className="fag-btn">
                  Proceder a facturar <span />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Cart;
