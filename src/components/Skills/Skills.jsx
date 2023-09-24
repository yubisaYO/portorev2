import React from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div
      className="w-full mx-auto flex flex-col gap-3"
      style={{ maxWidth: "1250px" }}
    >
      <h1 className="text-xl md:text-2xl font-semibold w-full lg:w-1/4 ">
        Skills & Tools :{" "}
      </h1>
      <ul className="flex gap-3 md:gap-5 flex-wrap items-center skillList">
        <li style={{ background: "rgba(241,101,41,255)" }}>HTML</li>
        <li className="bg-blue-500">CSS</li>
        <li style={{ background: "#63d7f6" }}>REACT JS</li>
        <li className="bg-black">NEXT JS</li>
        <li style={{ background: "#41b883" }}>VUE JS</li>
        <li style={{ background: "rgba(56,189,248,255)" }}>TAILWIND</li>
        <li style={{ background: "rgba(113,17,240,255)" }}>BOOTSTRAP</li>
        <li style={{ background: "#6a1577" }}>C#</li>
        <li style={{ background: "#3949aa" }}>C</li>
        <li style={{ background: "#659bd3" }}>C++</li>
        <li style={{ background: "#e58d00" }}>MySql</li>
        <li style={{ background: "#880000" }}>Moongose</li>
        <li style={{ background: "#007895" }}>Java</li>
        <li style={{ background: "#24ce85" }}>Figma</li>
      </ul>
    </div>
  );
};

export default Skills;
