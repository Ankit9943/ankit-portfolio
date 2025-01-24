import React from "react";

function TextAnimation() {
  return (
    <div className="mt-56 overflow-hidden font-[text1] max-w-full">
      <hr className="w-full mx-auto my-5 border-t-2 border-gray-300" />

      {/* Animation Container */}
      <div className="relative flex items-center font-bold text-white animate-scroll whitespace-nowrap text-9xl">
        {/* Repeating Content */}
        {[...Array(20)].map((_, index) => (
          <div key={index} className="flex items-center px-4 space-x-4">
            <div className="w-5 h-5 bg-white rounded-full"></div>
            <h3>LET'S TALK</h3>
            <div className="w-5 h-5 bg-white rounded-full"></div>
            <h3>LET'S Collaborate</h3>
          </div>
        ))}
      </div>

      <hr className="w-full mx-auto my-5 border-t-2 border-gray-300" />
    </div>
  );
}

export default TextAnimation;
