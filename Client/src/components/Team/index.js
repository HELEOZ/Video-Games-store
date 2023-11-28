import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaSkype } from "react-icons/fa";
import img1 from "../../img/team-member.jpg";
import img2 from "../../img/team-member.jpg";
import img3 from "../../img/team-member.jpg";
import img4 from "../../img/team-member.jpg";
import img5 from "../../img/team-member.jpg";
import img6 from "../../img/team-member.jpg";

import "./style.css";

function Team(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-team-area section_100">
        <div className="top-layer" />
        <div className="bottom-layer" />
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Team <span>Member</span>
                </h2>               
                <p>
                   ¡Conoce a las personas detrás de nuestro éxito!
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img1} alt="team-1" />
                </div>
                <div className="team-details">
                  <h3>---</h3>
                  <span>---</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img2} alt="team-2" />
                </div>
                <div className="team-details">
                  <h3>---</h3>
                  <span>---</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img3} alt="team-3" />
                </div>
                <div className="team-details">
                  <h3>---</h3>
                  <span>---</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img4} alt="team-4" />
                </div>
                <div className="team-details">
                  <h3>---</h3>
                  <span>---</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img5} alt="team-5" />
                </div>
                <div className="team-details">
                  <h3>---</h3>
                  <span>---</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>         
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img6} alt="team-6" />
                </div>
                <div className="team-details">
                  <h3>---</h3>
                  <span>---</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Team;