"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "primary",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `${
          type === "primary"
            ? "bg-[#348841] border-[#348841] text-white hover:bg-green-700 hover:border-green-700"
            : "border-[#D6AB11] text-[#D6AB11] hover:bg-[#D6AB11] hover:text-white"
        } 
       px-[2rem] py-[1rem] rounded-xl font-[700] text-[1rem] border-2 transition-all w-fit`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
