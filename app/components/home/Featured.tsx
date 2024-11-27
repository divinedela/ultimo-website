import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import useHorizontalScrollPercentage from "../hooks/useHorizontalScrollPercentage";

const Featured = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollXProgress, "change", (latest) =>
    setPercent(latest)
  );

  const { scrollPercentage, scrollToPercentage } =
    useHorizontalScrollPercentage("features-progress");

  return (
    <div className="mb-[3rem] sm:mb-[7.5rem] max-sm:pt-[3rem]">
      <div className="grid place-items-center pr-4 sm:pr-8">
        <div className="text-center">
          <h3 className="text-[#28382B] text-[1rem] text-xl font-[700]">
            Green Features
          </h3>
          <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
            <span className="text-[#348841] italic">Eco-Friendly</span> Living
            at Its Finest
          </h3>
        </div>
      </div>

      <div className="">
        <motion.div
          ref={ref}
          id="features-progress"
          className="flex gap-[1.5rem] mt-[3rem] overflow-auto no-scrollbar"
        >
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
        </motion.div>
      </div>

      <div className="flex lg:hidden justify-end pr-4 sm:pr-8 mt-5">
        <div className="flex items-center gap-5 text-[#5B6B5D]">
          <IoIosArrowDropleftCircle
            size={36}
            onClick={() => scrollToPercentage(0)}
            className={
              percent < 0.01 ? `text-[#CFCFCF] cursor-not-allowed` : ""
            }
          />
          <IoIosArrowDroprightCircle
            size={36}
            onClick={() => scrollToPercentage(percent < 0.5 ? 50 : 100)}
            className={
              percent > 0.99 ? `text-[#CFCFCF] cursor-not-allowed` : ""
            }
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
    <div
      className={`bg-white rounded-[1.3rem] flex flex-col gap-[1rem] max-lg:min-w-[20rem]`}
    >
      <Image
        priority
        src={image}
        width={1000}
        height={500}
        alt=""
        layout="responsive"
        className={`min-h-[31.25rem] object-cover rounded-xl ${imageClassName}`}
      />
      <p className="text-[#5B6B5D] text-[1rem] sm:text-xl">
        <span className="font-[600] text-[#28382B] text-inherit">{span}</span>{" "}
        {description}
      </p>
    </div>
  );
};
