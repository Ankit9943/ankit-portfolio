import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useEffect(() => {
    // Define the order in which the elements should be revealed
    const revealOrder = [
      "html",
      "css",
      "javascript",
      "react",
      "redux",
      "node",
      "express",
      "mongodb",
      "firebase",
      "git",
      "figma",
      "tailwind",
      "bootstrap",
      "java",
      "dsa",
    ];

    // Animate each element in the defined order
    revealOrder.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        gsap.fromTo(
          el,
          { filter: "blur(10px)", opacity: 0 }, // Initial state
          {
            filter: "blur(0px)",
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 80%", // Starts when the element enters 80% of viewport
              end: "top 60%", // Ends when the element reaches 60% of viewport
              scrub: 1,
              markers: false,
            },
            delay: index * 0.2, // Delay based on the order
          }
        );
      }
    });
  }, []);

  return (
    <div>
      <div className="text-center font-[text1] text-6xl">Skills</div>
      <div className="flex flex-col items-center justify-center p-8 text-2xl">
        <div className="flex flex-wrap gap-1">
          <h2
            id="html"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            HTML
          </h2>
          <h2
            id="css"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            CSS
          </h2>
          <h2
            id="javascript"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Javascript
          </h2>
          <h2
            id="react"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            React
          </h2>
          <h2
            id="redux"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Redux
          </h2>
        </div>
        <div className="flex flex-wrap gap-1">
          <h2
            id="node"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Node
          </h2>
          <h2
            id="express"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Express
          </h2>
          <h2
            id="mongodb"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            MongoDB
          </h2>
        </div>
        <div className="flex flex-wrap gap-1">
          <h2
            id="git"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Git
          </h2>
          <h2
            id="figma"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Figma
          </h2>
          <h2
            id="tailwind"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Tailwind
          </h2>
          <h2
            id="bootstrap"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Bootstrap
          </h2>
        </div>
        <div className="flex flex-wrap gap-1">
          <h2
            id="java"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            Java
          </h2>
          <h2
            id="dsa"
            className="p-2 px-4 text-white border border-white rounded-full"
          >
            DSA
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Skills;
