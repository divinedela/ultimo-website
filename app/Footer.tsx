
import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Logo from "../public/assets/img/ultimo_logo.png";

const Footer = () => {
  const navList = [
    { name: "Home", link: "#" },
    { name: "The Project", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Sustainability", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Blog", link: "#" },
  ];

  const links = [
    { icon: <FaFacebook size={24} />, link: "#" },
    { icon: <FaXTwitter size={24} />, link: "#" },
    { icon: <RiInstagramFill size={24} />, link: "#" },
    { icon: <FaLinkedin size={24} />, link: "#" },
  ];

  return (
    <footer className="container mx-auto pt-4 pb-[3rem] md:px-20 px-4 space-y-4">
      <Image priority={false} src={Logo} alt="logo" />
      <div className="flex flex-col lg:flex-row justify-between gap-[1rem] lg:items-center text-[#28382B]">
        <p>© Ultimo Gardens, 2024 All Rights Reserved</p>
        <ul className="flex gap-x-6 gap-y-1 flex-wrap items-center">
          {navList.map((navItem, i) => (
            <li key={i}>
              <a href={navItem.link}>{navItem.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          {links.map((link, i) => (
            <a href={link.link} key={i}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
