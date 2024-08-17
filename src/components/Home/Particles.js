import React from "react";
import Particles from "react-tsparticles";

const ParticlesComponent = () => {
  const particlesInit = (main) => {
    // You can initialize the tsParticles instance here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // You can handle particles loaded event here
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: false, // Disable links for a cleaner effect
          },
          collisions: {
            enable: false, // Disable collisions for a more subtle effect
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Adjust the number of particles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2, // Adjust the size of particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
