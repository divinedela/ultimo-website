import CustomImg from "@/app/components/CustomImg";

interface CustomBlogCardProps {
  title: string;
  image: string;
}
export const CustomBlogCard: React.FC<CustomBlogCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="rounded-[1rem] flex gap-[1rem]">
      <CustomImg
        src={image}
        className="max-h-[4rem] max-w-[5.5rem] w-full object-cover rounded-lg"
      />
      <div className="w-full flex flex-col justify-between">
        <div className="text-sm text-[#5B6B5D] flex justify-between items-center">
          <p>3rd October, 2024</p>
        </div>
        <h3 className="text-[#28382B] text-[1rem] font-[700] leading-none">
          {title}
        </h3>
      </div>
    </div>
  );
};
