import React from "react";
import { Row, Col, Image } from "react-bootstrap";
const Playground = () => {
  return (
    <div>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <h1
            style={{
              padding: "10%",
              paddingBottom: "1%",
              fontSize: "3rem",
              fontWeight: "400",
              color: "gray",
            }}
          >
            Under Construction
          </h1>
          <div>
            <Image
              src="../../../assets/break.png"
              style={{ width: "30%", height: "50%" }}
            />
          </div>

          <h3
            style={{
              fontWeight: "200",
              lineHeight: "2.5rem",
              fontSize: "2rem",
              padding: "5%",
            }}
          >
            Be back soon!
          </h3>
        </Col>
      </Row>
    </div>
  );
};

export default Playground;
