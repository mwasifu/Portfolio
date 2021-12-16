import React from "react";
import "./Hero.css";
import Particles from "react-tsparticles";

const Hero = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="hero">
       <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse"
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 50,
              duration: 0.6,
            },
          },
        },
        particles: {
          color: {
            value: "#D4AF37",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "edge",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}/>

      <div className="heading">
        <h1 className="big">Hello.</h1>
        <h3 className="medium">I'm Wasif.</h3>
        <h4>I like creating and designing.</h4>
        <br />
        <h6>&lt;React&gt; &lt;Vue&gt; &lt;Node&gt;</h6>
        <h6>WPF | .NET(Core) | XAML</h6>
      </div>
    </div>
  );
};

export default Hero;
