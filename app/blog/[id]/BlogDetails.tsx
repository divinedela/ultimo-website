"use client";
import Image from "next/image";
import React from "react";
import { CustomBlogCard } from "./CustomBlogCard";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  // Replace this with real data fetching or mock data
  const blogs = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

interface BlogDetailsProps {
  id: string;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ id }) => {
  console.log("Blog ID:", id);

  return (
    <div className="bg-white">
      <div className="pb-[6rem] pt-[2rem] container mx-auto  md:px-20 px-4 grid grid-cols-1 lg:grid-cols-5 gap-[1.5rem] md:gap-[4rem]">
        <div className=" border-[#CFCFCF] flex flex-col gap-[1rem] lg:col-span-3">
          <Image
            src="/assets/img/Future_of_Green-Living.jpeg"
            priority
            width={1000}
            height={304}
            alt=""
            layout="responsive"
            className=" max-h-[19rem] object-cover rounded-xl"
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
              informed decisions, whether you&apos;re looking to buy your first
              home or sell your property for top dollar.
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
              informed decisions, whether you&apos;re looking to buy your first
              home or sell your property for top dollar.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2  space-y-6">
          <h3 className="text-[#28382B] text-xl font-[700]">Recommended</h3>

          <CustomBlogCard
            image="/assets/img/Future_of_Green-Living.jpeg"
            title="The Future of Green Living: Solar Power in Real Estate"
          />

          <CustomBlogCard
            image="/assets/img/Future_of_Green-Living.jpeg"
            title="The Future of Green Living: Solar Power in Real Estate"
          />

          <CustomBlogCard
            image="/assets/img/Future_of_Green-Living.jpeg"
            title="The Future of Green Living: Solar Power in Real Estate"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
