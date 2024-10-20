"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Video from "./Video";
import Hero from "./Hero";
import Residences from "./Residences";
import Experience from "./Experience";
import Amenities from "./Amenities";
import Gallery from "./Gallery";


const ProjectPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <div className="pb-[2rem] pt-[2rem] container mx-auto  md:px-10 px-4">
        <Residences />
      </div>
      <Experience />
      <Amenities />
      <Gallery />
      <Video />
      <Footer />
    </div>
  );
};

export default ProjectPage;
