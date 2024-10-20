"use client";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FutureOfGreenLiving from "../../public/assets/img/Future_of_Green-Living.jpeg";
import HomeTips from "../../public/assets/img/Tips_for_Sustainable-Home.png";
import UltimoGardens from "../../public/assets/img/Ultimo-Gardens.jpeg";
import { IoIosSearch } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import Loading from "../components/Loading";

const Blogs: React.FC = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const goToPost = (id: string) => {
    router.push(`/blog/${id}`);
    setLoading(true);
  };

  useEffect(() => {
    setLoading(false);
  }, [currentPath]);

  const [filter, setFilter] = React.useState("All");
  const FilterOptions = ["All", "Design", "Events", "Investing", "Trends"];

  return (
    <div className="py-10 space-y-8">
      <div className="flex items-center gap-3 py-1 flex-wrap">
        {FilterOptions.map((option, i) => (
          <button
            key={i}
            className={`border-[1px] border-[#CFCFCF] p-1.5 px-3 rounded-full text-inherit ${
              filter === option ? "bg-[#28382B] text-white" : ""
            }`}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}

        <div className="border-[1px] border-[#CFCFCF] p-1.5 px-3 rounded-full text-inherit flex items-center gap-3">
          <IoIosSearch className="shrink-0" />
          <input
            type="search"
            placeholder="Search"
            className="text-[#5B6B5D] bg-transparent w-full focus:outline-none"
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-[1.5rem] mt-[3rem]">
        <CustomBlogCard
          image={FutureOfGreenLiving}
          title="The Future of Green Living: Solar Power in Real Estate"
          onClick={() => goToPost("456")}
        />
        <CustomBlogCard
          image={HomeTips}
          title="5 Tips for a Sustainable Home"
          onClick={() => goToPost("123")}
        />
        <CustomBlogCard
          image={UltimoGardens}
          title="Ultimo Gardens: Leading Eco-Luxury in Accra"
          onClick={() => goToPost("789")}
        />
        <CustomBlogCard
          image={FutureOfGreenLiving}
          title="The Future of Green Living: Solar Power in Real Estate"
          onClick={() => goToPost("456")}
        />
        <CustomBlogCard
          image={HomeTips}
          title="5 Tips for a Sustainable Home"
          onClick={() => goToPost("123")}
        />
        <CustomBlogCard
          image={UltimoGardens}
          title="Ultimo Gardens: Leading Eco-Luxury in Accra"
          onClick={() => goToPost("789")}
        />
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Blogs;

interface CustomBlogCardProps {
  title: string;
  image: string | StaticImageData;
  onClick?: () => void;
}
export const CustomBlogCard: React.FC<CustomBlogCardProps> = ({
  image,
  title,
  onClick,
}) => {
  return (
    <div className="border-[0.5px] border-[#CFCFCF] p-6 rounded-[1.3rem] flex flex-col gap-[1rem]">
      <Image
        src={image}
        priority={false}
        alt=""
        className="h-full max-h-[12rem] object-cover rounded-xl"
      />
      <div className="text-sm text-[#5B6B5D] flex justify-between items-center">
        <p>3rd October, 2024</p>
        <p>3 mins read</p>
      </div>
      <h3 className="text-[#28382B] text-xl font-[700]">{title}</h3>
      <button
        onClick={onClick}
        className="text-[#348841] text-[1rem] font-[700] flex gap-4 items-center mt-2"
      >
        <span>Read more</span>
        <IoArrowForwardCircleOutline className="shrink-0" size={28} />
      </button>
    </div>
  );
};
