import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Weather = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: "", long: "" },
  });

  const success = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        long: location.coords.longitude,
      },
    });
  };
  const failed = (location) => {
    setLocation({
      loaded: true,
      error: { 
          code: 0,
      }
    });
  };

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setLocation((state) => ({
        ...state,
        loaded: true,
        error: {
          code: 0,
          message: "Geolocation not supported",
        },
      }));
    }

    navigator.geolocation.getCurrentPosition(success, failed);
  }, []);
  return (
    <div>
      <Row s={1}>
        <Col>
          <Card style={{}}>
            <Card.Body>
              <Card.Title>How's the weather?</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="secondary">Hey Siri</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Weather;
