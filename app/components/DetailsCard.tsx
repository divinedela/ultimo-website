import { ReactNode } from "react";

interface DetailsCardProps {
  title: string;
  children: ReactNode;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  title,
  children,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-[2.25rem] font-[700]">{title}</h3>
      <p className="text-[1rem] text-[#5B6B5D] leading-relaxed">{children}</p>
    </div>
  );
};
