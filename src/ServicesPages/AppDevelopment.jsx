import feature3_1 from "../assets/feature3_1.png";
import success_summary_img1_1 from "../assets/success_summary_img1_1.png";
import App from "../assets/App.jpg";

import creative_comunications from "../assets/creative_comunications.png";

import { Hero } from "./ServicesComponents/Hero.jsx";
import { Introduction } from "./ServicesComponents/Introduction.jsx";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters.jsx";
import { MattersToo } from "./ServicesComponents/MattersToo.jsx";
import { WhatDoYouGet } from "./ServicesComponents/WhatDoYouGet.jsx";
import { WhatDoWeDo } from "./ServicesComponents/WhatDoWeDo.jsx";
import { YouExpect } from "./ServicesComponents/YouExpect.jsx";

export const AppDevelopment = () => {
  return (
    <>
      <Hero
        heroImg={App}
        heroHeading=" App Development"
        heroDetails="Custom Or Semi-Custom App To Maximize Business And Efficiency"
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails="  Whether you’re looking to build a new app from scratch or enhance an
          existing one, our development process is tailored to your specific
          goals. We incorporate the latest technologies and best practices to
          ensure your app is scalable, secure, and capable of delivering the
          results your business demands."
      />
      <WhyItMatters
        Img={feature3_1}
        Heading="App Development"
        Heading2="Why App Development?"
        Details="App development is a critical touchpoint that shapes your consumers' perception of your brand. This powerful tool can either keep users engaged with your app or drive them to explore alternatives. As technology continues to advance, user expectations rise accordingly. "
        Heading3="Gear Up for a Better Converting Website"
        Card1="Human-Centric"
        Card2="Purpose-Built"
        Card3="Optimum Discoverability"
      />
      <MattersToo
        Img={success_summary_img1_1}
        Heading="App development Matters Too"
        Heading2="Brace for Optimized App Performance"
        Details="In the competitive digital landscape, a well-crafted app is more than just a tool—it's a key driver of business success. Our developers are committed to delivering high-performance apps that provide a unique user experience and foster customer loyalty, ensuring your app not only meets but exceeds the needs of your users and helps grow your repeat customer base."
        Card1="Customer-Centric"
        Card2="UX Driven Design"
        Card3="User-Friendly Buying"
      />

      <WhatDoWeDo
        Heading="What Do You Get From Choosing Us"
        Card1Heading="Positive User Experience"
        Card1Details="Captivate your target audience with a web design that conveys a delightful brand story"
        Card2Heading="Healthy Conversions"
        Card2Details="Guide consumers easily along a healthy sales or engagement conversion as early as post-launch"
        Card3Heading="Optimized App Performance"
        Card3Details="Provide your users with an intuitive and responsive app experience that combines smooth navigation with engaging content, all while ensuring fast load times and optimal performance."
        Card4Heading="Competitive Breakdown"
        Card4Details="Analyze your opposition and create a App development marked with competitive advantage"
        Card5Heading="Monumental Content"
        Card5Details="Trust us to strategically hone language for intended impact"
        Card6Heading="Exceptional App Design Excellence"
        Card6Details="Gain a design that resonates modern visual appeal and high-tech practical function"
      />

      <WhatDoYouGet
        Img={creative_comunications}
        Heading=" What Do We Do For You"
        List1="What Do We Do?"
        List1Details="We help you generate leads and convert customers in two different ways."
        List2="Enhance App Engagement and Conversions"
        List2Details="If you already have a functional app, we can help enhance its effectiveness by implementing strategic features and engaging content that drive user interaction and conversions. Our approach focuses on optimizing app performance through thoughtful design and targeted actions, ensuring that your app not only attracts users but also retains them and encourages meaningful engagement."
        List3="Customize App Development"
        List3Details="Tailor your app to meet your unique business needs with our customized app development services. We work closely with you to create bespoke solutions that align with your brand’s vision and goals. From personalized features and user interfaces to specific functionalities "

        
      />

      <YouExpect
        Heading="What Can You Expect"
        Details="We are dedicated to customizing or semi-customizing the design framework according to your requirements, you can expect to find the guaranteed services below."
        List1="Website security (optional)"
        List2="Website hosting (optional)"
        List3="Custom website designs (including multiple page templates)"
        List4="Custom website coding and development"
        List5="Optimization for SEO"
        List6="Existing content import"
        List7="Advanced analytics tracking"
        List8="Lead form creation and tracking"
        List9="Website compatibility across all browsers and devices"
        List10="Integration with social media pages"
        List11="XML sitemap creation and submission"
        List12="XML sitemap creation and submission"
        bottomData="Our developer will keep you on-board in order to incorporate any additional elements necessary for your design to give the impact you anticipate."
      />
    </>
  );
};
