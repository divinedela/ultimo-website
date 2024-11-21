import React from "react";

const Gallery = () => {
  return (
    <div className="py-10 space-y-8">
      <div>
        <h3 className="text-2xl font-[700]">Interior</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard
            image="/assets/img/Interior-1.jpeg"
            title="Dinning Area"
          />
          <CustomImageCard
            image="/assets/img/Interior-2.jpeg"
            title="Living Room 1"
          />
          <CustomImageCard
            image="/assets/img/Interior-3.jpeg"
            title="Living Room 3"
          />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-[700]">Exterior</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard
            image="/assets/img/Exterior-1.jpeg"
            title="Dinning Area"
          />
          <CustomImageCard
            image="/assets/img/Exterior-2.jpeg"
            title="Living Room 1"
          />
          <CustomImageCard
            image="/assets/img/Exterior-3.jpeg"
            title="Living Room 3"
          />
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-[700]">Open House</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] mt-[1rem]">
          <CustomImageCard
            image="/assets/img/Interior-1.jpeg"
            title="Dinning Area"
          />
          <CustomImageCard
            image="/assets/img/Interior-2.jpeg"
            title="Living Room 1"
          />
          <CustomImageCard
            image="/assets/img/Interior-3.jpeg"
            title="Living Room 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

interface CustomImageCardProps {
  title: string;
  image: string;
}
export const CustomImageCard: React.FC<CustomImageCardProps> = ({
  image,
  title,
}) => {
  return (
    <div className="rounded-[1.3rem] flex flex-col gap-[1rem]">
      <img
        src={image}
        alt=""
        className="h-full max-h-[21.1rem] object-cover rounded-xl"
      />
      <p className="text-[1rem] text-[#28382B]">{title}</p>
    </div>
  );
};
