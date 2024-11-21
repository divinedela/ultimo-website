import { ReactNode } from "react";

interface DetailsCardProps {
  title: string;
  children: ReactNode;
  imageSrc: string;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  children,
  imageSrc
}) => {
  return (
    <div className="space-y-4">
      <img src={imageSrc} className="object-cover" alt="FlowerLotus" />
      <h3 className="text-[2rem] font-[700] text-[#28382B]">{title}</h3>
      <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">{children}</p>
    </div>
  );
};
