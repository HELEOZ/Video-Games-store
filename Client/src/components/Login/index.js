// Login.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";  // Importa useAuth0
import avatar from "../../img/login-avatar.png";

import "./style.css";

function Login(props) {
  const { loginWithRedirect } = useAuth0();  // Destructura loginWithRedirect del hook useAuth0

  const onClick = (e) => {
    e.preventDefault();
    loginWithRedirect({ redirectUri: window.location.origin });  // Esto redirigirá al usuario a la página principal después del login
  };

  return (
    <>
      <div className="page-404 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="login-wrapper">
                  <img className="login_user" src={avatar} alt="login user" />
                  <h3>Inicio de sesion</h3>
                  <div className="form-row">
                    <button className="fag-btn" type="button" onClick={onClick}>  {/* Agrega el manejador onClick */}
                     ¡Inicia sesion en tu cuenta!
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;