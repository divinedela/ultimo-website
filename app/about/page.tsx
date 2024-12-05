import { DetailsCard } from "../components/DetailsCard";
import Hero from "./Hero";

const AboutPage = () => {
  return (
    <div className="bg-white 2xl:max-w-[1440px] mx-auto">
      <div className="lg:px-8">
        <Hero />
      </div>
      <div className="px-4 sm:px-8 lg:px-[6rem] mb-[3rem] sm:mb-[7.5rem]">
        <div className="grid gap-[2rem] md:grid-cols-2 lg:grid-cols-3">
          <DetailsCard
            src="/assets/icons/FlowerLotus.png"
            title="Crafted for a sustainable lifestyle"
          >
            Ultimo Gardens is developed by MM Partners Limited, a subsidiary of
            Harvey Properties Limited, which has been delivering premium
            residential and commercial properties in Accra since 2007.
          </DetailsCard>
          <DetailsCard
            src="/assets/icons/PenNibStraight.png"
            title="A testament to design excellence"
          >
            Our portfolio includes over 50 high-quality units, with our latest
            project, Harvey Terraces, featuring 20 townhomes and commercial
            spaces in North Legon.
          </DetailsCard>
          <DetailsCard
            src="/assets/icons/Windmill.png"
            title="Where quality meets sustainability"
          >
            At Harvey, we focus on value-driven properties in prime locations,
            blending exceptional design with sustainable, user-friendly, and
            safe spaces for both residents and businesses, ensuring comfort and
            long-term quality.
          </DetailsCard>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
