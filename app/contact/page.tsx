"use client";
import React from "react";
import Form from "./Form";
import ContactDetails from "./ContactDetails";

const ContactPage = () => {
  return (
    <div className="bg-white 2xl:max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[6rem] mt-[3rem]">
      <Form />
      <ContactDetails />
    </div>
  );
};

export default ContactPage;
