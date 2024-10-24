import Image, { StaticImageData } from "next/image";

interface CustomBlogCardProps {
  title: string;
  image: string | StaticImageData;
}
export const CustomBlogCard: React.FC<CustomBlogCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="border-[0.5px] border-[#CFCFCF] p-4 rounded-[1rem] flex flex-col sm:flex-row gap-[1rem]">
      <Image
        src={image}
        priority={false}
        alt=""
        className="h-full max-h-[7rem] sm:max-w-[11rem] w-full object-cover rounded-md"
      />
      <div className="w-full">
        <div className="text-sm text-[#5B6B5D] flex justify-between items-center">
          <p>3rd October, 2024</p>
          <p>3 mins read</p>
        </div>
        <h3 className="text-[#28382B] text-[1rem] font-[700]">{title}</h3>
      </div>
    </div>
  );
};
