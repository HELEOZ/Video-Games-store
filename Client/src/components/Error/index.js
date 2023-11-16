import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

function Error(props) {
  return (
    <>
      <div className="page-404 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="page-404__content">
                  <h1 className="page-404__title">404</h1>
                  <p className="page-404__text">
                    ¡Esta pagina no fue encontrada!
                  </p>
                  <Link to="/" className="fag-btn">
                    Regresar a inicio
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Error;
