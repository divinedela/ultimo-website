"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  TfiAlignRight,
  TfiAngleLeft,
  TfiAngleRight,
  TfiClose,
} from "react-icons/tfi";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
console.log(TfiAlignRight);

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  const images = [
    "/assets/img/Ultimo-Gardens.jpeg",
    "/assets/img/Future_of_Green-Living.jpeg",
    "/assets/img/Tips_for_Sustainable-Home.png",
    "/assets/img/Ultimo-Gardens.jpeg",
    "/assets/img/Future_of_Green-Living.jpeg",
    "/assets/img/Tips_for_Sustainable-Home.png",
    "/assets/img/Ultimo-Gardens.jpeg",
    "/assets/img/Future_of_Green-Living.jpeg",
  ];

  const handleNext = () => {
    if (index >= 0) setIndex(index + 1);
    if (index === images.length - 1) setIndex(0);
  };
  const handlePrevious = () => {
    if (index >= 1) setIndex(index - 1);
    if (index === 0) setIndex(images.length - 1);
  };

  return (
    <div className=" py-[6rem] bg-[rgb(240,_240,_240)] ">
      <h1 className=" text-[3rem] tracking-[0.3em] text-center">
        AN EXCLUSIVE RESIDENCE
      </h1>
      <p className="text-[1rem] leading-relaxed text-center tracking-[0.4em]">
        ELEGANCE & LUXURY AT IT&apos;S BEST
      </p>

      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[6rem]">
        {images?.map((image, i) => (
          <div
            key={i}
            className="cursor-pointer group relative overflow-hidden"
            onClick={() => {
              setIsOpen(true);
              setIndex(i);
            }}
          >
            <div className="w-full h-full z-10 absolute top-0 left-0 group-hover:bg-black/40 transition-all duration-200" />
            <Image
              src={image}
              priority
              alt="Ultimo Gardens"
              width={1000}
              height={320}
              layout="responsive"
              className="w-full min-h-[20rem] max-h-[20rem] object-cover group-hover:scale-110 delay-100 transition-all duration-1000 ease-out"
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          ref={containerRef}
          className="fixed inset-0 bg-slate-50 z-20 p-[2rem] flex flex-col"
        >
          <div className="flex justify-between items-center text-2xl">
            <BsArrowsAngleExpand
              onClick={handleFullscreen}
              className="cursor-pointer hidden sm:block"
            />
            <TfiClose
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2 md:flex gap-2 items-center justify-between h-full text-[2rem]">
            <TfiAngleLeft
              onClick={handlePrevious}
              className="cursor-pointer shrink-0 place-self-center"
            />
            <div className="relative w-full h-[80vh] -order-1 md:order-none col-span-2">
              <AnimatePresence>
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute inset-0 flex justify-center"
                >
                  <Image
                    priority
                    src={images[index]}
                    width={1000}
                    height={1500}
                    layout="responsive"
                    alt="Ultimo Gardens"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <TfiAngleRight
              onClick={handleNext}
              className="cursor-pointer shrink-0 place-self-center"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
