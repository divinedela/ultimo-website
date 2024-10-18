import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Gallery from "./Gallery";

const GalleryPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="pb-[2rem] pt-[2rem] container mx-auto  md:px-20 px-4">
        <div className="space-y-2">
          <h3 className="text-[#28382B] text-[1rem] font-[700]">Gallery</h3>
          <h3 className="text-[2rem] italic font-[700]">
            A glimpse into <span className="text-[#348841]">Green Luxury.</span>
          </h3>
        </div>

        <Gallery />
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
