"use client";
import React from "react";
import Header from "./Header";
import Home from "./home";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default HomePage;
