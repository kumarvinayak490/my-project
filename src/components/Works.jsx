import React from "react";
import ProjectCard from "./ProjectCard";
import Container from "./common/Container";

const Works = () => {
  return (
    <Container>
      <h1 className="mb-8 text-center text-5xl font-normal bg-gradient-to-r from-purple-600 to-green-500  text-transparent bg-clip-text">
        Works
      </h1>
      <div className="flex justify-between  items-center ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Container>
  );
};

export default Works;
