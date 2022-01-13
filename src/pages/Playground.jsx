import React from "react";
import { Row, Col, Image, Card, Container } from "react-bootstrap";
import Todolist from "../components/Playground/Todolist/Todolist";
import Speech from "../components/Speech";
import Weather from "../components/Weather";
const Playground = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(26,26,27,1) 16%, rgba(40,40,40,1) 50%, rgba(19,19,19,1) 84%)",
      }}
    >
      <Container>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center"
            style={{
              textAlign: "center",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
            <Card style={{ width: "60rem" }} bg="light">
              <Weather />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center"
            style={{
              textAlign: "center",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
            <Card style={{ width: "30rem" }} bg="light" border="dark">
              <Todolist />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-center"
            style={{
              textAlign: "center",
              paddingTop: "5%",
              paddingBottom: "5%",
            }}
          >
            <Card style={{ width: "60rem" }} bg="light" border="dark">
              <Speech />
            </Card>
          </Col>
        </Row>


      </Container>
    </div>
  );
};

export default Playground;
