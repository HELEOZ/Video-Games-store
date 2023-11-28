import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
/*import axios from "axios";*/


import "./style.css";

function Register(props) {

  const onClick = (e) => {
    e.preventDefault();

  /*const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onClick = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      username: e.target.value,
      email: e.target.value,
      password: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realiza la solicitud al backend utilizando Axios
      const response = await axios.post("http://localhost:9000/api/register", userData);

      // Puedes hacer algo con la respuesta del backend si es necesario
      console.log("Respuesta del backend:", response.data);
    } catch (error) {
      // Manejar errores aquí
      console.error("Error al crear cuenta:", error);
    }*/
  };

  return (
    <>
      <div className="page-404 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="login-wrapper">
                  <h3>Crear Cuenta</h3>
                  <form>
                    <div className="form-row">
                      <input type="text" placeholder="Username" />
                    </div>
                    <div className="form-row">
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="form-row">
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="form-row">
                      <div className="custom-checkbox">
                        <input
                          id="terms"
                          type="checkbox"
                          name="terms"
                          defaultChecked="checked"
                        />
                        <label htmlFor="terms">
                          I agree to the{" "}
                          <Link to="/" onClick={onClick}>
                            Privacy Policy
                          </Link>
                        </label>
                        <span className="checkbox" />
                      </div>
                    </div>
                    <div className="form-row" />
                    <div className="form-row">
                      <button className="fag-btn" type="submit">
                        Cuenta creada!
                      </button>
                    </div>
                  </form>
                  <div className="socials-wrapper">
                    <p>Signup with your Social Account</p>
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick} className="facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitch">
                          <FaTwitch />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
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

export default Register;
