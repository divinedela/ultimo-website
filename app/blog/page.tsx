"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Blogs from "./Blogs";

const BlogPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="pb-[2rem] pt-[2rem] container mx-auto  md:px-20 px-4">
        <div className="space-y-2">
          <h3 className="text-[#28382B] text-[1rem] font-[700]">Blog</h3>
          <h3 className="text-[2rem] italic font-[700]">
            <span className="text-[#348841]">Insights</span> that inspire.
          </h3>
          <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">
            Discover the latest in sustainable living, design trends, and real
            estate insights. Thoughtfully <br className="hidden md:block" />{" "}
            curated to elevate your experience at Ultimo Gardens.
          </p>
        </div>

        <Blogs />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
