"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Logo from "../public/assets/img/ultimo_logo.png";
import { motion } from "framer-motion";

const Header = () => {
  const currentPath = usePathname();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navList = [
    { name: "Home", link: "/" },
    { name: "The Project", link: "#" },
    { name: "About Us", link: "/about" },
    { name: "Gallery", link: "/gallery" },
    { name: "Blog", link: "/blog" },
    { name: "Contact Us", link: "/contact" },
  ];

  const isActive = (link: string) => {
    if (link === "/") {
      return currentPath === "/";
    }

    return currentPath?.startsWith(link);
  };

  const handleMouseEnter = (name: string) => {
    setHoveredItem(name); // Set the name of the hovered item
  };

  const handleMouseLeave = () => {
    setHoveredItem(null); // Reset when no item is hovered
  };

  return (
    <header className="container mx-auto flex justify-between items-center py-4 md:px-20">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image src={Logo} alt="Ultimo Logo" priority={false} />
        </Link>
      </div>

      <nav className="hidden md:flex space-x-8">
        {navList.map((navItem, i) => (
          <div key={i} className="flex flex-col items-center group">
            <Link
              href={navItem.link}
              onMouseEnter={() =>
                currentPath !== navItem.link && !loading
                  ? handleMouseEnter(navItem.name)
                  : null
              }
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                setCurrentIndex(i);
                setLoading(true);
              }}
              className={`hover:text-gray-800 text-[1rem] text-[#28382B]  `}
            >
              {navItem.name}
            </Link>
            <p className="text-[#D6AB11]">
              {isActive(navItem.link) && <GoDotFill size={20} />}
            </p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity:
                  (loading && currentIndex === i) ||
                  hoveredItem === navItem.name
                    ? 1
                    : 0,
                x: loading && currentIndex === i ? [0, -10, 10, 5, 0] : 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: loading ? Infinity : 0,
                repeatType: "loop",
              }}
              className="text-[#D6AB11]"
            >
              <span>
                <GoDotFill size={20} />
              </span>
            </motion.p>
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
