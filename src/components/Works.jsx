import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ChevronRight from "../Icnons/ChevronRight";
import CheckCircle from "../Icnons/CheckCircle";

const Works = () => {
  const triggerContainer = useRef(null);
  const gsapHook = useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerContainer.current,
          start: "top 80%",
          scrub: true,
          end: "+=" + triggerContainer.current.offsetHeight,
        },
      });

      tl.addLabel("start")
        .fromTo("#project0", { opacity: 0 }, { opacity: 1 }, "start")
        .addLabel("project1")
        .fromTo("#project1", { opacity: 0 }, { opacity: 1 }, "project1")
        .addLabel("project2")
        .fromTo("#project2", { opacity: 0 }, { opacity: 1 }, "project2")
        .addLabel("project3")
        .fromTo("#project3", { opacity: 0 }, { opacity: 1 }, "project3")
        .addLabel("project4")
        .fromTo("#project4", { opacity: 0 }, { opacity: 1 }, "project4")
        .addLabel("project5")
        .fromTo("#project5", { opacity: 0 }, { opacity: 1 }, "project5");
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
    <div className="full">
      <div className="container">
        <div
          className="flex flex-col md:grid grid-cols-12 text-gray-50"
          ref={triggerContainer}
        >
          {projectImages.map((project, i) => {
            return (
              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none" />
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow-md text-center">
                    <CheckCircle />
                  </div>
                </div>
                <div
                  id={`project${i}`}
                  className="col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-lg w-full"
                >
                  <div className="w-full h-full flex flex-col gap-y-2 md:gap-y-0 md:flex-row   md:gap-x-2 ">
                    <div className="md:w-4/12 w-full h-full rounded-t-md mb-4">
                      <img
                        src={project.image}
                        alt={project.image}
                        className="rounded-t-md h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-7/12 w-full h-full ">
                      <h1 className="text-teal-700 text-xl text-center mb-4">
                        {project.title}
                      </h1>
                      <p className="text-center text-gray-400">
                        {project.description}
                      </p>
                    </div>
                    <div className=" md:w-1/12 w-full flex items-center justify-center md:justify-end  ">
                      <a href={project.link}>
                        <ChevronRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;

// const LegacyComponent = () => {
//   const triggerContainer = useRef(null);
//   const gsapHook = useGSAP(
//     () => {
//       gsap.registerPlugin(ScrollTrigger);
//       const amountToScroll =
//         triggerContainer.current.offsetWidth - window.innerWidth;
//       const tween = gsap.to("#works", {
//         x: -amountToScroll,
//         duration: 10,
//         ease: "none",
//       });
//       ScrollTrigger.create({
//         trigger: triggerContainer.current,
//         pin: true,
//         start: "top 20%",
//         end: "+=" + amountToScroll,
//         scrub: 1,
//         animation: tween,
//       });
//     },
//     { scope: triggerContainer }
//   );
//   useEffect(() => {
//     return () => {
//       gsapHook.context.kill();
//     };
//   }, [gsapHook]);
//   return (
//     <div className="w-full ">
//       <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-center font-extrabold text-4xl mb-12 ">
//         {" "}
//         My Projects
//       </h1>
//       <div ref={triggerContainer} className="w-min">
//         <div
//           id="works"
//           className="flex justify-start gap-x-8 flex-nowrap  pl-20 pr-20 w-min "
//         >
//           {projectImages.map((project) => {
//             return (
//               <ProjectCard
//                 key={project.image}
//                 title={project.title}
//                 description={project.description}
//                 imageAlt={project.title}
//                 imageSrc={project.image}
//                 link={project.link}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
