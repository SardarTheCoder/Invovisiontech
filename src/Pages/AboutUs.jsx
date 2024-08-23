import React from "react";

import breadcumb from "../assets/About.jpg";
import { Hero } from "../Components/Hero";
import { Introduction } from "../Components/Introduction";
import { OurApproach } from "../Components/OurApproach";
import { OurDifferentiator } from "../Components/OurDifferentiator";


export const AboutUs = () => {
  return (
    <>
      <Hero heroImg={breadcumb} heroHeading="About Us"  />
      <Introduction
        IntroHeading="  A Team Of Web Developers And Marketing Experts"
        IntroDetails="The Studio OnBrand events will bring together today’s most influential names in brand marketing to tackle the industry trends and talking-points on everyone’s minds—ranging from the COVID-19 effect on branding to the impact of the remote-work revolution."
      />

      <OurApproach />
      <OurDifferentiator />
      
    </>
  );
};
