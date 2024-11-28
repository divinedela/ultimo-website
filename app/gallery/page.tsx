import React from "react";
import Gallery from "./Gallery";

const GalleryPage = () => {
  return (
    <div className="bg-white 2xl:max-w-[1440px] mx-auto mt-[3rem]">
      <div className="px-4 sm:px-8 lg:px-[6rem]">
        <h3 className="text-[#28382B] text-[1rem] sm:text-xl font-[700]">Gallery</h3>
        <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
          A glimpse into{" "}
          <span className="text-[#348841] italic">Green Luxury.</span>
        </h3>
      </div>

      <Gallery />
    </div>
  );
};

export default GalleryPage;
