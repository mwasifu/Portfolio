import React from "react";
import { Row, Col, Card } from "react-bootstrap";



import "./Projects.css";

const Projects = () => {


  return (
    <div className="projects">
      <h1 style={{fontWeight: "300"}}>Projects</h1>
    
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
    </div>
  );
};

export default Projects;
