import Image from "next/image";
import React from "react";
import ImageLink from "../../public/assets/img/residence-ultimogardens.jpg";
import ImageLink2 from "../../public/assets/img/residence-ultimogardens2.jpg";
import Button from "../components/Button";

const Residences = () => {
  return (
    <div className="md:pt-[4rem]">
      <div className="grid md:grid-cols-2 gap-[2rem] lg:gap-0 md:gap-[1rem]">
        <div className="flex justify-end">
          <div className=" space-y-4 w-full sm:max-w-[33rem]">
            <h3 className="text-[3.5rem] tracking-[0.2em] leading-none text-wrap">
              LUXURY DOWNTOWN LIVING
            </h3>
            <p className="text-[1rem] text-[#5B6B5D] leading-relaxed tracking-[0.3em]">
              WELCOME TO HALTON PROPERTIES LOCATED IN DOWNTOWN CHARLOTTE
            </p>
            <div className="pt-6">
              <Button className="rounded-none font-normal text-sm py-3 px-[2rem]">
                EXPLORE RESIDENCES
              </Button>
            </div>
          </div>
        </div>
        <div className=" bg-slate-400">
          <Image
            priority={false}
            src={ImageLink}
            className="h-full w-full sm:min-h-[35rem] object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-end lg:justify-center -translate-y-[5rem] lg:-translate-y-[5rem] xl:-translate-y-[10rem] pr-6">
        <Image
          priority={false}
          src={ImageLink2}
          className="w-full max-w-[5rem] md:max-w-[15rem] lg:max-w-[20rem] xl:max-w-[25rem] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Residences;
