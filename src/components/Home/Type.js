import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: "Aspiring Software Engineer",
        autoStart: true,
        loop: false,
      }}
    />
  );
}

export default Type;
