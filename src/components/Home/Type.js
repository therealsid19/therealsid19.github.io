import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: "Software Developer",
        autoStart: true,
        loop: false,
      }}
    />
  );
}

export default Type;
