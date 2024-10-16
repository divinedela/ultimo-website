"use client";
import React, { useState } from "react";
import TourBookingForm from "./TourBookingForm";

const WelcomeNote = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="absolute bottom-[2rem] left-[1.5rem] z-10 text-white bg-black/30 rounded-[2rem] p-[2rem] backdrop-blur-sm">
      <h2 className="text-[1rem] font-light">Welcome to Ultimo Gardens</h2>
      <h1 className="mt- text-[2rem] font-bold">
        <span className="text-green-400 italic">Green</span> Luxury in Accra’s
        <br />
        Premier Gated Community
      </h1>
      {/* <TourBookingForm /> */}
      {showForm && <TourBookingForm />}

      {!showForm && (
        <div className="mt-5 flex justify-between w-full">
          <button
            onClick={() => setShowForm(true)}
            type="button"
            className="bg-green-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-600 transition"
          >
            Book a tour
          </button>
          <button
            type="button"
            className="border border-yellow-400 text-yellow-400 py-3 px-6 rounded-md font-semibold hover:bg-yellow-400 hover:text-white transition"
          >
            Explore Property
          </button>
        </div>
      )}
    </div>
  );
};

export default WelcomeNote;
