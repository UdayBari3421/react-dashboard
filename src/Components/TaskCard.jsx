import React from "react";
import { RiTimerLine } from "react-icons/ri";
function TaskCard({ title, tagName, description, log, tagColor }) {
  return (
    <div className="relative flex flex-col justify-between gap-2 rounded-2xl p-4 bg-gray-100 w-full">
      <span className="flex justify-between items-center w-full">
        <h1 className="text-xl font-semibold">{title}</h1>
        <h1 className={`${tagColor} rounded-s-full px-3 text-white absolute right-0`}>{tagName}</h1>
      </span>
      <p className="">{description}</p>
      <hr className="w-full mx-auto" />
      <span className="flex justify-evenly items-center gap-2 bg-white rounded-full w-fit p-2">
        <RiTimerLine className="text-xl" />
        <h1>Log: {log}</h1>
      </span>
    </div>
  );
}

export default TaskCard;
