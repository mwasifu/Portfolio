import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Speech from "../components/Speech";
import Weather from "../components/Weather";

import "./Projects.css";

const Projects = () => {

  const weather = Weather();

  return (
    <div className="projects">
      <h1>Projects</h1>
    
        <Row xs={1} lg={2} className="g-4" style={{textAlign: 'center'}}>
          <Col>
            <Card
              className="mb-2"
              bg="dark"
              text="white"
              border="secondary"
              style={{ width: "70%", height: "100%", margin: "auto" }}
            >
              <Card.Img variant="top" src="../assets/quarters.png"  />
              <Card.Body>
                <Card.Title>Quarters</Card.Title>
                <Card.Text>
                  Real Estate Website incorporating animations
                </Card.Text>
                <a
                  href="https://react-heroku-quarters.herokuapp.com/"
                  class="btn btn-secondary"
                >
                  Check it Out!
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              className="mb-2"
              bg="dark"
              text="white"
              border="secondary"
              style={{ width: "70%", height: "100%", margin: "auto" }}
            >
              <Card.Img variant="top" src="../assets/pokemon.png" />
              <Card.Body>
                <Card.Title>Pokedex</Card.Title>
                <Card.Text>
                  Pokemon Encyclopedia implementing PokemonAPI
                </Card.Text>
                <a
                  href="https://pokedex-gottacatchemall.herokuapp.com/"
                  class="btn btn-secondary"
                >
                  Check it Out!
                </a>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
        <Col style={{marginTop: "5%"}}>
          <Card className="mb-2" bg="light" border="dark" border="secondary">
          <Card.Body style={{ padding: 0, paddingBottom: "2%" }}>
            <Speech />
            <Card.Title>Control the Ball</Card.Title>
            <Card.Text>Tensorflow Speech Command based movements</Card.Text>
          </Card.Body>
        </Card>
 
        </Col>

        <Col>
          <Weather />
        </Col>


    </div>
  );
};

export default Projects;
