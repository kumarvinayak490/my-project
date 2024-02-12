import React from "react";
import Container from "./common/Container";
import XIcon from "../Icnons/XIcon";
import MediumIcon from "../Icnons/MediumIcon";
import GitHubIcon from "../Icnons/GitHubIcon";
import InstagramIcon from "../Icnons/InstagramIcon";
import LinkedInIcon from "../Icnons/LinkedInIcon";
import YoutubeIcon from "../Icnons/YoutubeIcon";

const LetsConnect = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-8  ">
        <div className="bg-gradient-to-r from-slate-400  to-zinc-200 flex-1 rounded-l-md">
          <div className=" flex flex-col items-center gap-y-4 p-4">
            <h2 className="text-white font-serif hidden md:block">
              Get in touch with me on
            </h2>
            <h2 className="text-white font-serif block md:hidden">
              Connect on
            </h2>
            <ul className="flex  items-center gap-x-6">
              <li title="X.Com (Formerly Twitter)">
                <a href="https://twitter.com/vinayak490">
                  <XIcon />
                </a>
              </li>
              <li title="Medium">
                <a href="https://medium.com/@kumarvinayak490">
                  <MediumIcon />
                </a>
              </li>
              <li title="Github">
                <a href="https://github.com/kumarvinayak490">
                  <GitHubIcon />
                </a>
              </li>
              <li title="Instagram">
                <a href="https://www.instagram.com/vinayakkumar910">
                  <InstagramIcon />
                </a>
              </li>
              <li title="LinkedIn">
                <a href="https://www.linkedin.com/in/vinayak-kumar-1ba63513a/">
                  <LinkedInIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="w-[300px] h-[300px] rounded overflow-hidden">
            <img
              className="w-full h-full object-cover object-top"
              src="/assets/images/my-image.jpg"
              alt="my pic"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LetsConnect;
