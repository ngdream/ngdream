import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "full Stack Developer",
              "ux and ui designer",
              "Open Source Contributor",
              "Effective Problem Solver",
              "it developer",
              "c++ and python lover"

            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type