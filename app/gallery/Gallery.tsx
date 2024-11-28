import Image, { StaticImageData } from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="pt-[19px] space-y-8 pl-4 sm:pl-8 lg:px-[6rem] mb-[3rem] sm:mb-[7.5rem]">
      <div>
        <h3 className="text-xl sm:text-2xl font-[700]">Interior</h3>

        <div className="overflow-auto no-scrollbar flex gap-[1.5rem] mt-[1rem] mr-[1.5rem]">
          <CustomImageCard
            image="/assets/img/Interior-1.jpeg"
            title="Dinning Area"
          />
          <CustomImageCard
            image="/assets/img/Interior-2.jpeg"
            title="Living Room 1"
          />
          <CustomImageCard
            image="/assets/img/Interior-3.jpeg"
            title="Living Room 3"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-[700]">Exterior</h3>

        <div className="overflow-auto no-scrollbar flex gap-[1.5rem] mt-[1rem] mr-[1.5rem]">
          <CustomImageCard image="/assets/img/Exterior-1.jpeg" title="Dinning Area" />
          <CustomImageCard image="/assets/img/Exterior-2.jpeg" title="Living Room 1" />
          <CustomImageCard image="/assets/img/Exterior-3.jpeg" title="Living Room 3" />
        </div>
      </div>

      <div>
        <h3 className="text-xl sm:text-2xl font-[700]">Open House</h3>

        <div className="overflow-auto no-scrollbar flex gap-[1.5rem] mt-[1rem] mr-[1.5rem]">
          <CustomImageCard
            image="/assets/img/Interior-1.jpeg"
            title="Dinning Area"
          />
          <CustomImageCard
            image="/assets/img/Interior-2.jpeg"
            title="Living Room 1"
          />
          <CustomImageCard
            image="/assets/img/Interior-3.jpeg"
            title="Living Room 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

interface CustomImageCardProps {
  title: string;
  image: string | StaticImageData;
}
export const CustomImageCard: React.FC<CustomImageCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="rounded-[1.3rem] flex flex-col gap-[1rem] max-lg:min-w-[18rem]">
      <Image
        src={image}
        priority
        alt=""
        width={1000}
        height={338}
        layout="responsive"
        className="max-h-[21.1rem] max-lg:min-h-[21.1rem] object-cover rounded-xl"
      />
      <p className="text-[1rem] text-[#28382B]">{title}</p>
    </div>
  );
};
