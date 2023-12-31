import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import product1 from "../../img/product-1.jpeg";

import "./style.css";

function Cart(props) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Audífonos Redragon Gaming",
      price: 1200,
      quantity: 1,
    },
  ]);

  const clearCart = () => {
    setCartItems([]);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity >= 0) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });
      setCartItems(updatedCart);
    }
  };

  return (
    <>
      <section className="fag-cart-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="cart-table-left">
                <h3>Carrito de Compras</h3>
                <div className="table-responsive cart_box">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id} className="shop-cart-item">
                          <td className="fag-cart-preview">
                            <Link to="/product-single">
                              {item.id === 1 && <img src={product1} alt={item.name} />}
                            </Link>
                          </td>
                          <td className="fag-cart-product">
                            <Link to="/product-single">
                              <p>{item.name}</p>
                            </Link>
                          </td>
                          <td className="fag-cart-price">
                            <p>L {item.price}</p>
                          </td>
                          <td className="fag-cart-quantity">
                            <div className="num-block skin-2">
                              <div className="num-in">
                                <input
                                  type="number"
                                  className="in-num"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    updateQuantity(item.id, parseInt(e.target.value))
                                  }
                                />
                              </div>
                            </div>
                          </td>
                          <td className="fag-cart-total">
                            <p>L {item.price * item.quantity}</p>
                          </td>
                          <td className="fag-cart-close">
                            <button onClick={() => removeItem(item.id)}>
                              <FaTimes />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart-clear">
                  <button onClick={clearCart}>Vaciar Carro</button>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="order-summary-box">
                <h3>Resumen del Pedido</h3>
                <div className="summary-inn">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td>L {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</td>
                      </tr>
                      <tr>
                        <td>Gastos de Envío</td>
                        <td>Envío Gratuito</td>
                      </tr>
                      <tr>
                        <td>Total de la Orden</td>
                        <td>L {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="checkout-action">
                <Link to="/checkout" className="fag-btn">
                  Proceder a Facturar <span />
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
