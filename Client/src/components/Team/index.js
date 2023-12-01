import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaSkype } from "react-icons/fa";
import img1 from "../../img/team-member.jpg";
import img2 from "../../img/team-member.jpg";
import img3 from "../../img/team-member.jpg";
import img4 from "../../img/team-member.jpg";
import img5 from "../../img/team-member.jpg";

import "./style.css";

function Team(props) {
  const onClick = (e) => {
    e.preventDefault();
  };

  const teamMembers = [
    {
      id: 1,
      name: "Denylson Velasquez",
      position: "Back End",
      image: img1,
    },
    {
      id: 2,
      name: "Leonardo Zavala",
      position: "Back End",
      image: img2,
    },
    {
      id: 3,
      name: "Axel Flores",
      position: "Hibrido",
      image: img3,
    },
    {
      id: 4,
      name: "Ana Gonzales",
      position: "Front End",
      image: img4,
    },
    {
      id: 5,
      name: "Anny Merlo",
      position: "Front End",
      image: img5,
    },
  ];

  const topTeamMembers = teamMembers.slice(0, 3);
  const bottomTeamMembers = teamMembers.slice(3);

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
                  Equipo <span>de Trabajo</span>
                </h2>
                <p>¡Conoce a las personas detrás de nuestro éxito!</p>
              </div>
            </Col>
          </Row>
          <Row>
            {topTeamMembers.map((member) => (
              <Col lg={4} sm={6} key={member.id}>
                <div className="team-item">
                  <div className="team-image">
                    <img src={member.image} alt={`team-${member.id}`} />
                  </div>
                  <div className="team-details">
                    <h3>{member.name}</h3>
                    <span>{member.position}</span>
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
            ))}
          </Row>
          <Row className="justify-content-center">
            {bottomTeamMembers.map((member) => (
              <Col lg={4} sm={6} key={member.id}>
                <div className="team-item">
                  <div className="team-image">
                    <img src={member.image} alt={`team-${member.id}`} />
                  </div>
                  <div className="team-details">
                    <h3>{member.name}</h3>
                    <span>{member.position}</span>
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
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Team;
