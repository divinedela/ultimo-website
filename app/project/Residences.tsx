"use client";
import Image from "next/image";
import React from "react";
import ImageLink from "../../public/assets/img/about_hero-bg.jpeg";
import Button from "../components/Button";

const Residences = () => {
  return (
    <div className="pt-[4rem]">
      <div className="grid md:grid-cols-2 gap-[1rem]">
        <div className=" space-y-4 w-full max-w-[28rem]">
          <h3 className="text-[2.25rem] font-[700] tracking-[0.2em] text-wrap">
            LUXURY DOWNTOWN{" "}
            <span className="text-[#348841] italic">LIVING</span>
          </h3>
          <p className="text-[1rem] text-[#5B6B5D] leading-relaxed tracking-[0.3em]">
            WELCOME TO HALTON PROPERTIES LOCATED IN DOWNTOWN CHARLOTTE
          </p>
          <div className="pt-6">
            <Button className="rounded-none">EXPLORE RESIDENCES</Button>
          </div>
        </div>
        <div className=" flex justify-end">
          <Image
            priority={false}
            src={ImageLink}
            className="h-full max-h-[35rem] object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center -translate-y-[10rem]">
        <Image
          priority={false}
          src={ImageLink}
          className="w-full max-w-[25rem] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Residences;
