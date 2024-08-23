import info_1 from "../assets/info_1.png";

import business_right_image from "../assets/business_right_image.png";

import breadcumb from "../assets/seo.jpg";

import { Hero } from "./ServicesComponents/Hero";
import { Introduction } from "./ServicesComponents/Introduction";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { WhatDoYouGet } from "./ServicesComponents/WhatDoYouGet";
import { WhatDoWeDo } from "./ServicesComponents/WhatDoWeDo";
import { YouExpect } from "./ServicesComponents/YouExpect";

export const SearchEngineOptimization = () => {
  return (
    <>
      <Hero
        heroImg={breadcumb}
        heroHeading="Search Engine Optimization (SEO)"
        heroDetails="Convert traffic to customers with elevated online visibility"
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Visibility is everything. Proper SEO promises a solution that elevates online visibility. We aim to lead your audience to you and generate conversions by sustaining long-term SEO strategies."
      />
      <WhyItMatters
        Img={info_1}
        Heading="Why SEO Matters"
        Heading2="Bring Everything Together"
        Details="SEO is commonly presumed as a traffic optimization tool, however, it is not limited to attracting traffic it should extend to converting to visitors into customers or clients. When your website reaches optimization it builds your brand, credibility and authority. As our team works to develop an SEO strategy specifically designed to cater your target audience they strengthen your search engine ranking taking you ahead of your competition."
        Heading3="Bring Everything Together"
        Card1="Result Focused"
        Card2="Optimum Findability"
        Card3="Effortless Discoverability"
      />

      <WhatDoYouGet
        Img={business_right_image}
        Heading=" What Do We Do For You"
        List1="Cost-Effective Marketing"
        List1Details="Use proper SEO as a money saving marketing strategy to target active users"
        List2="Improved Site Usability"
        List2Details="Easier to find and use with extensive link and architecture rearrangement"
        List3="Brand Awareness"
        List3Details="Top ranked results translate to reliable and trustworthy websites

        "
      />
      <WhatDoWeDo
        Heading="What Do We Do For You"
        Card1Heading="Keyword Based Research"
        Card1Details="Any effective SEO campaign is based on extensive keyword research. Our team actively stays on top of discovering most pertinent keywords used by your target customers in an attempt to find your e-commerce or non-ecommerce website."
        Card2Heading="Local SEO"
        Card2Details="As frequently as Google updates its local algorithm, local SEO optimization becomes increasingly important. Our team can handle producing tailored geo-targeted landing pages and generating new local listings."
        Card3Heading="Landing Page Formation"
        Card3Details="While formulating digital marketing campaigns, targeted landing pages are considered an essential component. To offer your audience an unforgettable experience and drive conversion our team creates a custom landing page."
        Card4Heading="On-Page SEO"
        Card4Details="The longer a site or page takes to load the more visitors you lose. To remove this contributing factor from your bounce rate, our developers optimize site speed for users across all devices.

        "
        Card5Heading="On-Page SEO"
        Card5Details="Our strategy revolves around optimizing pages after researching and applying keywords proven to be most cost effective for you."
        Card6Heading="Product Detail Optimization"
        Card6Details="Expect our team to optimize catalog and/or product descriptions improve your visibility and ranking during any product-based search."
      />

      <YouExpect
        Heading="What Can You Expect"
        Details="We are dedicated to customizing or semi-customizing the design framework according to your requirements, you can expect to find the guaranteed services below."
        left_List_Item_1="Skillful SEO Strategy Planning & Execution"
        left_List_Item_2="Accurate SEO Analysis of Your Industry Opponents"
        left_List_Item_3="Content Production & Optimization"
        left_List_Item_4="SEO ROI Analyses & Optimization Advice"
        right_List_Item_1="Continuous SEO Keyword Tracking & Monitoring"
        right_List_Item_2="Real-Time SEO Campaign Growth Reporting"
        right_List_Item_3="Advanced SEO Campaign Consulting"
        right_List_Item_4="Discovery of New SEO Growth Opportunities"
        bottomData="Our designers will keep you on-board in order to incorporate any additional elements necessary for your design to give the impact you anticipate."
      />
    </>
  );
};
