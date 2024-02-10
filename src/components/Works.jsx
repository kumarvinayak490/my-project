import React from "react";
import ProjectCard from "./ProjectCard";

const Works = () => {
  return (
    <div id="works" className=" w-full">
      <h1 className="mb-8 text-center text-5xl font-normal bg-gradient-to-r from-purple-600 to-green-500  text-transparent bg-clip-text">
        My Works
      </h1>
      <div className="px-24 flex justify-between  items-center ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Works;
