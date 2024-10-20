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
      <Hero />
      <div className="pb-[2rem] pt-[2rem] container mx-auto  md:px-10 px-4">
        <Residences />
      </div>
      <Experience />
      <Amenities />
      <Gallery />
      <Video />
      <Schedule />
    </div>
  );
};

export default ProjectPage;
