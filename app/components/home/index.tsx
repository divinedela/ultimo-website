import React from "react";
import Hero from "./Hero";
import About from "./About";
import Featured from "./Featured";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className="2xl:max-w-[1440px] mx-auto bg-white">
      <div className="lg:px-8">
        <Hero />
      </div>
      <div className="px-4 sm:px-8 lg:px-[6rem]">
        <About />
      </div>
      <div className="pl-4 sm:pl-8 lg:px-[6rem]">
        <Featured />
      </div>
      <Blogs />
    </div>
  );
};

export default Home;
