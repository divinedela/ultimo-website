"user client";
import React from "react";

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
      className={`${
        type === "primary"
          ? "bg-[#348841] border-[#348841] text-white hover:bg-green-700"
          : "border-[#D6AB11] text-[#D6AB11] hover:bg-[#D6AB11] hover:text-white"
      } ${className} ${
        className?.includes("w-") ? "" : "w-fit"
      }  px-4 py-2 rounded-xl border-2 font-semibold transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
