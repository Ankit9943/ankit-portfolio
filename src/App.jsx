import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TextAnimation from "./components/TextAnimation";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("#smooth-content"),
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <>
      <div className="">
        <Navbar />
        {/* mt-24 */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-12 overflow-hidden ">
          <div className="text-[250px] font-[text1] leading-none text-center break-words whitespace-normal max-w-full">
            <span className="block w-full text-white bg-red-500">
              Hello, I'm ANKIT
            </span>
            <span className="block w-full gradient-text">
              A FULL-STACK DEV.
            </span>
          </div>
        </div>
        <hr className="w-11/12 mx-auto border-t-2 border-gray-300" />
        <About />
        <div>
          <Skills />
        </div>
        <div>
          <Projects />
        </div>
        <TextAnimation />
      </div>
      <Footer />
    </>
  );
}

export default App;
