import React, { useCallback } from "react";
import lottie from "lottie-web";
import animationdata from "../animations/anim.json";

const Avatar = () => {
  const containerRef = useCallback((node) => {
    if (node !== null) {
      lottie.loadAnimation({
        container: node,
        animationData: animationdata,
      });
    }
  }, []);

  return <div className="w-32 h-32" ref={containerRef} />;
};

export default Avatar;
