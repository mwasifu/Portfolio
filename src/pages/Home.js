import React from "react";
import { Row, Button, Container, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero />

      <Container
        fluid
        style={{
          backgroundImage: "url(../assets/starry.jpg)",
          backgroundSize: "cover",
          justifyContent: "center",
          padding: "8%",
        }}
      >
        <Carousel>
          <Carousel.Item>
            <Image
              style={{ maxWidth: "70%" }}
              className="mx-auto d-block"
              src="../assets/quarters.png"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3>Responsive React App</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              style={{ maxWidth: "70%" }}
              className="mx-auto d-block"
              src="../assets/pokemon.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Pokedex</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row
          gutter={[24, 24]}
          style={{ justifyContent: "center", padding: "50px" }}
        >
          <Link to="/projects" style={{ textAlign: "center" }}>
            <Button variant="outline-light" size="lg" style={{ width: "30%" }}>
              See my work
            </Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
