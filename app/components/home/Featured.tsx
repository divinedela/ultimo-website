import React from "react";
import Image, { StaticImageData } from "next/image";

const Featured = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto  md:px-20 px-4">
        <div className="grid place-items-center">
          <div className="text-center">
            <h3 className="text-[#28382B] text-xl font-[700]">
              Green Features
            </h3>
            <h3 className="text-[3rem] font-[700]">
              <span className="text-[#348841] italic">Eco-Friendly</span> Living
              at Its Finest
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] mt-[3rem]">
          <CustomImageCard
            span="Solar power generation"
            description="provides clean, renewable energy for a sustainable living experience."
            image="/assets/img/Modern_Fitness-Center.jpeg"
          />
          <CustomImageCard
            span="Electric vehicle charging ports"
            image="/assets/img/Electric_vehicle_charging-ports.jpeg"
            description="support eco-friendly transportation right at home."
          />
          <CustomImageCard
            span="Inverter ACs and LED bulbs"
            image="/assets/img/Inverter_ACs_and_LED-bulbs.jpeg"
            description="ensure low power consumption, enhancing energy efficiency."
          />
          <CustomImageCard
            span="Segregated waste system"
            image="/assets/img/Solar_Power-Generation.png"
            description="promote recycling and responsible waste management for a greener community."
            imageClassName="object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;

interface CustomImageCardProps {
  description?: string;
  span?: string;
  image: string | StaticImageData;
  imageClassName?: string;
}
export const CustomImageCard: React.FC<CustomImageCardProps> = ({
  description,
  span,
  image,
  imageClassName,
}) => {
  return (
    <div className={`bg-white rounded-[1.3rem] flex flex-col gap-[1rem]`}>
      <Image
        priority
        src={image}
        width={1000}
        height={500}
        alt=""
        layout="responsive"
        className={`min-h-[31.25rem] object-cover rounded-xl ${imageClassName}`}
      />
      <p className="text-[#5B6B5D] text-xl">
        <span className="font-[600] text-[#28382B] text-inherit">{span}</span>{" "}
        {description}
      </p>
    </div>
  );
};