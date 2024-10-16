import React from "react";
import Header from "./Header";
import Home from "./pages/home";
import Footer from "./Footer";

const HomePage = () => {
  const navList = [
    { name: "Home", link: "#" },
    { name: "The Project", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Gallery", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  return (
    <div className="bg-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
