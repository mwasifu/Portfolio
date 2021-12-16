import React from "react";
import { Row, Button, Container, Carousel, Image } from "react-bootstrap";

import Hero from "../components/Hero";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Container
        fluid
        style={{
          backgroundColor: "black",
          justifyContent: "center",
          padding: "8%",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <Image
              style={{ maxWidth: "70%" }}
              className="mx-auto d-block"
              src="../assets/weather.png"
              alt="First slide"
              rounded
            />
            <Carousel.Caption>
              <h3>Weather App</h3>
              <p>Shows you weather data based on the current location</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              style={{ maxWidth: "70%" }}
              className="mx-auto d-block"
              src="../assets/quarters.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Responsive React App</h3>
              <p>Showcases responsiveness across all screen sizes</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              style={{ maxWidth: "70%" }}
              className="mx-auto d-block"
              src="../assets/pokemon.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Pokedex</h3>
              <p>Learn Pokemon facts here</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row
          gutter={[24, 24]}
          style={{ justifyContent: "center", padding: "50px" }}
        >
          <Button
            href="/projects"
            variant="outline-light"
            size="lg"
            style={{ width: "30%" }}
          >
            See my work
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
