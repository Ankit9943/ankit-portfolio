import React from "react";

function Navbar() {
  // Function to scroll to the end of the site
  const scrollToEnd = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="">
      <div className="flex items-center justify-between p-5">
        <div className="ml-16 text-xl font-bold text-white font-[textm]">
          ANKIT
        </div>
        <div className="flex gap-5">
          <button
            className="fixed top-0 right-0 p-2 px-4 mt-5 font-[textm] text-white border border-white rounded-full mr-11"
            onClick={scrollToEnd}
          >
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
