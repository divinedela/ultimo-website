"use client";

import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const headingWords = "LUXURY LIVING".replaceAll(" ", "-").split("");
  const subHeadingWords = "PRIVATE DOWNTOWN LIVING IN CHARLOTTE, NC"
    .replaceAll(" ", "-")
    .split("");

  return (
    <div className="my-[1rem]">
      <div
        className="bg-no-repeat bg-center bg-cover h-full overflow-hidden relative min-h-[30rem] sm:min-h-[40rem] lg:h-[85vh] grid place-items-center"
        style={{
          backgroundImage: `url('/assets/img/project-bg2.png')`,
        }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-black/60" />

        <div className="z-10 text-white p-[2rem] flex items-center flex-col">
          <div className="hidden md:flex gap-5 gap-y-0">
            {headingWords.map((word, index) => (
              <CustomHeading
                key={index}
                delay={index * 0.2}
                className={`text-[4rem] md:text-[6rem] text-center leading-[1] lg:leading-normal ${
                  word === "-" && "text-transparent"
                }`}
              >
                {word} {index === 3 && <br className="hidden md:block" />}{" "}
              </CustomHeading>
            ))}
          </div>
          <h1 className="text-[4rem] md:text-[6rem] tracking-[0.3em] text-center leading-[1] lg:leading-normal lg:hidden">
            LUXURY LIVING
          </h1>

          <div className="hidden md:flex gap-2 gap-y-0 flex-wrap">
            {subHeadingWords.map((word, index) => (
              <CustomHeading
                key={index}
                delay={index * 0.1}
                duration={0.1}
                className={`text-[1rem] font-[500] text-center ${
                  word === "-" && "text-transparent"
                }`}
              >
                {word} {index === 3 && <br className="hidden md:block" />}{" "}
              </CustomHeading>
            ))}
          </div>
          <h2 className="text-[1rem] font-[500] tracking-[0.4em] text-center lg:hidden">
            PRIVATE DOWNTOWN LIVING IN CHARLOTTE, NC
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:flex space-x-4 mt-[3rem]"
          >
            <Button className="rounded-none">SCHEDULE A SHOWING</Button>
            <Button className="rounded-none" type="secondary">
              DISCOVER MORE
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

interface CustomHeadingProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}
export const CustomHeading: React.FC<CustomHeadingProps> = ({
  children,
  delay,
  className,
  duration = 0.5,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration, ease: "easeInOut", delay: delay || 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
