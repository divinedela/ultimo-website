import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CustomImg from "../CustomImg";

const Blogs = () => {
  return (
    <div className="mb-[3rem] sm:mb-[7.5rem] max-sm:pt-[3rem]">
      <div className="grid place-items-center">
        <div className=" space-y-3 sm:text-center">
          <div>
            <h3 className="text-[#28382B] text-[1rem] sm:text-xl font-[700]">
              Blog
            </h3>
            <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
              <span className="text-[#348841] italic">Insights</span> that
              inspire.
            </h3>
          </div>
          <p className="text-xl text-[#5B6B5D] leading-relaxed max-w-[46.8rem]">
            Discover the latest in sustainable living, design trends, and real
            estate insights. Thoughtfully curated to elevate your experience at
            Ultimo Gardens.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[3rem]">
        <CustomBlogCard
          image="/assets/img/Future_of_Green-Living.jpeg"
          title="The Future of Green Living: Solar Power in Real Estate"
        />
        <CustomBlogCard
          image="/assets/img/Tips_for_Sustainable-Home.png"
          title="5 Tips for a Sustainable Home"
        />
        <CustomBlogCard
          image="/assets/img/Ultimo-Gardens.jpeg"
          title="Ultimo Gardens: Leading Eco-Luxury in Accra"
        />
      </div>
    </div>
  );
};

export default Blogs;

interface CustomBlogCardProps {
  title: string;
  image: string;
}
export const CustomBlogCard: React.FC<CustomBlogCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="rounded-[1.3rem] flex flex-col gap-[1rem] border-[0.5px] border-[#CFCFCF] overflow-hidden">
      <div className="max-h-[15.7rem] bg-slate-400 overflow-hidden">
        <CustomImg
          src={image}
          className="object-cover size-full max-h-[15.7rem]"
        />
      </div>
      <div className="p-6 rounded-b-xl mt-[-1.6rem]">
        <div className="text-sm text-[#5B6B5D] flex justify-between items-center mb-3">
          <p className="">3rd October, 2024</p>
          <p>3 mins read</p>
        </div>
        <h3 className="text-[#28382B] text-xl sm:text-2xl font-[700] sm:min-h-[4rem]">
          {title}
        </h3>
        <button className="text-[#348841] text-[1rem] font-[700] flex gap-[10px] items-center mt-6">
          <span>Read more</span>
          <IoArrowForwardCircleOutline className="shrink-0" size={28} />
        </button>
      </div>
    </div>
  );
};
