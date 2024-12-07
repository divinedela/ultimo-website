import React from "react";
import Video from "./Video";
import Hero from "./Hero";
import Residences from "./Residences";
import Experience from "./Experience";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import Schedule from "./Schedule";

const ProjectPage = () => {
  return (
    <div className="bg-white">
      <div className="2xl:max-w-[1440px] mx-auto bg-white">
        <Hero />
        <div className="px-4 sm:px-8 lg:px-[6rem] mt-[3rem] md:mt-[7.5rem]">
          <Residences />
          <Experience />
          <Amenities />
        </div>
      </div>
      <Gallery />
      <div className="2xl:max-w-[1440px] mx-auto bg-white">
        <Video />
      </div>
      <Schedule />
    </div>
  );
};

export default ProjectPage;
