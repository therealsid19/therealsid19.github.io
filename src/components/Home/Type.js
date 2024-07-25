import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: "Software Developer",
        autoStart: true,
        loop: false, // Ensure the typewriter does not loop
        deleteSpeed: 50,
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2500) // Pause for effect after typing
          .callFunction(() => {
            console.log("String typed out!"); // Optional: Callback function when typing is complete
          })
          .start();
      }}
    />
  );
}

export default Type;
