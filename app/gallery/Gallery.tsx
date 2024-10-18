"user client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import FutureOfGreenLiving from "../../public/assets/img/Future_of_Green-Living.jpeg";
import HomeTips from "../../public/assets/img/Tips_for_Sustainable-Home.png";
import UltimoGardens from "../../public/assets/img/Ultimo-Gardens.jpeg";

const Gallery = () => {
  return (
    <div className="py-10 space-y-8">
      <div>
        <h3 className="text-[#28382B] text-xl font-[700]">Interior</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard image={FutureOfGreenLiving} title="Dinning Area" />
          <CustomImageCard image={HomeTips} title="Living Room 1" />
          <CustomImageCard image={UltimoGardens} title="Living Room 3" />
        </div>
      </div>

      <div>
        <h3 className="text-[#28382B] text-xl font-[700]">Exterior</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard image={FutureOfGreenLiving} title="Dinning Area" />
          <CustomImageCard image={HomeTips} title="Living Room 1" />
          <CustomImageCard image={UltimoGardens} title="Living Room 3" />
        </div>
      </div>

      <div>
        <h3 className="text-[#28382B] text-xl font-[700]">Open House</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard image={FutureOfGreenLiving} title="Dinning Area" />
          <CustomImageCard image={HomeTips} title="Living Room 1" />
          <CustomImageCard image={UltimoGardens} title="Living Room 3" />
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
    <div className="border-[0.5px] border-[#CFCFCF] p-6 rounded-[1.3rem] flex flex-col gap-[1rem]">
      <Image
        src={image}
        priority={false}
        alt=""
        className="h-full max-h-[17rem] object-cover rounded-xl"
      />
      <p className="text-[1rem] text-[#5B6B5D]">{title}</p>
    </div>
  );
};
