import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image from "next/image";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-[3rem] mb-[3rem] sm:mb-[7.5rem]">
      <div className=" space-y-6">
        <div>
          <h3 className="text-[#28382B] text-[1rem] sm:text-xl font-[700]">
            About Ultimo Gardens
          </h3>
          <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
            Experience living,{" "}
            <span className="text-[#348841] italic ">reimagined.</span>
          </h3>
        </div>
        <p className="text-xl text-[#5B6B5D] leading-relaxed">
          Ultimo Gardens offers a serene, modern living experience with
          amenities designed for comfort and convenience in a prime location.{" "}
          <br />
          Each home blends contemporary style with smart functionality, ensuring
          beauty, security, and vibrant living.
        </p>
        <button className="text-[#348841] text-[1rem] font-[700] flex gap-[10px] items-center">
          <span>Read more</span>
          <IoArrowForwardCircleOutline className="shrink-0" size={28} />
        </button>
      </div>
      <div className=" flex justify-end">
        <Image
          priority
          src="/assets/img/About_Ultimo-Gardens.jpeg"
          className="max-h-[38.5] object-cover rounded-[1.3rem] min-h-[26rem]"
          width={1000}
          height={416}
          alt=""
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default About;
