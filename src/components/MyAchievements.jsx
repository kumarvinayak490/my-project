import React from "react";
import Container from "./common/Container";

const MyAchievements = () => {
  return (
    <Container>
      <div className="flex gap-x-8">
        <div className="w-2/5  h-[500px] flex items-center justify-center">
          <div className="rounded-md ">
            <img
              className="w-full h-full object-cover rounded-md "
              src="/assets/images/img1.JPG"
              alt="achievement-img"
            />
          </div>
        </div>
        <div className="w-3/5 flex flex-col items-center justify-center h-[500px]">
          <div className=" bg-purple-100 py-8 px-4 rounded-l-md">
            <h2 className="mb-4 text-gray-800">Builder's Camp Hackathon</h2>
            <p className="text-gray-800">
              Winner of the prestigious Builder's Camp Hackathon, sponsored by
              industry giants Intel and AWS. With a passion for innovation and a
              knack for problem-solving, I thrive in dynamic environments where
              creativity meets technology. My dedication to crafting
              cutting-edge solutions has been recognized on a global scale, and
              I am committed to pushing the boundaries of what's possible in the
              world of web development.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyAchievements;
