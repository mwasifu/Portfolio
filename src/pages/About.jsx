import React, { useState } from "react";
import {
  Col,
  Container,
  Image,
  Row,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";
import {Link} from "react-router-dom"

import Typewriter from "typewriter-effect";
import ParticleComponent from "../components/ParticleComponent";

const About = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Container fluid style={{ padding: "0" }}>
      <ParticleComponent />

      <Col
        style={{
          backgroundColor: "black",
          textAlign: "center",
          padding: "5%",
          color: "white",
          fontWeight: "300",
          fontSize: "2rem",
        }}
      >
        <Col>
          <Col>
            <Image
              src="../../../assets/me.png"
              style={{ width: "25%", height: "25%" }}
            />
          </Col>
          <br />
          <Typewriter
            options={{
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Hello! I'm Mohammed Wasif Uddin.").start();
            }}
          />

          <br />
          <Col>
            <h2 style={{ fontWeight: "200" }}>
              Aspiring Web Developer with a knack for UI and visual design based
              in Dallas, TX.
            </h2>
            <br />
          </Col>
          <Col style={{ margin: "5%" }}>
            <Row>
              <h2
                style={{
                  fontWeight: "400",
                  fontSize: "2.5rem",
                  color: "rgb(255, 196, 0)",
                }}
              >
                Skills
              </h2>
            </Row>
            <Row style={{ margin: "3%" }}>
              <Col
                xs={12}
                xl={6}
                style={{ textAlign: "center", marginBottom: "2%" }}
              >
                <Card text="light" border="dark">
                  <Card.Header
                    style={{ backgroundColor: "black", fontSize: "1.75rem" }}
                  >
                    Front-end
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        React.JS
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Vue.JS
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        HTML
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        CSS3
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        XAML
                      </h3>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col
                xs={12}
                xl={6}
                style={{ textAlign: "center", marginBottom: "2%" }}
              >
                <Card text="light" border="dark" style={{}}>
                  <Card.Header
                    style={{ backgroundColor: "black", fontSize: "1.75rem" }}
                  >
                    Back-end
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Node.JS
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Express.JS
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        MongoDB
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Mongoose
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        SQL
                      </h3>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col
                xs={12}
                xl={6}
                style={{ textAlign: "center", marginBottom: "2%" }}
              >
                <Card style={{}} text="light" border="dark">
                  <Card.Header
                    style={{ backgroundColor: "black", fontSize: "1.75rem" }}
                  >
                    JS libraries
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        JQuery
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Bootstrap 5
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Tensorflow.JS
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Moment.JS
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Framer Motion
                      </h3>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col
                xs={12}
                xl={6}
                style={{ textAlign: "center", marginBottom: "2%" }}
              >
                <Card style={{}} text="light" border="dark">
                  <Card.Header
                    style={{ backgroundColor: "black", fontSize: "1.75rem" }}
                  >
                    Other Programming Languages
                  </Card.Header>
                  <ListGroup variant="flush">
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        JavaScript ES6
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        C++
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Java
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        C#
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Python
                      </h3>
                    </ListGroup.Item>
                    <ListGroup.Item variant="dark">
                      <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                        Ruby
                      </h3>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
              <Col style={{paddingTop: "2%"}}>
                
                <Link to="../../../files/Resume.pdf" target="_blank" download>
                  <Button variant="outline-light">Check out my Resume</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Col>
      </Col>
    </Container>
  );
};

export default About;
