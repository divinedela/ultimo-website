"use client";

import React from "react";
import Button from "../components/Button";
// import Image from "../../public/assets/img/about_hero-bg.jpeg";

const Hero = () => {
  return (
    <div className="my-[1rem]">
      <div
        className="bg-no-repeat bg-center bg-cover h-full overflow-hidden relative min-h-[30rem] sm:min-h-[40rem] lg:h-[85vh] grid place-items-center"
        style={{
          backgroundImage: `url('/assets/img/project-bg2.png')`,
        }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black/60" />

        <div className="z-10 text-white p-[2rem] flex items-center flex-col">
          <h1 className="text-[4rem] md:text-[6rem] tracking-[0.3em] text-center leading-[1] lg:leading-normal">
            LUXURY LIVING
          </h1>
          <h2 className="text-[1rem] font-[500] tracking-[0.4em] text-center">
            PRIVATE DOWNTOWN LIVING IN CHARLOTTE, NC
          </h2>
          <div className="hidden md:flex space-x-4 mt-[3rem]">
            <Button className="rounded-none">SCHEDULE A SHOWING</Button>
            <Button className="rounded-none" type="secondary">DISCOVER MORE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
