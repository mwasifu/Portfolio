import axios from "axios";
import React, { useState } from "react";
import { Row, Col, Card, Container, Form, Button } from "react-bootstrap";
import Todolist from "../components/Playground/Todolist/Todolist";
import Speech from "../components/Speech";
import Weather from "../components/Weather";
import "../styles/chatgptcomponent.css";

const Playground = () => {
  // chatgpt container handle
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const HTTP = "https://mwasifu.com/api/openai";

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    var button = document.getElementById("promptBtn");
    var progressBar = document.getElementById("progressBar");

    button.addEventListener("click", function () {
      progressBar.classList.add("progressAnimation");

      setTimeout(function () {
        progressBar.classList.remove("progressAnimation");
        progressBar.style.width = "0%";
      }, 3000);
    });


    axios
      .post('https://mwasifu.com/.netlify/functions/server/api/openai', {"me": inputValue})
      .then((res) => setOutputValue(res.data.message.content))
      .catch((err) => console.log("error from client: " + err));
  };

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
            <Card
              style={{ width: "60rem", padding: "2rem" }}
              bg="dark"
              text="white"
              border="light"
            >
              <Card.Body>
                <Card.Title>Fire your thoughts</Card.Title>
                <Form style={{ padding: "1rem" }}>
                  <Form.Group
                    controlId="inputField"
                    style={{ padding: "1rem" }}
                    className="d-flex justify-content-end"
                  >
                    <Form.Control
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <br />
                  <Button
                    variant="outline-light"
                    onClick={handleButtonClick}
                    id="promptBtn"
                  >
                    Submit
                  </Button>
                </Form>
                <div id="progressBar"></div>
                <Card.Text
                  className="mt-3"
                  style={{
                    padding: "1rem",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {outputValue ? outputValue : "Ask me anything"}
                </Card.Text>
              </Card.Body>
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
