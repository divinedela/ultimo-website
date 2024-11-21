import React from "react";
import Image, { StaticImageData } from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Blogs = () => {
  return (
    <div className="container mx-auto  md:px-20 py-20 px-4">
      <div className="grid place-items-center">
        <div className=" space-y-4 text-center">
          <div>
            <h3 className="text-[#28382B] text-xl font-[700]">Blog</h3>
            <h3 className="text-[3rem] font-[700]">
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
  image: string | StaticImageData;
}
export const CustomBlogCard: React.FC<CustomBlogCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="rounded-[1.3rem] flex flex-col gap-[1rem] border-[0.5px] border-[#CFCFCF] overflow-hidden">
      <Image
        src={image}
        priority
        alt=""
        width={1920}
        height={252}
        className="object-cover max-h-[16.25rem] rounded-xl"
        layout="responsive"
      />
      <div className="p-6 rounded-b-xl mt-[-1.6rem]">
        <div className="text-sm text-[#5B6B5D] flex justify-between items-center">
          <p className="mb-2">3rd October, 2024</p>
          <p>3 mins read</p>
        </div>
        <h3 className="text-[#28382B] text-2xl font-[700] h-[4rem]">{title}</h3>
        <button className="text-[#348841] text-[1rem] font-[700] flex gap-4 items-center mt-4">
          <span>Read more</span>
          <IoArrowForwardCircleOutline className="shrink-0" size={28} />
        </button>
      </div>
    </div>
  );
};
