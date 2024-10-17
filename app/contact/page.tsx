"use client";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Form from "./Form";

const page = () => {
  return (
    <div className="bg-white">
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default page;
