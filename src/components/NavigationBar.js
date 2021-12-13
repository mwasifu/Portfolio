import React from "react";
import styled from "styled-components";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavigationBar.css";

const NavUnlisted = styled.ul`
  text-decoration: none;
  margin-top: 1rem;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'lightgray',
};


const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Wasif Uddin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavUnlisted>
              <Link to="/contact" style={linkStyle}>Contact</Link>
            </NavUnlisted>           
             <NavUnlisted>
              <Link to="/projects" style={linkStyle}>Projects</Link>
            </NavUnlisted>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
