"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import Logo from "../public/assets/img/ultimo_logo.png";
import { motion } from "framer-motion";
import Button from "./components/Button";

const Header = () => {
  const currentPath = usePathname();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navList = [
    { name: "Home", link: "/" },
    { name: "The Project", link: "/project" },
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
    <header className="container mx-auto flex justify-between items-center py-4 mt-2 md:px-10 sticky top-2 z-20 bg-white/30 backdrop-blur-md md:rounded-[3rem]">
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
                if (currentPath !== navItem.link) {
                  setLoading(true);
                  setCurrentIndex(i);
                }
              }}
              className={`hover:text-gray-800 text-[1rem] text-[#28382B]  `}
            >
              {navItem.name}
            </Link>
            {isActive(navItem.link) && (
              <p className="text-[#D6AB11]">
                <GoDotFill size={20} />
              </p>
            )}

            {((loading && currentIndex === i) ||
              hoveredItem === navItem.name) && (
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
            )}
          </div>
        ))}
      </nav>

      <div className="hidden md:flex space-x-4">
        <Button>Book a tour</Button>
        <Button type="secondary">Explore Property</Button>
      </div>
    </header>
  );
};

export default Header;
