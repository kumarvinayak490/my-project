import React from "react";
import Logo from "../logo.svg";

const ProjectCard = ({ imageSrc, imageAlt, title, description, link }) => {
  return (
    <article className="bg-white/90 shadow-2xl rounded-md  w-[400px] flex flex-col items-center gap-y-2 pb-4">
      <div className="w-full h-[200px] rounded-t-md mb-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="rounded-t-md h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-between gap-6 h-[250px]">
        <div>
          <h1 className="text-2xl text-center mb-1 font-sans text-zinc-600 font-medium ">
            {title}
          </h1>
          <p className="text-center font-sans text-zinc-500">{description}</p>
        </div>
        <a
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-900 font-medium text-white hover:bg-zinc-700  bg-zinc-800/50"
          href={link}
        >
          Visit Site
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
