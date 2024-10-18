"use client";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import FitnessCenter from "../../public/assets/img/Modern_Fitness-Center.jpeg";
import ElectricVehicle from "../../public/assets/img/Electric_vehicle_charging-ports.jpeg";
import InverterACs from "../../public/assets/img/Inverter_ACs_and_LED-bulbs.jpeg";
import SolarPower from "../../public/assets/img/Solar_Power-Generation.jpeg";

const Featured = () => {
  return (
    <div className="bg-[#F6F4ED] rounded-t-[3rem] py-20">
      <div className="container mx-auto  md:px-20 px-4">
        <div className="grid gap-[1rem] lg:grid-cols-2">
          <div className=" space-y-4">
            <h3 className="text-[#28382B] text-[1rem] font-[700]">
              Featured Facilities
            </h3>
            <h3 className="text-[2.25rem] font-[700]">
              Facilities <span className="text-[#348841] italic">designed</span> for
              effortless living.
            </h3>
            <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">
              At Ultimo Gardens, every amenity is crafted to enhance your
              lifestyle—offering comfort, convenience, and seamless experiences,
              all in one place.
            </p>
            <button className="text-[#348841] text-[1rem] font-[700] flex gap-4 items-center">
              <span>Explore facility</span>
              <IoArrowForwardCircleOutline className="shrink-0" size={28} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1.5rem] mt-[3rem]">
          <CustomImageCard
            title="Modern Fitness Center"
            span="md:col-span-3"
            image={FitnessCenter}
          />
          <CustomImageCard
            image={ElectricVehicle}
            title="Electric vehicle charging ports"
            span="md:col-span-2"
          />
          <CustomImageCard
            image={InverterACs}
            title="Inverter ACs and LED bulbs "
            span="md:col-span-2"
          />
          <CustomImageCard
            image={SolarPower}
            title="Solar Power Generation"
            span="md:col-span-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;

interface CustomImageCardProps {
  title: string;
  span: string;
  image: string | StaticImageData;
}
export const CustomImageCard: React.FC<CustomImageCardProps> = ({
  title,
  span,
  image,
}) => {
  return (
    <div
      className={`bg-white p-6 rounded-[1.3rem] flex flex-col gap-[1rem] ${span}`}
    >
      <h3 className="text-[#28382B] text-xl font-[700]">{title}</h3>
      <Image
        priority={false}
        src={image}
        alt=""
        className="h-full max-h-[21rem] object-cover rounded-xl"
      />
    </div>
  );
};
