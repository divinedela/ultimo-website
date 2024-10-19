"use client";

import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";

const TourBookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-lg pt-8 rounded-lg shadow-md my-0 mx-0">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {/* Full Name */}
        <div className="md:col-span-1">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Phone Number */}
        <div className="md:col-span-1">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full bg-transparent px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email Address */}
        <div className="md:col-span-1">
          <input
            type="email"
            name="emailAddress"
            placeholder="Email Address"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full bg-transparent px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Date */}
        <div className="md:col-span-1 relative">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full bg-transparent px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <span className="absolute right-3 top-3 text-gray-400">
            <SlCalender />
          </span>
        </div>

        {/* Book a tour button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
          >
            Book a tour
          </button>
        </div>
      </form>
    </div>
  );
};

export default TourBookingForm;
