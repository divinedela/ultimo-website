import React from "react";
import Gallery from "./Gallery";

const GalleryPage = () => {
  return (
    <div className="bg-white">
      <div className="pb-[2rem] pt-[2rem] container mx-auto  md:px-20 px-4">
        <div className="">
          <h3 className="text-[#28382B] text-xl font-[700]">Gallery</h3>
          <h3 className="text-[3rem] font-[700]">
            A glimpse into{" "}
            <span className="text-[#348841] italic">Green Luxury.</span>
          </h3>
        </div>

        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
