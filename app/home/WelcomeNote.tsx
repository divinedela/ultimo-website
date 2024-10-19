"use client";
import React, { useState } from "react";
import TourBookingForm from "./TourBookingForm";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../components/Button";

const WelcomeNote = () => {
  const [showForm, setShowForm] = useState(false);
  const headingWords = "Green Luxury in Accra's Premier Gated Community".split(
    " "
  );

  return (
    <>
      <div className="hidden md:block absolute bottom-[2rem] left-[1.5rem] z-10 text-white bg-black/30 rounded-[2rem] p-[2rem] backdrop-blur-sm w-full max-w-[37rem]">
        <h2 className="text-[1rem] font-[700]">Welcome to Ultimo Gardens</h2>
        <div className="flex gap-3 gap-y-0 flex-wrap">
          {headingWords.map((word, index) => (
            <CustomHeading
              key={index}
              delay={index * 0.2}
              className={` ${index === 0 && "text-green-400 italic"}`}
            >
              {word} {index === 3 && <br className="hidden md:block" />}{" "}
            </CustomHeading>
          ))}
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              key="tourForm"
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TourBookingForm />
            </motion.div>
          )}

          {!showForm && (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-5 flex justify-between w-full gap-6"
            >
              <Button className="w-full" onClick={() => setShowForm(true)}>
                Book a tour
              </Button>
              <Button className="w-full" type="secondary">
                Explore Property
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {showForm && (
        <div onClick={() => setShowForm(false)} className="fixed inset-0" />
      )}
    </>
  );
};

export default WelcomeNote;

interface CustomHeadingProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}
export const CustomHeading: React.FC<CustomHeadingProps> = ({
  children,
  delay,
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: delay || 0.2 }}
      className={`text-[2.5rem] font-bold ${className}`}
    >
      {children}
    </motion.div>
  );
};
