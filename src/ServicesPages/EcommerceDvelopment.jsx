import feature3_1 from "../assets/feature3_1.png";
import feature2 from "../assets/feature2.png";

import ECommerce_Website_Development_cover_bg from "../assets/ECommerce_Website_Development_cover_bg.jpg";

import { Hero } from "./ServicesComponents/Hero";
import { Introduction } from "./ServicesComponents/Introduction";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { WhatDoYouGet } from "./ServicesComponents/WhatDoYouGet";
import { WhatDoWeDo } from "./ServicesComponents/WhatDoWeDo";
import { YouExpect } from "./ServicesComponents/YouExpect";

export const EcommerceDvelopment = () => {
  return (
    <>
      <Hero
        heroImg={ECommerce_Website_Development_cover_bg}
        heroHeading="Custom E-Commerce Website Development"
        heroDetails="Focus on conversions through pure customer-centricity"
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Our E-Commerce website developers are more customer-centric than business-centric. They visualize your website by internalizing your customer and predicting possible outcomes to achieve an unforgettable buying experience."
      />
      <WhyItMatters
        Img={feature2}
        Heading="Why Website Development Matters"
        Heading2="Evolve to Accommodate"
        Details="A low conversion rate married to a high bounce rate generally leaves businesses uncomfortably paralyzed. Our customized websites address three aspects an e-commerce website requires to avoid driving a negative customer experience including speed breakers, lack of responsiveness and irregular navigation. This clever dodge, opens opportunities to produce unique user experiences and impacts your brand recall positively."
        Heading3="Attract Customers with Gravitational User Expierence"
        Card1="Seamless Usability"
        Card2="Intuitive Functionality"
        Card3="Memorable Shopping"
      />

      <WhatDoYouGet
        Img={feature3_1}
        Heading=" What Do We Do For You"
        List1="What Do We Do?"
        List1Details="We help you achieve results and recall with convincing consumer action and engagement."
        List2="Minimize Bounce Ratet"
        List2Details="Our team is constantly inspired to outperform the simplicity of a ‘template store’ with a tastefully engaging, easy-to-navigate e-commerce website which persuades your customer to enjoy shopping."
        List3="Craft Strategic Information Architectures (IA)"
        List3Details="Well-designed IA finds its foundation in discoverability, findability and usability. Our ecommerce developers structure and organize your digital platform brining a methodical order to your website content.

        "
      />
      <WhatDoWeDo
        Heading="What Do You Get From Choosing Us"
        Card1Heading="Ideal Lead Generation"
        Card1Details="Ensure your customer has captivating material to show interest in taking action"
        Card2Heading="Smooth Purchase Experience"
        Card2Details="Ease your customer into shopping with end-to-end clarity and speedy customized checkout processes"
        Card3Heading="Multiple Payment Gateways"
        Card3Details="Facilitate your user with an easy-to-navigate and clearly accessible website that uses images and engaging content without compromising fast loading speeds"
        Card4Heading="Hone Product Pages"
        Card4Details="Minimize bounce rate and maximize positive decision-making with strategic placement of effective content"
        Card5Heading="Monumental Content"
        Card5Details="Trust us to strategically hone language for intended impact"
        Card6Heading="Customer-Centric User Experience"
        Card6Details="Guarantee our customer an intuitive experience based on humanized convince"
      />

      <YouExpect
        Heading="What Can You Expect"
        Details="We are dedicated to customizing or semi-customizing the design framework according to your requirements, you can expect to find the guaranteed services below."
        left_List_Item_1="Website Development"
        left_List_Item_2="Responsive Design"
        left_List_Item_3="Progressive Web Apps"
        left_List_Item_4="Content Management"
        left_List_Item_5="Promotion & Discount"
        left_List_Item_6="Suggested Pages & Related Products"
        left_List_Item_7="Product Filtering"
        left_List_Item_8="Reporting Tools"
        left_List_Item_9="Email Marketing Integration"
        right_List_Item_1="Dynamic Shopping Cart"
        right_List_Item_2="Multiple Payment & Shipping Options"
        right_List_Item_3="Scalable Platform"
        right_List_Item_4="Third-Party Integration"
        right_List_Item_5="Software Development"
        right_List_Item_6="Support & Maintenance"
        right_List_Item_7="Business Analysis"
        right_List_Item_8="QA & Testing"
        bottomData="Our designers will keep you on-board in order to incorporate any additional elements necessary for your design to give the impact you anticipate."
      />
    </>
  );
};
