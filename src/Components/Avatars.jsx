import React from "react";
import char1 from "../assets/charecters/char1.png";
import char2 from "../assets/charecters/char2.png";
import char3 from "../assets/charecters/char3.png";
import char4 from "../assets/charecters/char4.png";

function Avatars() {
  return (
    <div className="flex justify-between items-center">
      <span className="flex justify-center rounded-full p-0.5 items-center bg-gray-100">
        <img src={char1} className="w-10 rounded-full" />
      </span>
      <span className="flex justify-center rounded-full p-0.5 items-center bg-gray-100">
        <img src={char2} className="w-10 rounded-full" />
      </span>
      <span className="flex justify-center rounded-full p-0.5 items-center bg-gray-100">
        <img src={char3} className="w-10 rounded-full" />
      </span>
      <span className="flex justify-center rounded-full p-0.5 items-center bg-gray-100">
        <img src={char4} className="w-10 rounded-full" />
      </span>
      <span className="flex justify-center rounded-full p-2 items-center bg-gray-100">+10</span>
    </div>
  );
}

export default Avatars;
