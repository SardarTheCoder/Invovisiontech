import { Hero } from "./ServicesComponents/Hero";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { Introduction } from "./ServicesComponents/Introduction";
import breadcumb from "../assets/Ar.jpg";
import ar_vr from "../assets/ar_vr.png";
export const ARVRappDevelopment = (prop) => {
  return (
    <>
      <Hero
        heroImg={breadcumb}
        heroHeading="AR/VR App Development"
        heroDetails="AR/VR apps provide immersive experiences for users."
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Our technically sound team of AR/VR developers have the best skills set and proven track record of providing groundbreaking AR/VR development solutions to help you surge ahead of the competition. "
      />

      <WhyItMatters
        Img={ar_vr}
        Heading="Why AR/VR Apps"
        Heading2="Improve engagement and interactivity.
      "
        Details="Experience the power of AR/VR technology with custom app development that can enhance engagement, improve learning and training, create unique marketing opportunities, and provide a competitive edge in the market."
        Heading3="enhance brand awareness and customer loyalty"
        Card1="help visualize designs in 3D."
        Card2="can enhance brand awareness and customer loyalty."
        Card3="AR/VR apps can enhance user satisfaction and retention."
      />
    </>
  );
};
