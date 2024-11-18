import React from "react";

const Hero = () => {
  return (
    <div className="px-6 my-[1rem]">
      <div
        className="bg-no-repeat bg-center bg-cover rounded-[3rem] h-full relative group overflow-hidden container mx-auto min-h-[30rem]"
        style={{
          backgroundImage: `url('/assets/img/about_hero-bg.jpeg')`,
        }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#1D231EE5]  to-black/10" />

        <div className="absolute bottom-[2rem] left-[1.5rem] z-10 text-white p-[2rem]">
          <h2 className="text-xl font-[700]">About Us</h2>
          <h1 className="text-[3rem] font-bold leading-tight">
            Elevating living through <br />{" "}
            <span className="text-[#92FFA3] italic">Green Luxury.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
