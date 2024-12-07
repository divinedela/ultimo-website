"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import CustomImg from "./components/CustomImg";

const Footer = () => {
  const navList = [
    { name: "Home", link: "/", translate: 10.9 },
    { name: "The Project", link: "/project", translate: 96.9 },
    { name: "About Us", link: "/about", translate: 192.1 },
    { name: "Sustainability", link: "/contact", translate: 413.8 },
    { name: "Gallery", link: "/gallery", translate: 271.5 },
    { name: "Blog", link: "/blog", translate: 335.8 },
  ];

  const links = [
    { icon: <FaFacebook size={24} />, link: "#" },
    { icon: <FaXTwitter size={24} />, link: "#" },
    { icon: <RiInstagramFill size={24} />, link: "#" },
    { icon: <FaLinkedin size={24} />, link: "#" },
  ];
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <footer className="2xl:max-w-[1440px] mx-auto pt-6 pb-[57px] md:px-8 px-4 space-y-4 flex flex-col">
      <CustomImg
        className="max-w-[213px] xl:ml-[5rem] mt-4 lg:mt-0 order-1 lg:order-none"
        src="/assets/img/ultimo_logo.png"
        alt="logo"
      />
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-[1rem] lg:items-center text-[#28382B] xl:mx-[5rem]">
        <p className="text-xs hidden lg:block">
          © Ultimo Gardens, 2024 All Rights Reserved
        </p>
        <ul className="flex gap-x-6 gap-y-1 flex-col lg:flex-row lg:items-center text-[1rem]">
          {navList.map((navItem, i) => (
            <li
              onClick={() => {
                handleClick(navItem.link);
                sessionStorage.setItem("translateX", `${navItem.translate}`);
              }}
              key={i}
            >
              <a href={navItem.link}>{navItem.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-6 items-center">
          {links.map((link, i) => (
            <a href={link.link} key={i}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-xs lg:hidden order-2">
        © Ultimo Gardens, 2024 All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
