import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import "./style.css";

function PreOrder(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-preorder-area">
        <div className="preorder-inn">
          <Container>
            <Row>
              <div className="col-12 text-center">
                <div className="preorder-box">
                  <p>Liberación en 10 días</p>
                  <h3>
                    Super Mario Bros 3
                  </h3>
                  <Link to="/" onClick={onClick} className="fag-btn-outline">
                    Resérvalo ahora!
                  </Link>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default PreOrder;
