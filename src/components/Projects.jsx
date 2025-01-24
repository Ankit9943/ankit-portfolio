import React, { useState } from "react";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="relative overflow-hidden">
        {" "}
        {/* Prevent overflow */}
        {/* {isHovered && (
          <div className="w-[22vw] h-[50vh] bg-red-600 rounded-md absolute transform -translate-x-1/2 left-1/2 mt-20"></div>
        )} */}
        <div className="mt-8 mb-7 font-[text1]">
          <h3 className="mb-10 text-6xl text-center ">PROJECTS</h3>
          <div
            className="hover:bg-orange-500 hover:text-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <hr className="w-full mx-auto my-5 border-t-2 border-gray-300" />
            <a
              href="https://github.com/Ankit9943/React-todo-app"
              target="_blank"
              className="break-words cursor-pointer text-9xl"
              data-image="https://unsplash.com/photos/a-snow-covered-forest-filled-with-lots-of-trees-ony2Qt9lP38"
            >
              REACT TO-DO APP
            </a>
          </div>
          <div className="hover:bg-orange-500 hover:text-black">
            <hr className="w-full mx-auto border-t-2 border-gray-300" />
            <a
              href="https://github.com/Ankit9943/chess.game"
              target="_blank"
              className="pt-3 break-words cursor-pointer text-9xl"
              data-image="https://plus.unsplash.com/premium_photo-1733514692259-57cdff0a750f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              CHESS.COM
            </a>
          </div>
          <div className="hover:bg-orange-500 hover:text-black">
            <hr className="w-full mx-auto border-t-2 border-gray-300" />
            <a
              href="https://github.com/Ankit9943/React-todo-app"
              target="_blank"
              className="pt-3 break-words cursor-pointer text-9xl"
              data-image="https://plus.unsplash.com/premium_photo-1733514692259-57cdff0a750f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              AWWWARD WEBSITE
            </a>
          </div>
          <div className="hover:bg-orange-500 hover:text-black">
            <hr className="w-full mx-auto border-t-2 border-gray-300" />
            <a
              href="https://github.com/Ankit9943/Tic-Tac-Toe-Game"
              target="_blank"
              className="pt-3 break-words cursor-pointer text-9xl"
              data-image="https://images.unsplash.com/photo-1736028155009-1f80f583b4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              TIC-TAC-TOE GAME
            </a>
          </div>
          <hr className="w-full mx-auto border-t-2 border-gray-300" />

          <h3 className="my-6 text-3xl text-center font-[textm]">
            More Projects soon...
          </h3>
        </div>
      </div>
    </>
  );
};

export default Projects;
