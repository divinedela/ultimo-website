"use client";

import Image from "next/image";
import React from "react";
import ImageLike from "../../public/assets/img/profile-woman.png";
import { FaPhoneVolume } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import Form from "./Form";

const Schedule = () => {
  return (
    <div id="schedule" className="mb-[4rem] mt-[4rem]">
      <div
        className=" overflow-hidden relative"
        style={{
          backgroundImage: `url('/assets/img/experience-bg.png')`,
        }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[#1D231EE5]  to-black/60" />
        <div className="grid lg:grid-cols-2 gap-[2rem] lg:gap-0 my-[5rem] lg:my-[7rem] max-w-[78rem] mx-auto px-4 text-white z-10 relative">
          <div className=" space-y-4 w-full sm:max-w-[33rem]">
            <h3 className="text-[2.8rem] tracking-[0.2em] leading-none text-wrap">
              SCHEDULE A SHOWING
            </h3>
            <p className="text-[1rem] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="grid sm:grid-cols-2 pt-[2rem]">
              <Image
                priority={false}
                src={ImageLike}
                className="h-full w-full object-cover"
                alt=""
              />
              <div className="flex flex-col gap-2 justify-center p-[2rem]">
                <h3 className="text-[1.8rem] font-normal">Allison Rivers</h3>
                <p className="text-[1rem] text-[#D6AB11]">Real Estate Agent</p>

                <div className="flex items-center gap-2 mt-7">
                  <TbPhoneCall size={20} className="text-[#D6AB11]" />{" "}
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <TfiEmail size={20} className="text-[#D6AB11]" />{" "}
                  <p>example@eg.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end w-full">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
