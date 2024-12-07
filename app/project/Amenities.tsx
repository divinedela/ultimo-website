"use client";

import React from "react";
import { FaCarRear } from "react-icons/fa6";
import { motion } from "framer-motion";
import CustomImg from "../components/CustomImg";

const Amenities = () => {
  const allAmenities = [
    "Swimming Pool",
    "Ultramodern Gym",
    "Lounge",
    "Common Lightning Area",
    "24Hr CCTV",
    "Fibre Comms",
  ];

  return (
    <div className="mt-[3rem] md:mt-[7.5rem]">
      <div className="space-y-3 sm:text-center flex flex-col justify-center">
        <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
          Amenities
        </h3>
        <p className="text-xl text-[#5B6B5D] leading-relaxed">
          All of the luxuries in life you deserve
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem] my-[3rem] mx-auto">
        {allAmenities.map((title, i) => (
          <div key={i}>
            <AmenitiesCard
              src="/assets/icons/Windmill.png"
              title={title}
              type={i % 2 === 0 ? "secondary" : "primary"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

interface AmenitiesProps {
  type?: string;
  title: string;
  children?: React.ReactNode;
  src: string;
}

export const AmenitiesCard: React.FC<AmenitiesProps> = ({
  type = "primary",
  title,
  children,
  src,
}) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`pt-[2rem] px-4 pb-[4rem] flex flex-col space-y-4 items-center border border-[#28382B] rounded-[1rem] h-full ${
        type !== "primary" ? "bg-[#28382B] text-[#CFCFCF]" : "text-[#5B6B5D]"
      }`}
    >
      <CustomImg
        src={src}
        className="object-cover w-[2.5rem]"
        alt="FlowerLotus"
      />

      <h3
        className={`text-2xl font-[500] text-center ${
          type !== "primary" ? "text-white" : "text-[#28382B]"
        }`}
      >
        {title}
      </h3>
      <p className="text-center text-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna.
      </p>
    </motion.div>
  );
};
