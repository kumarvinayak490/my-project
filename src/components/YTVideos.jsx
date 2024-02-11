import React from "react";
import Container from "./common/Container";

const YTVideos = () => {
  const myVideos = [""];
  return (
    <Container>
      <h1 className="mb-8 text-center text-5xl font-normal bg-gradient-to-r from-purple-600 to-green-500  text-transparent bg-clip-text">
        Videos
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <iframe
            width="355"
            height="200"
            src="https://www.youtube.com/embed/iGNJpUAfVoQ"
            title="Javascript Event Loop, Call Stack and CallBack Queues"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="355"
            height="200"
            src="https://www.youtube.com/embed/22pve_af2c8"
            title="Closure | Super Power Of JavaScript"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="355"
            height="200"
            src="https://www.youtube.com/embed/kh3nuLp9AEA"
            title="Debouncing in 3 minutes | React | UseEffect | CleanUp Function"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default YTVideos;
