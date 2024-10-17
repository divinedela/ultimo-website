import React from "react";
import Image, { StaticImageData } from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FutureOfGreenLiving from "../../public/assets/img/Future_of_Green-Living.jpeg";
import HomeTips from "../../public/assets/img/Tips_for_Sustainable-Home.png";
import UltimoGardens from "../../public/assets/img/Ultimo-Gardens.jpeg";

const Blogs = () => {
  return (
    <div className="container mx-auto  md:px-20 py-20 px-4">
      <div className="grid gap-[1rem] lg:grid-cols-2">
        <div className=" space-y-4">
          <h3 className="text-[#28382B] text-[1rem] font-[700]">Blog</h3>
          <h3 className="text-[2rem] italic font-[700]">
            <span className="text-[#348841]">Insights</span> that inspire.
          </h3>
          <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">
            Discover the latest in sustainable living, design trends, and real
            estate insights. Thoughtfully curated to elevate your experience at
            Ultimo Gardens.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[3rem]">
        <CustomBlogCard
          image={FutureOfGreenLiving}
          title="The Future of Green Living: Solar Power in Real Estate"
        />
        <CustomBlogCard
          image={HomeTips}
          title="5 Tips for a Sustainable Home"
        />
        <CustomBlogCard
          image={UltimoGardens}
          title="Ultimo Gardens: Leading Eco-Luxury in Accra"
        />
      </div>
    </div>
  );
};

export default Blogs;

interface CustomBlogCardProps {
  title: string;
  image: string | StaticImageData;
}
export const CustomBlogCard: React.FC<CustomBlogCardProps> = ({
  image,
  title,
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
      <h3 className="text-[#28382B] text-xl font-[700] h-[4rem]">{title}</h3>
      <button className="text-[#348841] text-[1rem] font-[700] flex gap-4 items-center mt-2">
        <span>Read more</span>
        <IoArrowForwardCircleOutline className="shrink-0" size={28} />
      </button>
    </div>
  );
};
