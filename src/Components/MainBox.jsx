import React from "react";
import { RiHome5Fill } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import { GridBox, Avatars, ChatBox } from "./index";

function MainBox() {
  return (
    <div className="mx-auto flex min-h-full">
      <div className="w-3/12 flex flex-col gap-8 p-2 px-4 justify-between">
        <h1 className="text-3xl font-semibold">Welcome to the tasker System!</h1>
        <div className="flex flex-col justify-between">
          <span className="bg-black gap-4 text-lg rounded-full py-3 px-3 text-white flex justify-start items-center">
            <RiHome5Fill />
            Dashboard
          </span>
          <span className="gap-4 text-lg rounded-full py-3 px-3 flex justify-start items-center">
            <AiOutlineMessage />
            Messages
          </span>
          <span className="gap-4 text-lg rounded-full py-3 px-3 flex justify-start items-center">
            <GoTasklist />
            My Task
          </span>
          <span className="gap-4 text-lg rounded-full py-3 px-3 flex justify-start items-center">
            <IoPeopleOutline />
            Freinds
          </span>
          <span className="gap-4 text-lg rounded-full py-3 px-3 flex justify-start items-center">
            <BsCalendarDate />
            Calender
          </span>
        </div>
        <Avatars />
        <ChatBox />
      </div>
      <GridBox />
    </div>
  );
}

export default MainBox;
