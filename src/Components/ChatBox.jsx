import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import char5 from "../assets/charecters/char5.png";
import { FaTelegramPlane } from "react-icons/fa";

function ChatBox() {
  return (
    <div className="bg-gray-100 flex flex-col gap-5 rounded-2xl p-2">
      <span className="flex justify-between items-center gap-2 rounded-full p-2">
        <h1>Maxima</h1>
        <h1>(PM)</h1>
      </span>
      <hr className="w-full mx-auto" />
      <span className="bg-white flex items-center justify-start w-fit p-2 rounded-tr-xl rounded-b-xl">
        <h2>Hi Diana ✌️</h2>
        <p className="text-xs self-end text-gray-300">12.07</p>
      </span>
      <span className="bg-white flex items-center justify-start w-fit p-2 rounded-tr-xl rounded-b-xl">
        <h2>Please tell me, do you have a miniute to ring the bell?</h2>
        <p className="text-xs self-end text-gray-300">12.07</p>
      </span>
      <div className="flex justify-center items-center self-end gap-2">
        <BiCheckDouble className="text-blue-500" />
        <span className="bg-[#E0F1E7] flex items-center justify-start w-fit p-2 rounded-tr-xl rounded-b-xl">
          <h2>Yes, of course, let's go!</h2>
          <p className="text-xs self-end text-gray-300">12.12</p>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="flex justify-center rounded-full p-0.5 items-center bg-gray-100">
          <img src={char5} className="w-10 rounded-full" />
        </span>
        <span className="bg-white rounded-full flex ">
          <input type="text" className="bg-transparent outline-none w-full" />
          <p className="text-white bg-black self-end items-center flex p-2 rounded-full">
            <FaTelegramPlane />
          </p>
        </span>
      </div>
    </div>
  );
}

export default ChatBox;
