"use client";
import React, { useEffect, useState } from "react";
import {
  IoArrowBack,
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import Button from "../components/Button";
import { floorPlans } from "../dummy data/floor_plans";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

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
  }, [floorPlans]);

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

  console.log("currentFloor", currentFloor);

  return (
    <div id="experience" className="mb-[1rem] sm:-mt-[4rem]">
      <div
        className=" overflow-hidden relative"
        style={{
          backgroundImage: `url('/assets/img/experience-bg.png')`,
        }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#1D231EE5]  to-black/40" />

        <div className="z-10 text-white py-[4rem] container mx-auto relative">
          <h1 className="text-[#D6AB11] text-[3rem] tracking-[0.3em] text-center">
            EXPERIENCE HALTON
          </h1>
          <p className="text-[1rem] leading-[1.7] text-center text-balance mt-4 w-full max-w-[70rem] mx-auto">
            Halton Properties is a brand new private community in downtown
            Charlotte, consectetur adipiscing elit. Habent enim et bene longam
            et satis litigiosam disputationem. Stulti autem malorum memoria
            torquentur, sapientes bona praeterita grata recordatione renovata
            delectant. Laelius clamores sofòw ille so lebat Edere compellans
            gumias ex ordine nostros.
          </p>

          {currentFloor === null ? (
            <div className="grid lg:grid-cols-3 my-[2rem] mt-[5rem] max-w-[78rem] mx-auto px-4">
              <div className="bg-[#28382B] p-[4rem]">
                <div className="flex justify-between items-center">
                  <h3 className=" text-[1.6rem] font-[400]">FLOOR PLANS</h3>
                  <div className="text-[#D6AB11] flex gap-2 items-center opacity-45 cursor-not-allowed">
                    <div className="border-[1px] border-[#D6AB11] rounded-full size-[2rem] flex justify-center items-center ">
                      <HiArrowLongLeft className="shrink-0" />
                    </div>
                    <div className="border-[1px] border-[#D6AB11] rounded-full size-[2rem] flex justify-center items-center ">
                      <HiArrowLongRight className="shrink-0" />
                    </div>
                  </div>
                </div>

                <div className="text-[#D6AB11] ">
                  <h4 className="my-6">$00</h4>
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center border-b-[1px] border-[#D6AB11] py-3 w-full"
                    >
                      <p>Loading..</p> <p>0</p>
                    </div>
                  ))}
                </div>

                <p className="text-[1rem] leading-relaxed my-6">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blan ditiis prae sentium voluptatum deleniti.
                </p>

                <Button className="rounded-none font-normal text-sm px-[2rem]">DOWNLOAD PDF</Button>
              </div>
              <div className="bg-white w-full lg:col-span-2 min-h-[20rem] -order-1 lg:order-none"></div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 my-[2rem] mt-[5rem] max-w-[78rem] mx-auto px-4">
              <div className="bg-[#28382B] p-[4rem]">
                <div className="flex justify-between items-center">
                  <h3 className=" text-[1.6rem] font-[400]">FLOOR PLANS</h3>
                  <div className="text-[#D6AB11] flex gap-2 items-center">
                    <div
                      onClick={handlePrevious}
                      className="border-[1px] border-[#D6AB11] rounded-full size-[2rem] flex justify-center items-center hover:bg-[#D6AB11] hover:text-white cursor-pointer transition-all"
                    >
                      <HiArrowLongLeft className="shrink-0" />
                    </div>
                    <div
                      onClick={handleNext}
                      className="border-[1px] border-[#D6AB11] rounded-full size-[2rem] flex justify-center items-center hover:bg-[#D6AB11] hover:text-white cursor-pointer transition-all"
                    >
                      <HiArrowLongRight className="shrink-0" />
                    </div>
                  </div>
                </div>

                <div className="text-[#D6AB11] ">
                  <h4 className="my-6">${currentFloor?.price}</h4>
                  {currentFloor?.features?.map((feature, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      {Object.entries(feature).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between items-center border-b-[1px] border-[#D6AB11] py-3 w-full"
                        >
                          <p className="uppercase">{key.replace("_", " ")}</p>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <p className="text-[1rem] leading-relaxed my-6">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blan ditiis prae sentium voluptatum deleniti.
                </p>

                <Button className="rounded-none font-normal py-3 text-sm px-[2rem]">DOWNLOAD PDF</Button>
              </div>
              <div
                className="bg-white w-full bg-contain bg-no-repeat bg-center lg:col-span-2 min-h-[20rem] -order-1 lg:order-none"
                style={{
                  backgroundImage: `url('${currentFloor?.image}')`,
                }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
