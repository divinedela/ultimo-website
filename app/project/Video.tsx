import React from "react";

const Video = () => {
  return (
    <div className=" py-[4rem] container mx-auto  md:px-20 px-4 relative">
      <h1 className="text-[2rem] sm:text-[3rem] tracking-[0.3em] text-center">
        EXPLORE DOWNTOWN
      </h1>
      <p className="text-[1rem] leading-relaxed text-center tracking-[0.4em]">
        A PERFECT PLACE TO CALL HOME
      </p>
      <p className="text-[1rem] leading-[1.7] text-center text-balance my-[2rem] w-full max-w-[70rem] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div className="md:h-[35rem] overflow-hidden relative mt-[4rem]">
        <video
          autoPlay
          muted
          className="w-full md:absolute top-1/2 md:-translate-y-1/2"
          loop
        >
          <source src="/assets/video/hero_video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};

export default Video;
