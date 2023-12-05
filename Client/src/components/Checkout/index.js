import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./style.css";
import axios from "axios";

function Checkout(props) {
  const [isPaid, setIsPaid] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      setIsPaid(true);
      // Genera un número de orden aleatorio (puedes ajustar esto según tus necesidades)
      const randomOrderNumber = Math.floor(Math.random() * 100000);
      setOrderNumber(randomOrderNumber);

      // Enviar confirmación de pago al backend usando Axios
      axios
        .post("http://localhost:9000/capture-order", { details, orderNumber })
        .then((response) => {
          // Manejar la respuesta del backend si es necesario
          // orderId: details.id,  // Puedes ajustar según tus necesidades
          console.log("Confirmación de pago:", response.data);
        })
        .catch((error) => {
          // Manejar errores si es necesario
          console.error("Error al enviar confirmación de pago:", error);
        });
    });
  };

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQd0KzXQesR1N1q_Etwrwaoky2fepj-oOQpA4-QJkOVIrvj2Oex12SN_Xx3gj5cZLInNj_B0enphzvpl",
      }}
    >
      <section className="checkout-page-area section_100">
        <Container>
          <Row>
            <Col lg={4} className="offset-lg-4">
              <div className="booking-right">
                <div className="action-btn">
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "1200", // Cambia este valor a 1200 para Lempiras
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={handleApprove}
                  />
                </div>
              </div>
              <div className="order-summury-box">
                {/* Resumen del pedido */}
                {isPaid && (
                  <div>
                    <p>Compra exitosa</p>
                    <p>Número de orden: {orderNumber}</p>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </PayPalScriptProvider>
  );
}

export default Checkout;


