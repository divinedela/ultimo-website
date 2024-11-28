import Image from "next/image";
import React from "react";

const Form = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-[3rem] pb-[2rem] lg:pb-[6.5rem] h-fit">
      <div className="hidden lg:flex justify-end h-full">
        <Image
          priority
          src="/assets/img/form-bg.jpeg"
          className="max-h-[26rem] md:max-h-full object-cover rounded-[1.3rem]"
          width={1000}
          height={1000}
          layout="responsive"
          alt=""
        />
      </div>
      <div className=" space-y-2">
        <h3 className="text-[#28382B] text-[1rem] sm:text-xl font-[700]">Contact Us</h3>
        <h3 className="text-[2rem] sm:text-[3rem] font-[700] leading-snug">
          Guiding your path to a{" "}
          <span className="text-[#348841] italic">new home</span>
        </h3>

        <form
          action=""
          className="grid grid-cols-1 gap-6 text-[1rem] text-[#5B6B5D]"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            className="border-b-[1px] border-[#CFCFCF] w-full p-4 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="border-b-[1px] border-[#CFCFCF] w-full p-4 focus:outline-none"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone number"
            className="border-b-[1px] border-[#CFCFCF] w-full p-4 focus:outline-none"
          />
          <div className="flex items-center gap-3 py-1 flex-wrap">
            <p className="font-semibold max-sm:w-full">Preferred Contact Method:</p>
            <button className="border-[1px] border-[#CFCFCF] p-1.5 px-3 rounded-lg text-inherit">
              Email
            </button>
            <button className="border-[1px] border-[#CFCFCF] p-1.5 px-3 rounded-lg text-inherit">
              Phone Call
            </button>
            <button className="border-[1px] border-[#CFCFCF] p-1.5 px-3 rounded-lg text-inherit">
              WhatsApp
            </button>
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="border-b-[1px] border-[#CFCFCF] w-full p-4 focus:outline-none"
          ></textarea>
          <div className="flex items-center gap-3 text-[#28382B]">
            <input
              type="checkbox"
              name="subscribe"
              id="subscribe"
              className="w-[1rem] h-[1rem]"
            />
            <label htmlFor="subscribe">Send me a brochure</label>
          </div>
          <button className="bg-[#348841] text-white p-[1rem] text-[1rem] font-[700] rounded-lg hover:bg-green-700 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
