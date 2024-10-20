"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import Logo from "../public/assets/img/ultimo_logo.png";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./components/Button";
import Loading from "./components/Loading";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

  const handleClick = (path: string) => {
    setLoading(true);
    router.push(path);
  };

  useEffect(() => {
    setLoading(false);
  }, [currentPath]);

  return (
    <>
      {loading && <Loading />}
      <header className="container mx-auto flex justify-between items-center py-4 mt-2 md:px-10 sticky top-2 z-20 bg-white/30 backdrop-blur-md md:rounded-[3rem]">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src={Logo} alt="Ultimo Logo" priority={false} />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navList.map((navItem, i) => (
            <div
              key={i}
              className="flex flex-col items-center group h-[2.5rem] relative"
            >
              <button
                onClick={() => handleClick(navItem.link)}
                onMouseEnter={() => handleMouseEnter(navItem.name)}
                onMouseLeave={handleMouseLeave}
                className={`hover:text-gray-800 text-[1rem] text-[#28382B] z-10 `}
              >
                {navItem.name}
              </button>
              <AnimatePresence>
                {isActive(navItem.link) && (
                  <motion.p
                    key={currentPath}
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{
                      opacity: 0,
                      x: navList?.length / 2 > i ? 20 : -20,
                      transition: { duration: 0.5 },
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[#D6AB11] absolute bottom-0 "
                  >
                    <GoDotFill size={20} />
                  </motion.p>
                )}
              </AnimatePresence>

              {!isActive(navItem.link) && hoveredItem === navItem.name && (
                <motion.p
                  key={currentPath}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-[#D6AB11] absolute bottom-0 "
                >
                  <GoDotFill size={20} />
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
    </>
  );
};

export default Header;
