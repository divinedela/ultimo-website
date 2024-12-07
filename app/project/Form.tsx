"use client";

import React from "react";
import Button from "../components/Button";
import { SlCalender } from "react-icons/sl";

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
        className="w-full  px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 col-span-2 sm:col-span-1"
      />

      <input
        type="text"
        name="last-name"
        id="last-name"
        placeholder="Phone number"
        className="w-full  px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 col-span-2 sm:col-span-1"
      />

      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="w-full  px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 col-span-2 sm:col-span-1"
      />

      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Phone"
        className="w-full  px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 col-span-2 sm:col-span-1"
      />

      <label htmlFor="date" className=" col-span-2 relative">
        <input
          type="date"
          name="date"
          id="date"
          className="w-full  px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 -z-10">
          <SlCalender />
        </span>
      </label>

      <textarea
        name="message"
        id="message"
        placeholder="Type your message here..."
        rows={5}
        className="w-full  px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 col-span-2"
      />

      <Button className="w-full col-span-2 mt-5">SUBMIT</Button>
    </form>
  );
};

export default Form;
