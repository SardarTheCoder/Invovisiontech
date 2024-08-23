import { FancyCard } from "./FancyCard";
import "./what.css"
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/graph222.png";
import logo8 from "../assets/vr222.png";
import logo9 from "../assets/ai.png";

export const WhatWeOffer = () => {
  return (
    <>
      <div className="w-full mt-20 font-semibold">
        <div className=" max-[1280px] mx-auto px-6">
          <div className="bg-[#f8f9ff]  mt-20">
          <h1 style={{color:'#1c57a6'}} className="md:text-5xl text-center text-6xl pt-10 font-bold ">
            What We Offer
          </h1>
            <p className="text-center text-xs md:text-lg py-4">
              It’s your digital market presence, we just help you make it
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  ">
            <FancyCard
              imgsrc={logo1}
              cardheading="Mobile App Development"
              carddetail="Ready to transform your vision into a powerful app? Contact us today for a free consultation!"
            />
            <FancyCard
              imgsrc={logo2}
              cardheading="Digital Marketing"
              carddetail="Linking audience and brand through a soundly adroit digital connect"
            />
            <FancyCard
              imgsrc={logo3}
              cardheading="Search Engine Optimization"
              carddetail="Linking audience and brand through a soundly adroit digital connect"
            />
            <FancyCard
              imgsrc={logo4}
              cardheading="Cyber security"
              carddetail="We provide wide range of cyber security services. Our security team will help you quantify and prioritize your risks"
            />
            <FancyCard
              imgsrc={logo5}
              cardheading=" Website Development"
              carddetail="Crafting agile consumer-centric digital store infrastructures that support online business needs"
            />
            <FancyCard
              imgsrc={logo6}
              cardheading=" AR/VR Development"
              carddetail="Unlock the future of innovation with AR—transform your business with cutting-edge technology today!. AR/VR development solutions to help you surge ahead of the competition."
            />
            <FancyCard
              imgsrc={logo7}
              cardheading="Graphic Designing"
              carddetail="Transform your brand with stunning visuals—experience the artistry of professional graphic design today!"
            />

           <FancyCard
              imgsrc={logo8}
              cardheading="Blockchain Development"
              carddetail="Unlock the power of decentralized technology with our expert blockchain development services—secure, transparent, and innovative solutions await"
            />
              <FancyCard
              imgsrc={logo9} 
              cardheading="AI Development"
              carddetail="Unlock the power of decentralized technology with our expert AI development services—secure, transparent, and innovative solutions await"
            />


          </div>
        </div>
      </div>
    </>
  );
};
