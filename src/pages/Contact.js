import React from "react";
import { Col, Row } from "react-bootstrap";

import "../pages/Contact.css";

const Contact = () => {
  return (
    <Row>
      <Col>
        <div className="contact">
          <h1 className="top">Lets Talk.</h1>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(193,193,193,1) 0%, rgba(231,231,231,1) 50%, rgba(167,167,167,1) 100%)",
              height: "1px",
              
            }}
          />
          <br />

          <br />
          <a className="tags" href="mailto: mwasifu@outlook.com">
            Email Me
          </a>
          <br />

         
          <br />
          <a
            className="tags"
            href="https://www.linkedin.com/in/mohammed-wasif-uddin-10b6b1201/"
          >
            LinkedIn
          </a>
          <br />
          <br />
          <a
            className="tags"
            href="https://github.com/mwasifu?tab=repositories"
          >
            Github
          </a>
          <br />
          <br />
          <a className="tags" href="https://www.instagram.com/mwasifu/">
            {" "}
            Instagram{" "}
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
