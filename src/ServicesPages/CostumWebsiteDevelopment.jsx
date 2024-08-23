import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { BsCheckCircle } from "react-icons/bs";
import feature3_1 from "../assets/feature3_1.png";
import feature2 from "../assets/feature2.png";

import Custom_Website_Development_cover_bg from "../assets/Custom_Website_Development_cover_bg.jpg";

import laravel from "../assets/laravel.png";
import wordpress from "../assets/wordpress.png";
import react from "../assets/react.png";

import { Hero } from "./ServicesComponents/Hero";
import { Introduction } from "./ServicesComponents/Introduction";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { WhatDoYouGet } from "./ServicesComponents/WhatDoYouGet";
import { WhatDoWeDo } from "./ServicesComponents/WhatDoWeDo";
import { YouExpect } from "./ServicesComponents/YouExpect";
import { DevelopmentService } from "./ServicesComponents/DevelopmentService";
import { CostumPHandCMHdevelopment } from "./ServicesComponents/CostumPHandCMHdevelopment";
export const CostumWebsiteDevelopment = () => {
  return (
    <>
      <Hero
        heroImg={Custom_Website_Development_cover_bg}
        heroHeading=" Website Development"
        heroDetails="Website development tailored to endorse your credibility"
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Visibility is everything. Proper SEO promises a solution that elevates online visibility. We aim to lead your audience to you and generate conversions by sustaining long-term SEO strategies."
      />

      <WhyItMatters
        Img={feature2}
        Heading="Why Website Development Matters"
        Heading2="Overcoming an Underperforming Website"
        Details="A website, if constructed properly, should relay your brand, value proposition and reliability. Users should be able to instantly determine product applicability and indispensability, drawing a clear difference of your competitive advantages.
        Many companies are intimidated by the thought of undergoing a web development project, settling with their current situation, gambling away opportunities and advantages."
        Heading3="Capture Your Target Audience’s Attention"
        Card1="Interactive Aesthetics"
        Card2="Intuitive Architecture"
        Card3="Demanding Functionality"
      />

      <WhatDoYouGet
        Img={feature3_1}
        Heading=" What Do We Do For You"
        List1="What Do We Do?"
        List1Details="We help you achieve functionality which is in every way optimized for your business."
        List2="Drive Action"
        List2Details="Our developers create digitally artistic story-telling interfaces aimed to elevate your brand’s potential. Based on data-driven research, each page plays on intuitive design encouraging positive interaction every time."
        List3="Boost Engagement"
        List3Details="We engineer receptive and responsive digital landscapes congruent to cutting-edge trends to help improve engagement and subsequent loyalty.

        "
      />

      <WhatDoWeDo
        Heading="What Do You Get"
        Card1Heading="Human-Centered UX"
        Card1Details="Enhance user experience with a design developed intuitive of their needs"
        Card2Heading="SEO Optimized"
        Card2Details="Boost relevant traffic via search engine results"
        Card3Heading="Affordable Scalability"
        Card3Details="Expand your website to cover unchartered growth as your website was developed to sustain your growth"
        Card4Heading="Competitive Breakdown"
        Card4Details="Analyze your opposition and create a web design marked with competitive advantage"
        Card5Heading="Efficient Load-Time"
        Card5Details="Raise your Google rating with a productive yet aesthetic"
        Card6Heading="Integrated Quotation"
        Card6Details="Empower users to contact you with complete quotations with a fully-equipped quotation integrated system"
      />
      <DevelopmentService
        Heading="Custom Web Development Services "
        Card1Heading="Tweak an Existing Platform"
        Card1Details="Opt for a time-saving option that takes the burden of converting a specific area(s) of your website site into a more efficient, up-to-date and better performing corporate version of itself. Our developers work endlessly to ensure a powerful portrayal of your values and goals consistently reaches your target audience"
        Card2Heading="Develop an Original Platform"
        Card2Details="Give your visitors a website brimming with personalization. Our focus lies in incorporating easy navigation and attractive information-driven visuals accompanied with optimized SEO warranting extensive reach."
      />

      <DevelopmentService
        Heading="Frontend, Backend Or Both "
        Details="Our services range from offering you a combination of frontend and backend services based only on what you require, as much as you require."
        Card1Heading="Frontend Development"
        Card1Details="Our frontend pieces include tailored functionality built from the ground up are created to promote usability, reliability and scalability. Whether you are looking to reform an existing area or create an original complete website, our team is ready to accept the challenge."
        Card2Heading="Backend Programming"
        Card2Details="A backend is the digital backbone of any application. It is unlike the frontend in terms of visibility, but it justifies server and database related activities. Our developers optimize your backend to embrace a unique set of features bringing you the flexibility of true customization and full control."
      />
      <CostumPHandCMHdevelopment
        Heading="Custom Multipul Platform Development"
        Details="Custom website development is favorably flexible, however, limitation lies affordability. In case you are in the market for a less expensive and time saving option, our developers use their PHP/CMS based skills to develop a robust and responsive corporate website"
        Card1Heading="WordPress"
        Card1Img={wordpress}
        Card1List="WP"
        Card2Heading="react"
        Card2Img={react}
        Card2List="react"
        Card3Heading="Laravel"
        Card3Img={laravel}
        Card3List="Laravel"
      />
      <YouExpect
        Heading="What Can You Expect"
        Details="We are dedicated to customizing or semi-customizing the design framework according to your requirements, you can expect to find the guaranteed services below."
        left_List_Item_1="Website Development"
        left_List_Item_2="Responsive Design"
        left_List_Item_3="Progressive Web Apps"
        left_List_Item_4="Third-Party Integration"
        right_List_Item_1="Software Development"
        right_List_Item_2="Support & Maintenance"
        right_List_Item_3="Business Analysis"
        right_List_Item_4="QA & Testing"
        bottomData="Our designers will keep you on-board in order to incorporate any additional elements necessary for your design to give the impact you anticipate."
      />
    </>
  );
};
