import React from "react";
import ProjectCard from "./ProjectCard";
import CSSIcon from "../Icnons/CSSIcon";
import ReactIcon from "../Icnons/ReactIcon";
import TailwindCss from "../Icnons/TailwindCss";
import NextIcon from "../Icnons/NextIcon";
import Bash from "../Icnons/BashIcon";
import GolangIcon from "../Icnons/GolangIcon";
import DockerIcon from "../Icnons/DockerIcon";
import GITIcon from "../Icnons/GITIcon";
import HTMLIcon from "../Icnons/HTMLIcon";

const Skills = () => {
  return (
    <div id="skills" className=" w-full">
      <div className="relative flex overflow-x-hidden group">
        <div className="py-8 animate-marquee whitespace-nowrap group-hover:paused flex">
          <span>
            <div className="w-60 flex justify-center items-center">
              <ReactIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <Bash />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <TailwindCss />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <NextIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <GolangIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <CSSIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <DockerIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <GITIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <HTMLIcon />
            </div>
          </span>
        </div>
        <div className="absolute top-0 py-8 animate-marquee2 group-hover:paused whitespace-nowrap flex">
          <span>
            <div className="w-60 flex justify-center items-center">
              <ReactIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <Bash />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <TailwindCss />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <NextIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <GolangIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <CSSIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <DockerIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <GITIcon />
            </div>
          </span>
          <span>
            <div className="w-60 flex justify-center items-center">
              <HTMLIcon />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
