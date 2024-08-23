import { Hero } from "./ServicesComponents/Hero";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { Introduction } from "./ServicesComponents/Introduction";
import breadcumb from "../assets/graphicss.jpg";
import graphics_design from "../assets/graphics_design.png";
export const GraphicsDesign = (prop) => {
  return (
    <>
      <Hero
        heroImg={breadcumb}
        heroHeading=" Graphics Design"
        heroDetails="Elevate your brand with our expertly crafted graphics."
       
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Our graphics design service is dedicated to helping businesses stand out from the competition and effectively communicate their message to their target audience. We offer expertly crafted designs that use a combination of typography, images, and colors to create visually stunning content. Whether you're looking for a new logo, marketing materials, or a complete branding overhaul, we work with you to understand your vision and bring it to life. "
      />

      <WhyItMatters
        Img={graphics_design}
        Heading="Graphics Design Matters"
        Heading2="Captures audience attention"
        Details="We believe that exceptional graphics design is crucial for businesses looking to stand out from the competition and make a lasting impact on their audience. With our design services, you can elevate your brand and effectively communicate your message to your target audience."
        Heading3="The Right Decision"
        Card1="Elevate your brand with our expertly crafted graphics."
        Card2="Transform your vision into a reality with our design services."
        Card3="Get noticed with visually stunning graphicsc"
      />
    </>
  );
};
