"use client";

import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Form from "./Form";
import ContactDetails from "./ContactDetails";

const ContactPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Form />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default ContactPage;
