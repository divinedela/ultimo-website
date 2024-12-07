import React from "react";

const Hero = () => {
  return (
    <div className="px-0 sm:px-8 lg:px-[6rem] mt-[3rem]">
      <div className="max-sm:px-4 flex flex-col lg:flex-row justify-between gap-[1rem]">
        <div>
          <h3 className="text-[#28382B] text-[1rem] sm:text-xl font-[700]">
            The Project
          </h3>
          <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
            <span className="text-[#348841] italic">Green luxury</span>{" "}
            redefined.
          </h3>
        </div>
        <p className="text-[1rem] text-[#5B6B5D] leading-relaxed lg:max-w-[33rem]">
          Ultimo Gardens offers a peaceful retreat in Accra&apos;s prime Airport
          Residential Area, blending luxurious interiors with private rooftop
          terraces and lush outdoor spaces—all just minutes from the city&apos;s
          best dining, recreation, and healthcare.{" "}
          <br className="hidden md:block" />
          Experience eco-friendly living without compromising on luxury.
        </p>
      </div>

      <div className="md:h-[27rem] max-sm:h-[29rem] overflow-hidden relative mt-[2.25rem] lg:rounded-[3rem]">
        <video
          autoPlay
          muted
          className="w-full md:absolute top-1/2 md:-translate-y-1/2 max-sm:h-full max-sm:object-cover"
          loop
        >
          <source src="/assets/video/hero_video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};

export default Hero;
