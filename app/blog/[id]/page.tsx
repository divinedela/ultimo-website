"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import FutureOfGreenLiving from "../../../public/assets/img/Future_of_Green-Living.jpeg";
import { CustomBlogCard } from "./CustomBlogCard";

const BlogDetails: React.FC = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  return (
    <div className="bg-white">
      <div className="pb-[6rem] pt-[2rem] container mx-auto  md:px-20 px-4 grid grid-cols-1 lg:grid-cols-5 gap-[1.5rem] md:gap-[4rem]">
        <div className=" border-[#CFCFCF] flex flex-col gap-[1rem] lg:col-span-3">
          <Image
            src={FutureOfGreenLiving}
            priority
            alt=""
            className="h-full max-h-[19rem] object-cover rounded-xl"
          />
          <div className="text-sm text-[#5B6B5D] flex justify-between items-center">
            <p>3rd October, 2024</p>
            <p>3 mins read</p>
          </div>
          <h3 className="text-[#28382B] text-[2.25rem] font-[700]">
            Navigating the Current Real Estate Landscape: Tips for Buyers and
            Sellers
          </h3>

          <div className="space-y-4">
            <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">
              As the real estate market continues to evolve, both buyers and
              sellers are facing unique challenges and opportunities.
              Understanding the current landscape can empower you to make
              informed decisions, whether you&apos;re looking to buy your first home
              or sell your property for top dollar.
            </p>

            <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">
              As the real estate market continues to evolve, both buyers and
              sellers are facing unique challenges and opportunities.
              Understanding the current landscape can empower you to make
              informed decisions, whether you&apos;re looking to buy your first
              home or sell your property for top dollar.
            </p>

            <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">
              As the real estate market continues to evolve, both buyers and
              sellers are facing unique challenges and opportunities.
              Understanding the current landscape can empower you to make
              informed decisions, whether you&apos;re looking to buy your first home
              or sell your property for top dollar.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2  space-y-6">
          <h3 className="text-[#28382B] text-xl font-[700]">Recommended</h3>

          <CustomBlogCard
            image={FutureOfGreenLiving}
            title="The Future of Green Living: Solar Power in Real Estate"
          />

          <CustomBlogCard
            image={FutureOfGreenLiving}
            title="The Future of Green Living: Solar Power in Real Estate"
          />

          <CustomBlogCard
            image={FutureOfGreenLiving}
            title="The Future of Green Living: Solar Power in Real Estate"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
