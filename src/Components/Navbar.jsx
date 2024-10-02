import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import Logo from "../assets/img/LOGO.png";
import { FiBell } from "react-icons/fi";
import { PiGearSix } from "react-icons/pi";
import { FaMoon, FaSun } from "react-icons/fa6";
import char1 from "../assets/charecters/char1.png";

function Navbar({ setTheme, Theme }) {
  const [Icon, setIcon] = useState(<FaMoon className="bg-[#F7F8FA] rounded-full p-2" />);

  const changeTheme = () => {
    if (Theme === "dark") {
      setTheme("light");
      setIcon(<FaSun className="bg-[#d1ff4791] rounded-full p-2" />);
    } else {
      setTheme("dark");
      setIcon(<FaMoon className="bg-[#F7F8FA] rounded-full p-2" />);
    }
  };

  return (
    <nav className="flex justify-between">
      <span className="flex items-center justify-center w-3/12">
        <img src={Logo} className="w-12 ms-14" />
        <p className="text-3xl font-semibold w-full">Tasker</p>
      </span>
      <div className="flex justify-end w-full p-5 gap-3 items-center text-4xl">
        <span className="bg-[#F7F8FA] ps-3 gap-2 text-base  flex items-center rounded-full w-full">
          <RiSearch2Line />
          <input type="text" placeholder="Search" className="placeholder:font-normal bg-transparent outline-none w-full p-2 rounded-full" />
        </span>
        <FiBell className="bg-[#F7F8FA] rounded-full p-2" />
        <PiGearSix className="bg-[#F7F8FA] rounded-full p-2" />
        <button onClick={changeTheme}>{Icon}</button>

        <div className="flex justify-center items-center w-2/12">
          <img src={char1} className="w-12" />
          <span className="w-full">
            <h2 className="text-lg font-bold">Darina</h2>
            <p className="text-sm">UI/UX designer</p>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
