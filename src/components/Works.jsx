import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const triggerContainer = useRef(null);
  const gsapHook = useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const amountToScroll =
        triggerContainer.current.offsetWidth - window.innerWidth;
      const tween = gsap.to("#works", {
        x: -amountToScroll,
        duration: 10,
        ease: "none",
      });
      ScrollTrigger.create({
        trigger: triggerContainer.current,
        pin: true,
        start: "top 20%",
        end: "+=" + amountToScroll,
        scrub: 1,
        animation: tween,
      });
    },
    { scope: triggerContainer }
  );
  useEffect(() => {
    return () => {
      gsapHook.context.kill();
    };
  }, [gsapHook]);
  const projectImages = [
    {
      image: "/assets/images/central-auth.jpeg",
      link: "https://support.ineuron.ai",
      title: "Support System",
      description:
        " Empowering enrolled students with a comprehensive platform for seamless collaboration. Here, students can engage in lively discussions, ask questions, and vote on relevant topics to enhance their learning experience",
    },
    {
      image: "/assets/images/central-auth.jpeg",
      link: "https://support.ineuron.ai",
      title: "Support System",
      description:
        " Empowering enrolled students with a comprehensive platform for seamless collaboration. Here, students can engage in lively discussions, ask questions, and vote on relevant topics to enhance their learning experience",
    },
    {
      image: "/assets/images/job-portal.png",
      link: "https://jobs.ineuron.ai",
      title: "Job Portal",
      description:
        " Empowering enrolled students with a comprehensive platform for seamless collaboration. Here, students can engage in lively discussions, ask questions, and vote on relevant topics to enhance their learning experience",
    },
    {
      image: "/assets/images/support-system.jpeg",
      link: "https://pwskills.com",
      title: "PW Skills Learning",
      description:
        " Empowering enrolled students with a comprehensive platform for seamless collaboration. Here, students can engage in lively discussions, ask questions, and vote on relevant topics to enhance their learning experience",
    },
    {
      image: "/assets/images/support-system.jpeg",
      link: "https://pwskills.com",
      title: "PW Skills Learning",
      description:
        " Empowering enrolled students with a comprehensive platform for seamless collaboration. Here, students can engage in lively discussions, ask questions, and vote on relevant topics to enhance their learning experience",
    },
  ];
  return (
    <div className="w-full ">
      <div ref={triggerContainer} className="w-min">
        <div
          id="works"
          className="flex justify-start gap-x-8 flex-nowrap  pl-20 pr-20 w-min "
        >
          {projectImages.map((project) => {
            return (
              <ProjectCard
                key={project.image}
                title={project.title}
                description={project.description}
                imageAlt={project.title}
                imageSrc={project.image}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
