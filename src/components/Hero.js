import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heading">
        <h1 className="big">Hello, I'm Wasif.</h1>

        <h3 style={{ textAlign: "center" }}>Stay Hungry Stay Foolish.</h3>
        <h3 style={{fontSize: "1rem"}}>-Steve Jobs</h3>
        <br />
        <h2 style={{fontWeight: "300"}}>Welcome to my Portfolio.</h2>
      </div>

    </div>
  );
};

export default Hero;
