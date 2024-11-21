"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import Button from "./components/Button";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const storedTranslateX = sessionStorage.getItem("translateX");
    setTranslateX(parseInt(storedTranslateX ?? "0"));
  }, []);

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
    router.push(path);
  };

  const initialX = 96 + 16;

  return (
    <>
      {/* {loading && <Loading />} */}
      <header className="container mx-auto flex justify-between items-center py-4 mt-2 md:px-10 sticky top-2 z-20 bg-white/30 backdrop-blur-md md:rounded-[3rem]">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img
              className="w-full h-full max-w-[213px] min-h-[48px]"
              src="/assets/img/ultimo_logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <nav className="hidden lg:block">
          <div className="flex space-x-[16px]">
            {navList.map((navItem, i) => (
              <div
                key={i}
                className="flex flex-col items-center group relative"
              >
                <button
                  onClick={() => {
                    handleClick(navItem.link);
                    setTranslateX(i * initialX);
                    sessionStorage.setItem("translateX", `${i * initialX}`);
                  }}
                  onMouseEnter={() => handleMouseEnter(navItem.name)}
                  onMouseLeave={handleMouseLeave}
                  className={`hover:text-gray-800 w-[96px] text-[1rem] text-[#28382B] z-10 `}
                >
                  {navItem.name}
                </button>

                {!isActive(navItem.link) && hoveredItem === navItem.name && (
                  <motion.p
                    key={currentPath}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[#D6AB11] absolute -bottom-4"
                  >
                    <GoDotFill size={20} />
                  </motion.p>
                )}
              </div>
            ))}
          </div>
          <div className="h-2">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: translateX }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-[96px] h-full grid place-items-center"
            >
              <GoDotFill size={20} className=" -translate-y-1 text-[#D6AB11]" />
            </motion.div>
          </div>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Button>Book a tour</Button>
          <Button
            type="secondary"
            className="hidden md:block lg:hidden 2xl:block"
          >
            Explore Property
          </Button>
        </div>
      </header>
    </>
  );
};

export default Header;
