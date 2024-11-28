import { ReactNode } from "react";
import FlowerLotus from "../../public/assets/icons/Windmill.png";
import Image, { StaticImageData } from "next/image";

interface DetailsCardProps {
  title: string;
  children: ReactNode;
  imageSrc?: string | StaticImageData;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  children,
  imageSrc
}) => {
  return (
    <div className="space-y-4">
      <Image src={imageSrc || FlowerLotus} className="object-cover" alt="FlowerLotus" priority />
      <h3 className="text-[2rem] font-[700] text-[#28382B] leading-tight">{title}</h3>
      <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">{children}</p>
    </div>
  );
};
