import Image, { StaticImageData } from "next/image";
import React from "react";
import Interior from "../../public/assets/img/Interior-1.jpeg";
import Interior2 from "../../public/assets/img/Interior-2.jpeg";
import Interior3 from "../../public/assets/img/Interior-3.jpeg";
import Exterior from "../../public/assets/img/Exterior-1.jpeg";
import Exterior2 from "../../public/assets/img/Exterior-2.jpeg";
import Exterior3 from "../../public/assets/img/Exterior-3.jpeg";

const Gallery = () => {
  return (
    <div className="py-10 space-y-8">
      <div>
        <h3 className="text-2xl font-[700]">Interior</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard image={Interior} title="Dinning Area" />
          <CustomImageCard image={Interior2} title="Living Room 1" />
          <CustomImageCard image={Interior3} title="Living Room 3" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-[700]">Exterior</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard image={Exterior} title="Dinning Area" />
          <CustomImageCard image={Exterior2} title="Living Room 1" />
          <CustomImageCard image={Exterior3} title="Living Room 3" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-[700]">Open House</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard image={Interior} title="Dinning Area" />
          <CustomImageCard image={Interior2} title="Living Room 1" />
          <CustomImageCard image={Interior2} title="Living Room 3" />
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
    <div className="rounded-[1.3rem] flex flex-col gap-[1rem]">
      <Image
        src={image}
        priority
        alt=""
        className="h-full max-h-[21.1rem] object-cover rounded-xl"
      />
      <p className="text-[1rem] text-[#28382B]">{title}</p>
    </div>
  );
};
