import React from "react";
import ProjectCard from "./ProjectCard";

const Skills = () => {
  return (
    <div id="skills" className=" w-full">
      <h1 className="text-center text-5xl font-normal bg-gradient-to-r from-purple-600 to-green-500  text-transparent bg-clip-text">
        My Skills
      </h1>
      <div className="relative flex overflow-x-hidden">
        <div className="py-8 animate-marquee whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div>
        <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
          <span className="text-4xl mx-4">Marquee Item 1</span>
          <span className="text-4xl mx-4">Marquee Item 2</span>
          <span className="text-4xl mx-4">Marquee Item 3</span>
          <span className="text-4xl mx-4">Marquee Item 4</span>
          <span className="text-4xl mx-4">Marquee Item 5</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
