import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./style.css";

function Contact(props) {
  return (
    <>
      {/* Contact Area Start */}
      <section className="fag-contact-details-area section_100">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="single-contact-box">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-head">
                  <h4>Localizacion</h4>
                </div>
                <div className="contact-text">
                  <p>
                    Tegucigalpa, Francisco Morazan <br /> Honduras 11101
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single-contact-box">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-head">
                  <h4>Telefonos </h4>
                </div>
                <div className="contact-text">
                  <p>+504 - 2226 - 3022</p>
                  <p>+504 - 9830 - 3022</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="single-contact-box">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-head">
                  <h4>Email</h4>
                </div>
                <div className="contact-text">
                  <p>support@unah.hn</p>
                  <p>info@unah.hn</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Contact Area End */}
      {/* Contact Form Start */}
      <section className="fag-contact-form section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Mande <span>Mensaje</span>
                </h2>
                <p>
                ¡Queremos saber lo que piensas! Deja tu mensaje y comparte tus pensamientos, comentarios o preguntas con nosotros. 
                Estamos aquí para escucharte y responder a tus inquietudes. 
                Tu opinión es importante para nosotros y nos ayuda a mejorar nuestros servicios.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="contact-form-inn">
                <form>
                  <Row>
                    <Col lg={6}>
                      <div className="comment-field">
                        <input
                          className="ns-com-name"
                          name="name"
                          placeholder="Nombre"
                          type="text"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="comment-field">
                        <input
                          className="ns-com-name"
                          name="email"
                          placeholder="Email"
                          type="email"
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="comment-field">
                        <textarea
                          className="comment"
                          placeholder="Escriba su comentario"
                          name="comment"
                          defaultValue={""}
                        />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="comment-field form-action">
                        <button type="submit" className="fag-btn">
                          Enviar mensaje{" "}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Contact Form End */}
    </>
  );
}

export default Contact;
