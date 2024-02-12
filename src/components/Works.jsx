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
      image: "/assets/images/support-system.jpeg",
      link: "https://support.ineuron.ai/",
      title: "Support System",
      description:
        "Developed a platform for students to engage in doubt resolution through interactive chats, enabling them to raise and resolve queries within a 24-hour timeframe. Additionally, developed an algorithm to facilitate peer pairing by grouping students based on their course performance, promoting regular reshuffling of groups to foster increased connections and camaraderie",
    },
    {
      image: "/assets/images/central-auth.png",
      link: "https://account.ineuron.ai/",
      title: "Central Auth for Ineuron",
      description:
        "Developed a central authentication system to verify users across 10 platforms. Additionally, incorporated Google login functionality and implemented code to support potential integration with other providers in the future",
    },
    {
      image: "/assets/images/findemy.png",
      link: "https://findemy.co.uk/",
      title: "Findemy",
      description:
        "The website is a comprehensive resource for individuals seeking to enhance their financial literacy. It offers online courses tailored for beginners entering the world of investing, as well as for those already familiar with financial assets.",
    },
    {
      image: "/assets/images/job-portal.png",
      link: "https://jobs.ineuron.ai",
      title: "Job Portal",
      description:
        " The job portal built using React and Next.js offers a seamless user experience for both job seekers and recruiters. Leveraging React Query for efficient data management, users can effortlessly search, browse, and apply for jobs.",
    },
    {
      image: "/assets/images/geu.png",
      link: "https://geu.ac.in/",
      title: "Graphic Era University",
      description:
        "Designed and developed a dynamic university website aimed at providing extensive information about the institution, its programs, faculty, and facilities. Through a streamlined admission process, individuals can submit their applications online, and the system conducts an eligibility assessment based on predetermined criteria",
    },
    {
      image: "/assets/images/lms2.png",
      link: "https://learn.ineuron.ai/",
      title: "Learning Management System",
      description:
        "Developed a learning management system that enables students to acquire new skills and schedule learning reminders. The system is designed to deliver a quality learning experience while implementing DRM security measures to combat plagiarism",
    },
  ];
  return (
    <div className="w-full ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-center font-extrabold text-4xl mb-12">
        {" "}
        My Projects
      </h1>
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
