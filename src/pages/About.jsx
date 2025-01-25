import React from "react";
import photo from "../assets/photo.png";

function About() {
  return (
    <div className="grid w-full min-h-screen grid-cols-1 p-8 md:grid-cols-2 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold font-[text1] text-6xl">About Me</h1>
        <p className="mt-4 text-lg leading-relaxed font-[textm] ml-7 text-white">
          Hi, I'm Ankit, a 3rd-year engineering student specializing in
          Information Technology. I’m passionate about solving real-world
          problems and thrive on creating innovative solutions through
          technology. With a strong foundation in Data Structures and Algorithms
          (DSA), I've solved over 500 problems on{" "}
          <a
            href="https://www.geeksforgeeks.org/user/asharma3e46/"
            className="text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GeeksforGeeks
          </a>{" "}
          and maintained an impressive 230+ day streak, showcasing my
          consistency and dedication. In addition to problem-solving, I have
          hands-on experience in full-stack web development using MERN
          technologies (MongoDB, Express.js, React.js, Node.js). From designing
          intuitive frontends to building robust backends, I excel at creating
          dynamic and user-friendly websites. I believe in the power of
          technology to make a meaningful impact and am eager to continue
          growing, learning, and contributing to impactful projects.
        </p>
        <a
          href="https://drive.google.com/file/d/1i3R3uc5_ANwUxDIyignH_jvzPCqnpCOt/view"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 mt-6 font-semibold text-white transition-all duration-300 bg-green-500 rounded-lg shadow-lg hover:bg-green-600"
        >
          View Resume
        </a>
      </div>
      <div className="flex items-center justify-center ">
        <img
          src={photo}
          alt="About Me Image"
          className="rounded-lg shadow-lg h-2/3"
        />
      </div>
    </div>
  );
}

export default About;
