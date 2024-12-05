import Image from "next/image";
import React from "react";

interface CustomImageCardProps {
  src: string;
  className?: string;
  alt?: string;
}

const CustomImg = ({ src, className, alt = "" }: CustomImageCardProps) => {
  const production = true;

  return (
    <>
      {production ? (
        <img src={src} alt="" className={` ${className}`} />
      ) : (
        <Image
          className={`${className}`}
          src={src}
          alt={alt}
          width={1000}
          height={1000}
          priority
        />
      )}
    </>
  );
};

export default CustomImg;
