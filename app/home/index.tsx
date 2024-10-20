import React from "react";
import Hero from "./Hero";
import About from "./About";
import Featured from "./Featured";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <div className="py-[1rem] bg-white">
      <Hero />
      <About />
      <Featured />
      <Blogs />
    </div>
  );
};

export default Home;
