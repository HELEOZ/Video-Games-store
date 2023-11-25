import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./style.css";

function Checkout(props) {
  const handleApprove = (orderId) => {
    console.log("Pago aprobado con la orden ID:", orderId);
    // Lógica post-aprobación
  };

  const paises = ["Honduras", "El Salvador", "Guatemala", "Nicaragua", "Costa Rica",]; // Lista de países

  return (
    <PayPalScriptProvider options={{"client-id": "AQd0KzXQesR1N1q_Etwrwaoky2fepj-oOQpA4-QJkOVIrvj2Oex12SN_Xx3gj5cZLInNj_B0enphzvpl"}}>
      <section className="checkout-page-area section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="checkout-left-box">
                <h3>Detalles de facturación</h3>
                <form>
                  {/* Nombre */}
                  <Row className="checkout-form">
                    <Col md={6}>
                      <input placeholder="Tu Nombre" type="text" name="firstname" />
                    </Col>
                    {/* Apellido */}
                    <Col md={6}>
                      <input placeholder="Tu Apellido" type="text" name="lastname" />
                    </Col>
                  </Row>
                  {/* Dirección */}
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input placeholder="Dirección" type="text" name="address" />
                    </Col>
                  </Row>
                  {/* País */}
                  <Row className="checkout-form">
                    <Col md={6}>
                      <select name="country">
                        {paises.map((pais, index) => (
                          <option key={index} value={pais}>{pais}</option>
                        ))}
                      </select>
                    </Col>
                    {/* Código Postal */}
                    <Col md={6}>
                      <input placeholder="Código Postal" type="text" name="zip" />
                    </Col>
                  </Row>
                  {/* Ciudad */}
                  <Row className="checkout-form">
                    <Col md={6}>
                      <input placeholder="Ciudad" type="text" name="city" />
                    </Col>
                    {/* Número de Teléfono */}
                    <Col md={6}>
                      <input placeholder="Número de Teléfono" type="text" name="phone" />
                    </Col>
                  </Row>
                  {/* Email */}
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input placeholder="Correo Electrónico" type="email" name="email" />
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={4}>
              <div className="order-summury-box">
                {/* Resumen del pedido */}
              </div>
              <div className="booking-right">
                <div className="action-btn">
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [{
                          amount: {
                            value: "270", // Total del pedido
                          },
                        }],
                      });
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then((details) => {
                        handleApprove(data.orderID);
                      });
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </PayPalScriptProvider>
  );
}

export default Checkout;
