import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button, FloatingLabel, Form } from "react-bootstrap";

const Weather = () => {
  const apiKey = "tfDRJSJkIHDqCWG0eajd5nP6jWCRFWyd";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('');

  return (
    <div>
      <Row s={1} md={2}>
        <Col>
          <Card style={{}}>
            <Card.Body>
                <Col>
              <Card.Title>How's the weather?</Card.Title>
              <FloatingLabel
                controlId="floatingInput"
                label="Enter City Name"
                className="mb-3"
              >
                <Form.Control type="text"/>
              </FloatingLabel>
              </Col>
              <Col>
              <Button variant="secondary">Search</Button>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Weather;
