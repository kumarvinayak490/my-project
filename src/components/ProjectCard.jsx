import React from "react";
import Logo from "../logo.svg";

const ProjectCard = () => {
  return (
    <article className="bg-white/90 shadow rounded-md">
      <div className="w-[400px] h-[400px]">
        <img src={Logo} alt="logo" />
      </div>
    </article>
  );
};

export default ProjectCard;
