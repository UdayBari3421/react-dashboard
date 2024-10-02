import React, { useEffect, useState } from "react";
import { MainBox, Navbar } from "./Components";

function App() {
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    let root = document.getElementById("root");
    if (Theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("text-black");
      root.classList.remove("font-bold");
      root.classList.add("font-normal");
    } else {
      root.classList.add("text-black");
      root.classList.remove("dark");
      root.classList.remove("font-normal");
      root.classList.add("font-bold");
    }
  }, [Theme]);
  return (
    <div className="h-full">
      <Navbar setTheme={setTheme} Theme={Theme} />
      <MainBox />
    </div>
  );
}

export default App;
