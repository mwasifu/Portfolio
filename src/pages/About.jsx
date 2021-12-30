import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

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
              style={{ width: "15%", height: "15%" }}
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
              <h2 style={{ fontWeight: "400", color: "rgb(255, 196, 0)" }}>
                Skills
              </h2>
            </Row>
            <Row sm={1} md={1} lg={2} style={{ margin: "3%" }}>
              <Col>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                  React.JS
                </h3>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                  Vue.JS
                </h3>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                  Node.JS
                </h3>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                  Tensorflow.JS
                </h3>
              </Col>
              <Col>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>WPF</h3>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                  XAML
                </h3>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>C#</h3>
                <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
                  .NET Core
                </h3>
              </Col>
            </Row>
          </Col>
          <Col>
            <Typewriter
              options={{
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("I do more than just code.")
                  .start();
              }}
            />
            <br />
            <h2 style={{ marginBottom: "5%" }}>My other interests lie in: </h2>
            <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
              Calisthenics
            </h3>
            <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
              Call of Duty
            </h3>
            <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
              Pursuit of covering Rolling Stones music
            </h3>
            <h3 style={{ fontWeight: "200", lineHeight: "2.5rem" }}>
              Always looking out for aesthetics
            </h3>

            <Col></Col>
          </Col>
        </Col>
      </Col>
    </Container>
  );
};

export default About;
