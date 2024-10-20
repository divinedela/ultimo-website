"use client";

import React from "react";
import Button from "../components/Button";

const Form = () => {
  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-2 gap-2 w-full"
    >
      <input
        type="text"
        name="first-name"
        id="first-name"
        placeholder="Full name"
        className="w-full p-[1rem] text-[13px] bg-white text-[#5B6B5D] focus:outline-none placeholder:text-[#5B6B5D] col-span-2 sm:col-span-1"
      />

      <input
        type="text"
        name="last-name"
        id="last-name"
        placeholder="Phone number"
        className="w-full p-[1rem] text-[13px] bg-white text-[#5B6B5D] focus:outline-none placeholder:text-[#5B6B5D] col-span-2 sm:col-span-1"
      />

      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full p-[1rem] text-[13px] bg-white text-[#5B6B5D] focus:outline-none placeholder:text-[#5B6B5D] col-span-2 sm:col-span-1"
      />

      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone"
        className="w-full p-[1rem] text-[13px] bg-white text-[#5B6B5D] focus:outline-none placeholder:text-[#5B6B5D] col-span-2 sm:col-span-1"
      />

      <input
        type="date"
        name="date"
        id="date"
        className="w-full p-[1rem] text-[13px] bg-white text-[#5B6B5D] focus:outline-none placeholder:text-[#5B6B5D] col-span-2"
      />

      <textarea
        name="message"
        id="message"
        placeholder="Type your message here..."
        rows={5}
        className="w-full p-[1rem] text-[13px] bg-white text-[#5B6B5D] focus:outline-none placeholder:text-[#5B6B5D] col-span-2"
      />

      <Button className="rounded-none font-normal text-sm py-3 px-[2rem] w-full col-span-2 mt-5">
        SUBMIT
      </Button>
    </form>
  );
};

export default Form;
