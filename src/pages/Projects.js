
import React from "react";
import { CardGroup, Card } from "react-bootstrap";

import "./Projects.css";

const Projects = () => {

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="content">

        <CardGroup>
          <Card text="white" bg="dark" border="dark" style={{ width: "12rem" }}>
            <Card.Img variant="top" src="../assets/quarters.png" />
            <Card.Body>
              <Card.Title>Quarters</Card.Title>
              <Card.Text>
                Real Estate Website incorporating animations
              </Card.Text>
              <a href="https://react-heroku-quarters.herokuapp.com/" class="btn btn-secondary">Check it Out!</a>
            </Card.Body>
          </Card>

        <Card text="white" bg="dark" border="dark" style={{ width: "12rem" }}>
            <Card.Img variant="top" src="../assets/pokemon.png" />
            <Card.Body>
              <Card.Title>Pokedex</Card.Title>
              <Card.Text>
                Pokemon Encyclopedia implementing PokemonAPI
              </Card.Text>
              <a href="https://pokedex-gottacatchemall.herokuapp.com/" class="btn btn-secondary">Check it Out!</a>
            </Card.Body>
          </Card>
        </CardGroup>

      </div>
    </div>
  );
};

export default Projects;
