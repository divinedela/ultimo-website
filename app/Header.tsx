"use client";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

const Header = () => {
  const [active, setActive] = useState(true);
  const [index, setIndex] = useState(0);

  const navList = [
    { name: "Home", link: "#" },
    { name: "The Project", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <header className="container mx-auto flex justify-between items-center  py-4 md:px-20">
      <div className="flex items-center space-x-2">
        <img src="/assets/img/ultimo_logo.png" alt="Ultimo Logo" />
      </div>

      <nav className="hidden md:flex space-x-8">
        {navList.map((navItem, i) => (
          <div key={i} className="flex flex-col items-center">
            <a
              onClick={() => {
                setActive(true);
                setIndex(i);
              }}
              href={navItem.link}
              className={`hover:text-gray-800 text-[#28382B] ${
                active && index === i ? "text-gray-600" : ""
              } `}
            >
              {navItem.name}
            </a>
            <p className="text-[#D6AB11]">
              {active && index === i && <GoDotFill size={20} />}
            </p>
          </div>
        ))}
      </nav>

      <div className="hidden md:flex space-x-4">
        <button className="bg-[#348841] text-white font-semibold px-4 py-2 rounded hover:bg-green-700">
          Book a tour
        </button>
        <button className="border-2 border-[#D6AB11] text-[#D6AB11] font-semibold px-4 py-2 rounded hover:bg-[#D6AB11] hover:text-white">
          Explore Property
        </button>
      </div>
    </header>
  );
};

export default Header;
