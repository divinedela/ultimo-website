import React from "react";
import Blogs from "./Blogs";

const BlogPage = () => {
  return (
    <div className="bg-white 2xl:max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[6rem] mt-[3rem]">
      <div className="">
        <div className="">
          <h3 className="text-[#28382B] text-[1rem] sm:text-xl font-[700]">Blog</h3>
          <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
            <span className="text-[#348841] italic">Insights</span> that
            inspire.
          </h3>
          <p className="text-[1rem] text-[#5B6B5D] leading-relaxed mt-3">
            Discover the latest in sustainable living, design trends, and real
            estate insights. Thoughtfully <br className="hidden md:block" />{" "}
            curated to elevate your experience at Ultimo Gardens.
          </p>
        </div>

        <Blogs />
      </div>
    </div>
  );
};

export default BlogPage;
