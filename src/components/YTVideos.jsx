import React from "react";
import Container from "./common/Container";

const YTVideos = () => {
  const myVideos = [""];
  return (
    <div className="flex flex-col gap-y-8 md:flex-row md:gap-y-0 justify-between items-center">
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
  );
};

export default YTVideos;
