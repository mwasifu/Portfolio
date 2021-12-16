import React, { useEffect, useState, useRef } from "react";

import * as tf from "@tensorflow/tfjs";

import * as speech from "@tensorflow-models/speech-commands";
import "./Speech.css";

import { drawBall } from "./utils/utilities";
import { Col, Row } from "react-bootstrap";

const Speech = () => {
  // model and action states
  const [model, setModel] = useState(null);
  const [action, setAction] = useState(null);
  const [labels, setLabels] = useState(null);

  // Canvas Ref and x,y coordinates and radius (r)
  const canvasRef = useRef(null);
  const [x, setX] = useState(700);
  const [y, setY] = useState(200);
  const [r, setR] = useState(20);

  //  Recognizer
  const loadModel = async () => {
    const recognizer = await speech.create("BROWSER_FFT");
    console.log("Model loaded");
    await recognizer.ensureModelLoaded();
    console.log(recognizer.wordLabels());
    setModel(recognizer);
    setLabels(recognizer.wordLabels());
  };

  useEffect(() => {
    loadModel();
  }, []);

  function argMax(arr) {
    return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
  }

  const pause = async () => {
    model.stopListening();
    console.log("Stopped recording from inside pause");
  };

  const recognizeCommand = async () => {
    console.log("in");
    model.listen(
      (result) => {
        console.log("Started listening");
        console.log(result.scores);
        setAction(labels[argMax(Object.values(result.scores))]);
        console.log({ action });
      },
      {
        includeSpectrogram: true,
        probabilityThreshold: 0.9,
      }
    );
  };

  useEffect(() => {
    const updateBall =
      action === "up"
        ? setY(y - 60)
        : action === "down"
        ? setY(y + 60)
        : action === "right"
        ? setX(x + 60)
        : action === "left"
        ? setX(x - 60)
        : "";
    canvasRef.current.width = 1200;
    canvasRef.current.height = 400;
    const ctx = canvasRef.current.getContext("2d");
    console.log(x, y, r);
    drawBall(ctx, x, y, r);
    setAction("Speak to see some magic");
  }, [action]);

  return (
    <div style={{ textAlign: "center", zIndex: "999", position: "relative" }}>
      <div style={{ color: "white", backgroundColor: "black" }}>
        <h1 style={{ marginBottom: "0", paddingTop: "5%" }}>
          Control the ball with your Voice!
        </h1>
      </div>
      <canvas
        ref={canvasRef}
        style={{
          textAlign: "center",
          zIndex: "9",
          width: "100%",
          height: 300,
          backgroundColor: "black",
          marginBottom: 0,
        }}
      />
 
      <Row style={{ marginTop: "2%"}}>
        <Col style={{textAlign: "right"}}>
          <button className="control" onClick={recognizeCommand} >
            Talk
          </button>
        </Col>
        <Col style={{textAlign: "left"}}>
          <button
            className="control"
            style={{ backgroundColor: "red" }}
            onClick={pause}
          >
            Stop
          </button>
        </Col>
      </Row>

      <div style={{ textAlign: "center", padding: "5%", color: "black" }}>
        <h2 style={{ marginBottom: "3%" }}>Instructions</h2>
        <h3 style={{ fontWeight: "400", marginBottom: "1%" }}>
          1. Press <strong>Talk</strong>
        </h3>
        <h3 style={{ fontWeight: "400", marginBottom: "1%" }}>
          2. Make it move!{" "}
          <p style={{ margin: "1%", color: "red" }}>Up, Down, Left, Right</p>
        </h3>

        <h3 style={{ fontWeight: "400" }}>
          3. Press <strong>Stop</strong> to disengage
        </h3>
        <br />
        <br />
        <h6 style={{ color: "gray", fontWeight: "200", fontSize: "1.5rem" }}>
          Control the canvas using speech recognition from TensorflowJS
        </h6>
      </div>
    </div>
  );
};

export default Speech;
