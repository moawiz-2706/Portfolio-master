import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "GoHighLevel Integration Specialist",
          "React, Next.js, and Express Builder",
          "Flutter, Docker, and Kubernetes Ready",
          "Automation and AI Workflow Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
