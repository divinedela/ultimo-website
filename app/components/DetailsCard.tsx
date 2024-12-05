import { ReactNode } from "react";
import CustomImg from "./CustomImg";

interface DetailsCardProps {
  title: string;
  children: ReactNode;
  src: string;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  children,
  src,
}) => {
  return (
    <div className="space-y-4">
      <CustomImg src={src} className="object-cover w-[2.5rem]" alt="FlowerLotus" />
      <h3 className="text-[2rem] font-[700] text-[#28382B] leading-tight">
        {title}
      </h3>
      <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">{children}</p>
    </div>
  );
};
