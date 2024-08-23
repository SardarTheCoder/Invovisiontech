import service_v3_1 from "../assets/service_v3_1.png";

import PaidAdvertising_cover_bg from "../assets/PaidAdvertising_cover_bg.jpg";

import { Hero } from "./ServicesComponents/Hero";
import { Introduction } from "./ServicesComponents/Introduction";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { WhatDoYouGet } from "./ServicesComponents/WhatDoYouGet";
import { WhatDoWeDo } from "./ServicesComponents/WhatDoWeDo";

export const PaidAdvertising = () => {
  return (
    <>
      <Hero
        heroImg={PaidAdvertising_cover_bg}
        heroHeading=" Paid Advertising (PPC)"
        heroDetails="Demanding well-deserved call-to-action through a systematic combination of advertising methods"
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Custom Or Semi-Custom Web Designs To Maximize Business And
        Efficiency. Design is an indispensable element continually adding
        value to businesses. The slightest adjustment in improving
        experience or hinting value proposition can accomplish significant
        transformations. Which is why our designers believe their design
        will be considered impressive only if it embodies the needs of
        your business and your users simultaneously."
      />

      <WhyItMatters
        Img={service_v3_1}
        Heading="Why PPC Matters"
        Heading2="Visibility in Search"
        Details="PPC allows companies to have massive degrees of control, which helps so they can increase ad spend in locations that work and decrease ad spend in areas that don’t. As our team works to create a PPC campaign tailored specifically to appeal to your target audience and demographics that enhances your online search presence and takes you forward."
        Heading3="The Right Decision"
        Card1="Take charge of your Ad spend"
        Card2="Laser Targeted Visibility"
        Card3="Relevant Traffic"
      />
      <WhatDoWeDo
        Heading="What Do You Get"
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

      <WhatDoYouGet
        Img={service_v3_1}
        Heading=" What Do We Do For You"
        List1="What Do We Do?"
        List1Details="We help you generate leads and convert customers in two different ways."
        List2="Optimize Website Conversion"
        List2Details="If you are already an owner of a sound website, we can help optimize conversion by placing productive content and compelling calls to action that influence an eminently stable SEO performance."
        List3="Customize Web Design"
        List3Details="If you are looking to replace a website reminiscent of earlier technology or build an entirely new digital presence, we have a team of fresh and innovative minds eagerly inspired to offer you a human-centric design satisfying daily online business needs and promoting customer retention.

        "
      />
    </>
  );
};
