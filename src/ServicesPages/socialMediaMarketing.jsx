import service_v3_1 from "../assets/service_v3_1.png";
import Social_Media_Marketing_cover_bg from "../assets/Social_Media_Marketing_cover_bg.jpg";

import creative_comunications from "../assets/creative_comunications.png";

import { Hero } from "./ServicesComponents/Hero";
import { Introduction } from "./ServicesComponents/Introduction";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { WhatDoYouGet } from "./ServicesComponents/WhatDoYouGet";
import { WhatDoWeDo } from "./ServicesComponents/WhatDoWeDo";
import { YouExpect } from "./ServicesComponents/YouExpect";
export const SocialMediaMarketing = () => {
  return (
    <>
      <Hero
        heroImg={Social_Media_Marketing_cover_bg}
        heroHeading="Social Media Marketing"
        heroDetails="Linking audience and brand through a soundly adroit digital connect"
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Visibility is everything. Proper SEO promises a solution that elevates online visibility. We aim to lead your audience to you and generate conversions by sustaining long-term SEO strategies."
      />
      <WhyItMatters
        Img={creative_comunications}
        Heading="Why Social Media Marketing Matter"
        Heading2="Create Presence"
        Details="Social media marketing allows you to establish brand authority and brand credibility. It makes searching your brand online easier for your consumers and thus, more likely they are to engage. As our team works to create a social media marketing campaign tailored specifically to appeal to your target audience and demographics that enhances your online presence and takes you forward."
        Heading3="Have your audience’s attention"
        Card1="Publicize the word across the Internet"
        Card2="Generate accurate content dominancet"
        Card3="Keep track of the progress"
      />

      <WhatDoYouGet
        Img={service_v3_1}
        Heading=" What Do We Do For You"
        List1="What Do We Do?"
        List1Details="We build and maintain modern, intricate social media tactics and advertisements that transmit your message to your followers to ensure consistent conversion and greater traffic."
        List2="Creating Engaging Content"
        List2Details="In order to attract an audience, we will develop and create aesthetic social media posts that will generate traffic to your page."
        List3="Boost Engagement"
        List3Details="In order to increase commitment and loyalty, we develop responsive and adaptive digital environments in sync with the latest trends.

        "
      />
      <WhatDoWeDo
        Heading="What Do You Get From Choosing Us"
        Card1Heading="Positive User Experience"
        Card1Details="Captivate your target audience with a web design that conveys a delightful brand story"
        Card2Heading="Healthy Conversions"
        Card2Details="Guide consumers easily along a healthy sales or engagement conversion as early as post-launch"
        Card3Heading="Solid SEO Performance"
        Card3Details="Facilitate your user with an easy-to-navigate and clearly accessible website that uses images and engaging content without compromising fast loading speeds"
        Card4Heading="Competitive Breakdown"
        Card4Details="Analyze your opposition and create a web design marked with competitive advantage"
        Card5Heading="Monumental Content"
        Card5Details="Trust us to strategically hone language for intended impact"
        Card6Heading="Sensational Design Phenomena"
        Card6Details="Gain a design that resonates modern visual appeal and high-tech practical function"
      />

      <YouExpect
        Heading="What Can You Expect"
        Details="We are dedicated to customizing or semi-customizing the design framework according to your requirements, you can expect to find the guaranteed services below."
        left_List_Item_1="Digital Presence of your brand in the online world"
        left_List_Item_2="Brand Awareness and brand recognition"
        left_List_Item_3="Page Followers"
        right_List_Item_1="Posts Engagements"
        right_List_Item_2="Social Consultancy"
        right_List_Item_3="Reporting & Analysis to keep you informed at all times."
        bottomData="We will keep you on-board in order to incorporate any additional elements necessary for your design to give the impact you anticipate."
      />
    </>
  );
};
