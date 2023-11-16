import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../img/Fondo-2.png";

import "./style.css";

function Promo(props) {
  return (
    <>
      <section className="fag-promo-area">
        <div className="promo-iamge">
          <img src={img} alt="promo" />
        </div>
        <div className="promo-info">
          <Container>
            <Row>
              <Col md={7}>
                <div className="promo-box">
                  <h3>REALISTIC BATTLES</h3>
                  <p>
                  "Toma parte en batallas realistas donde la estrategia y la habilidad son clave. 
                  Nuestro campo de batalla te sumergirá en una experiencia auténtica, desafiante y llena de emoción."
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Promo;
