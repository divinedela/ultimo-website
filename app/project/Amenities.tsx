"use client";

import React from "react";
import { FaCarRear } from "react-icons/fa6";
import { motion } from "framer-motion";

const Amenities = () => {
  return (
    <div className=" py-[4rem] container mx-auto  md:px-20 px-4 relative">
      <h1 className=" text-[3rem] font-[500] tracking-[0.3em] text-center">
        AMENITIES
      </h1>
      <p className="text-[1rem] leading-relaxed text-center tracking-[0.4em]">
        ALL OF THE LUXURIES IN LIFE YOU DESERVE
      </p>

      <div className="grid grid-cols-3 gap-[2rem] mt-[3rem] max-w-[75rem] mx-auto">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div key={i}>
            <AmenitiesCard type={i % 2 === 0 ? "secondary" : "primary"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;

interface AmenitiesProps {
  type?: string;
  title?: string;
  icon?: React.ReactNode;
  iconName?: string;
  children?: React.ReactNode;
}

export const AmenitiesCard: React.FC<AmenitiesProps> = ({
  type = "primary",
  title,
  icon,
  iconName,
  children,
}) => {
  return (
    <motion.div
    initial={{ scale: 1}}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
      className={`p-[2rem] flex flex-col space-y-4 items-center border border-[#28382B] ${
        type !== "primary" ? "bg-[#28382B] text-white" : ""
      }`}
    >
      <FaCarRear size={50} className="shrink-0 text-[#D6AB11]" />
      <h4 className="text-[#D6AB11] tracking-wider">AMENITIES</h4>
      <h3 className="text-[1.6rem] font-light">Private Parking</h3>
      <p className="text-center">
        Nec tamen ullo modo summum pecudis bonum et hominis idem mihi videri.
      </p>
    </motion.div>
  );
};
