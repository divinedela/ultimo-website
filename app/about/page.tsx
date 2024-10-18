"use client";

import React, { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Hero from "./Hero";

const AboutPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <div className="container mx-auto  md:px-20 py-20 px-4">
        <div className="grid gap-[2rem] md:grid-cols-2 lg:grid-cols-3 md:gap-[1.5rem] mt-[3rem]">
          <DetailsCard title="Crafted for a sustainable lifestyle">
            Ultimo Gardens is developed by MM Partners Limited, a subsidiary of
            Harvey Properties Limited, which has been delivering premium
            residential and commercial properties in Accra since 2007.
          </DetailsCard>
          <DetailsCard title="A testament to design excellence">
            Our portfolio includes over 50 high-quality units, with our latest
            project, Harvey Terraces, featuring 20 townhomes and commercial
            spaces in North Legon.
          </DetailsCard>
          <DetailsCard title="Where quality meets sustainability">
            At Harvey, we focus on value-driven properties in prime locations,
            blending exceptional design with sustainable, user-friendly, and
            safe spaces for both residents and businesses, ensuring comfort and
            long-term quality.
          </DetailsCard>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

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
