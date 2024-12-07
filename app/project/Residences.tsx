import React from "react";
import Button from "../components/Button";
import CustomImg from "../components/CustomImg";

const Residences = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-[2rem] lg:gap-0 md:gap-[1rem]">
        <div className="space-y-3 flex flex-col justify-center">
          <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
            <span className="text-[#348841] italic">Luxury Living</span> at{" "}
            <br className="hidden md:block" />
            Ultimo Gardens
          </h3>
          <p className="text-xl text-[#5B6B5D] leading-relaxed">
            Experience eco-friendly living without{" "}
            <br className="hidden md:block" /> compromising on luxury.
          </p>
        </div>
        <CustomImg
          src="/assets/img/residence-ultimogardens.jpg"
          className="sm:min-h-[28rem] object-cover rounded-[1.25rem]"
        />
        <CustomImg
          src="/assets/img/residence-ultimogardens2.jpg"
          className="h-[18rem] md:hidden object-cover rounded-[1.25rem]"
        />
      </div>
      <div className="hidden md:flex justify-end lg:justify-center -translate-y-[5rem] lg:-translate-y-[7rem] xl:-translate-y-[10rem] pr-6">
        <CustomImg
          src="/assets/img/residence-ultimogardens2.jpg"
          className="max-w-[5rem] md:max-w-[15rem] lg:max-w-[20rem] xl:max-w-[25rem] object-cover rounded-[1.25rem]"
        />
      </div>
    </>
  );
};

export default Residences;
