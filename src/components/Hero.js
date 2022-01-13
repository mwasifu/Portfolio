import React from "react";
import "./Hero.css";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
} from "framer-motion/dist/framer-motion";
import { Col, Row } from "react-bootstrap";

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.5]);
  return (
    <div className="hero">
      <div className="heading">
        <h1 className="big">Hello, I'm Wasif.</h1>

        <h3 style={{ textAlign: "center" }}>Stay Hungry Stay Foolish.</h3>
        <h3 style={{ fontSize: "1rem" }}>-Steve Jobs</h3>
        <br />
        <h2 style={{ fontWeight: "300" }}>Welcome to my Portfolio.</h2>
      </div>
      <div className="motion-background">
     
          <div className="d-flex justify-content-center">
            <motion.div
              style={{
                scale,
                backgroundColor: "white",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <motion.div
                style={{
                  scaleY: scrollYProgress,
                }}
              />
            </motion.div>
            <motion.div
              style={{
                scale,
                backgroundColor: "gray",
                borderRadius: "20%",
                width: "150px",
                height: "100px",
              }}
            >
              <motion.div
                style={{
                  scaleY: scrollYProgress,
                }}
              />
            </motion.div>
            <motion.div
              style={{
                scale,
                backgroundColor: "white",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <motion.div
                style={{
                  scaleY: scrollYProgress,
                }}
              />
            </motion.div>
            
          </div>
        
      </div>
    </div>
  );
};

export default Hero;
