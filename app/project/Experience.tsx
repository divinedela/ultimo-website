"use client";

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { floorPlans } from "../components/dummy data/floor_plans";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface Feature {
  bedroom?: number;
  bathroom?: number;
  parking?: number;
  sq_ft?: number;
  floor?: string;
}

interface FloorPlan {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: Feature[];
}

const Experience = () => {
  const [currentFloor, setCurrentFloor] = useState<FloorPlan | null>(null);

  useEffect(() => {
    if (floorPlans?.length > 0) {
      setCurrentFloor(floorPlans[0]);
    }
  }, []);

  const handleNext = () => {
    if (currentFloor) {
      const currentIndex = floorPlans.findIndex(
        (floor) => floor.id === currentFloor.id
      );
      if (currentIndex !== -1 && currentIndex < floorPlans.length - 1) {
        setCurrentFloor(floorPlans[currentIndex + 1]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentFloor) {
      const currentIndex = floorPlans.findIndex(
        (floor) => floor.id === currentFloor.id
      );
      if (currentIndex > 0) {
        setCurrentFloor(floorPlans[currentIndex - 1]);
      }
    }
  };

  return (
    <div className="md:-mt-14 mt-[3rem]">
      <div className="space-y-3 sm:text-center flex flex-col justify-center">
        <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
          Experience{" "}
          <span className="text-[#348841] italic">Ultimo Gardens</span>
        </h3>
        <p className="text-xl text-[#5B6B5D] leading-relaxed">
          Experience eco-friendly living without compromising on luxury.
        </p>
      </div>

      {currentFloor === null ? (
        <div className="grid lg:grid-cols-3 my-[2rem] mt-[3rem]">
          <div className="bg-[#28382B] p-[2rem] text-white rounded-[1.25rem] space-y-12">
            <div className="flex justify-between items-center">
              <h3 className=" text-2xl font-[400]">FLOOR PLANS</h3>
              <div className="text-white flex gap-3 items-center">
                <div className="border-[1px] border-white rounded-full size-[2rem] flex justify-center items-center hover:bg-white hover:text-black cursor-pointer transition-all">
                  <FaAngleLeft className="shrink-0" />
                </div>
                <div className="border-[1px] border-white rounded-full size-[2rem] flex justify-center items-center hover:bg-white hover:text-black cursor-pointer transition-all">
                  <FaAngleRight className="shrink-0" />
                </div>
              </div>
            </div>

            <div>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b-[1px] border-[#CFCFCF] py-3 w-full  text-[1rem] text-[#CFCFCF]"
                >
                  <p>Loading..</p> <p>0</p>
                </div>
              ))}
            </div>

            <Button className="">Download brochure</Button>
          </div>
          <div className="bg-white w-full lg:col-span-2 min-h-[20rem]"></div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 my-[2rem] mt-[3rem]">
          <div className="bg-[#28382B] p-[2rem] text-white rounded-[1.25rem] space-y-12">
            <div className="flex justify-between items-center">
              <h3 className=" text-2xl font-[400]">FLOOR PLANS</h3>
              <div className="text-white flex gap-3 items-center">
                <div
                  onClick={handlePrevious}
                  className="border-[1px] border-white rounded-full size-[2rem] flex justify-center items-center hover:bg-white hover:text-black cursor-pointer transition-all"
                >
                  <FaAngleLeft className="shrink-0" />
                </div>
                <div
                  onClick={handleNext}
                  className="border-[1px] border-white rounded-full size-[2rem] flex justify-center items-center hover:bg-white hover:text-black cursor-pointer transition-all"
                >
                  <FaAngleRight className="shrink-0" />
                </div>
              </div>
            </div>

            <div>
              {currentFloor?.features?.map((feature, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {Object.entries(feature).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center border-b-[1px] border-[#CFCFCF] py-3 w-full text-[1rem] text-[#CFCFCF]"
                    >
                      <p className="uppercase">{key.replace("_", " ")}</p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <Button className="">Download brochure</Button>
          </div>
          <div
            className="bg-white w-full bg-contain bg-no-repeat bg-center lg:col-span-2 min-h-[20rem]"
            style={{
              backgroundImage: `url('${currentFloor?.image}')`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Experience;
