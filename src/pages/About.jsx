import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Particles from "react-tsparticles";

import Typewriter from "typewriter-effect";

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
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 0.6,
              },
            },
          },
          particles: {
            color: {
              value: "#D4AF37",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "edge",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

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
          <Typewriter
            options={{
              autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString("Hello! I'm Mohammed Wasif Uddin.").start();
            }}
          />
          <div style={{ color: "rgb(255, 196, 0)" }}>
            <Typewriter
              options={{
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(4500)
                  .typeString("Front End Developer")
                  .start();
              }}
            />
          </div>

          <Col>
            <Image className="myImage" src="../../../assets/me.png" />
          </Col>
          <Col>
            <h2 style={{ fontWeight: "200" }}>
              Aspiring Web Developer with a knack for UI and visual design based
              in Dallas, TX.
            </h2>
            <br />
            <Typewriter
              options={{
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1000).typeString("Code to Create.").start();
              }}
            />
            <Typewriter
              options={{
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(3000)
                  .typeString("That's what makes it fun!")
                  .start();
              }}
            />
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
