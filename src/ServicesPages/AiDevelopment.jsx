import { Hero } from "./ServicesComponents/Hero";
import { WhyItMatters } from "./ServicesComponents/WhyItMatters";
import { Introduction } from "./ServicesComponents/Introduction";
import breadcumb from "../assets/Ai.jpg";
import artificial_intelligence from "../assets/artificial_intelligence.png";
export const AiDevelopment = (prop) => {
  return (
    <>
      <Hero
        heroImg={breadcumb}
        heroHeading="AI Development"
        heroDetails=" Machines that can perform tasks that typically require human intelligence.."
      />
      <Introduction
        IntroHeading="Introduction"
        IntroDetails=" Empower your business with AI! Streamline processes, improve decision-making, and provide personalized experiences for customers. Our AI solutions enhance efficiency, increase profitability, and drive innovation. Experience the benefits of AI today! "
      />

      <WhyItMatters
        Img={artificial_intelligence}
        Heading="AI Matters"
        Heading2="AI can improve efficiency and productivity.
        AI can help businesses make better decision"
        Details="Harness the power of artificial intelligence (AI) to boost your business! With AI, you can streamline processes, improve decision-making, and provide personalized experiences for your customers. Our AI solutions are designed to enhance efficiency, increase profitability, and drive innovation in your organization. Experience the benefits of AI today and take your business to the next level!"
        Heading3="enhance safety in hazardous environments"
        Card1="AI can support innovation"
        Card2="reduce costs and increase profitability."
        Card3="enhance accuracy and precision in tasks."
      />
    </>
  );
};
