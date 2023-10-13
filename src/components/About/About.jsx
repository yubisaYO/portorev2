import React from "react";
import "./about.css";
const About = () => {
  return (
    <div
      style={{ maxWidth: "1250px" }}
      className="mx-auto w-full aboutContainer my-auto py-10 h-full"
    >
      <div className="flex flex-col items-center content descContainer">
        <div className="">
          <h1 className="aboutTitle font-bold">
            About <span className="text-indigo-400">Me</span>
          </h1>
          <span className="aboutLine"></span>
        </div>
        <div className="descContent">
          <div className="lg:order-2">
            <img
              src="./portoImg2.jpg"
              alt="Longtail boat in Thailand"
              className="aboutImg rounded-2xl"
            />
          </div>

          <p className="descAbout lg:order-1">
            I am an enthusiast in the field of technology, particularly in the
            realm of front-end development. This passion led me to pursue a
            degree in computer science, allowing me to delve deeper into the
            world of technology. My specialization in software engineering and
            web development has equipped me with a profound understanding of
            programming. However, my journey doesn&rsquo;t stop there. I have
            also taken on additional challenges, such as embarking on an
            internship project with a Shariah-compliant bank and engaging in
            various other endeavors. These experiences include creating
            full-stack websites and crafting captivating designs, all of which
            have enriched my skill set and broadened my horizons in the
            ever-evolving tech landscape.
          </p>
        </div>
      </div>
      <div
        className="w-full mx-auto flex flex-col gap-3 skill"
        style={{ maxWidth: "1250px" }}
      >
        <h1 className="font-semibold w-full skillTitle">Skills & Tools : </h1>
        <ul className="flex flex-wrap items-center skillList">
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
    </div>
  );
};

export default About;
