"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import Button from "./components/Button";
import CustomImg from "./components/CustomImg";

const Header = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [translateX, setTranslateX] = useState(10.9);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const storedTranslateX = sessionStorage.getItem("translateX");
    setTranslateX(parseInt(storedTranslateX ?? "10.9"));
  }, []);

  const navList = [
    { name: "Home", link: "/", translate: 10.9 },
    { name: "The Project", link: "/project", translate: 96.9 },
    { name: "About Us", link: "/about", translate: 192.1 },
    { name: "Gallery", link: "/gallery", translate: 271.5 },
    { name: "Blog", link: "/blog", translate: 335.8 },
    { name: "Contact Us", link: "/contact", translate: 413.8 },
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

  return (
    <div className="px-4 sm:px-8 2xl:max-w-[1440px] mx-auto sticky top-2 z-20">
      {/* {loading && <Loading />} */}
      <header className="flex justify-between items-center py-2 bg-white/30 backdrop-blur-md rounded-xl md:rounded-[3rem] z-10 relative">
        <div className="flex items-center space-x-2 xl:ml-[55px] max-sm:ml-[12px]">
          <Link href="/">
            <CustomImg
              className="max-w-[141px] sm:max-w-[213px] min-h-[32px] sm:min-h-[48px]"
              src="/assets/img/ultimo_logo.png"
              alt="logo"
            />
          </Link>
        </div>

        <nav className="hidden lg:block ">
          <div className="flex gap-6">
            {navList.map((navItem, i) => (
              <div
                key={i}
                className="flex flex-col items-center group relative"
              >
                <button
                  onClick={() => {
                    handleClick(navItem.link);
                    setTranslateX(navItem.translate);
                    sessionStorage.setItem(
                      "translateX",
                      `${navItem.translate}`
                    );
                  }}
                  onMouseEnter={() => handleMouseEnter(navItem.name)}
                  onMouseLeave={handleMouseLeave}
                  className={`hover:text-gray-800 text-[1rem] text-[#28382B] z-10 `}
                >
                  {navItem.name}
                </button>

                {!isActive(navItem.link) && hoveredItem === navItem.name && (
                  <motion.p
                    key={currentPath}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-[#D6AB11] absolute -bottom-3.5"
                  >
                    <GoDotFill size={20} />
                  </motion.p>
                )}
              </div>
            ))}
          </div>
          <div className="h-2">
            <motion.div
              initial={{ x: 10.9 }}
              animate={{ x: translateX }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full grid place-items-center w-fit"
            >
              <GoDotFill
                size={20}
                className=" -translate-y-1.5 text-[#D6AB11]"
              />
            </motion.div>
          </div>
        </nav>

        <div className="hidden lg:flex space-x-4 xl:mr-[55px]">
          <Button>Book a tour</Button>
          <Button type="secondary" className="hidden 1147px:block">
            Explore Property
          </Button>
        </div>

        <Button
          onClick={() => setShowNav(!showNav)}
          className="lg:hidden mr-[12px]"
        >
          Menu
        </Button>
      </header>

      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        animate={{
          clipPath: showNav
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 0 0, 0 100%, 0 100%)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={() => setShowNav(!showNav)}
        className="lg:hidden fixed h-screen top-0 right-1/2 translate-x-1/2 w-[120%] bg-white"
      >
        <div className="flex flex-col gap-6 mt-[6rem]">
          {navList.map((navItem, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: i * 0.2 }}
              key={i}
              className="flex flex-col items-center group relative"
            >
              <button
                onClick={() => {
                  handleClick(navItem.link);
                  setTranslateX(navItem.translate);
                  sessionStorage.setItem("translateX", `${navItem.translate}`);
                }}
                className={`hover:text-gray-800 text-[1rem] text-[#28382B] z-10 `}
              >
                {navItem.name}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
