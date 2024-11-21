import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-[1rem] py-[6.5rem] container mx-auto  md:px-20 px-4">
      <div className=" space-y-4">
        <div>
          <h3 className="text-[#28382B] text-xl font-[700]">
            About Ultimo Gardens
          </h3>
          <h3 className="text-[3rem] font-[700]">
            Experience living,{" "}
            <span className="text-[#348841] italic">reimagined.</span>
          </h3>
        </div>
        <p className="text-xl text-[#5B6B5D] leading-relaxed">
          Ultimo Gardens offers a serene, modern living experience with
          amenities designed for comfort and convenience in a prime location.{" "}
          <br />
          Each home blends contemporary style with smart functionality, ensuring
          beauty, security, and vibrant living.
        </p>
        <button className="text-[#348841] text-[1rem] font-[700] flex gap-4 items-center">
          <span>Read more</span>
          <IoArrowForwardCircleOutline className="shrink-0" size={28} />
        </button>
      </div>
      <div className=" flex justify-end">
        <img
          src="/assets/img/About_Ultimo-Gardens.jpeg"
          className="h-full max-h-[26rem] object-cover rounded-[1.3rem]"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
