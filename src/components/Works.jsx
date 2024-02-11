import React from "react";
import ProjectCard from "./ProjectCard";
import Container from "./common/Container";

const Works = () => {
  const projectImages = [
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
  ];
  return (
    <Container>
      <div id="works" className="flex justify-between  items-center ">
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
    </Container>
  );
};

export default Works;
