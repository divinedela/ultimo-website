"use client";

import React from "react";
import GoogleMap from "./GoogleMap";

const ContactDetails = () => {
  return (
    <div className="container mx-auto  md:px-20 px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[1.5rem] mt-[3rem]">
        <div className="col-span-2">
          <h3 className="text-[#28382B] text-2xl font-[700]">Find us</h3>
        </div>
        <div className="col-span-4 space-y-6">
          <div className="flex justify-between flex-wrap sm:flex-nowrap gap-[1.5rem]">
            <div className="text-[#5B6B5D]">
              <h3 className="text-[1rem] font-[700] mb-2">Phone:</h3>
              <ul className="text-sm mb-3">
                <li>0555555555</li>
              </ul>
              <h3 className="text-[1rem] font-[700] mb-2">Email:</h3>
              <ul className="text-sm mb-3">
                <li>example@ex.com</li>
              </ul>
            </div>
            <div className="text-[#5B6B5D]">
              <h3 className="text-[1rem] font-[700] mb-3">Office Hours:</h3>
              <ul className="text-sm space-y-1">
                <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="text-[#5B6B5D]">
              <h3 className="text-[1rem] font-[700] mb-3">Office Address:</h3>
              <ul className="text-sm space-y-1">
                <li>Ultimo Gardens</li>
                <li>[Insert Street Address]</li>
                <li>[City, State, ZIP Code]</li>
              </ul>
            </div>
          </div>

          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
