import service from "../assets/service.jpg";
import success_summary_img1_1 from "../assets/success_summary_img1_1.png";
import { Hero } from "../Components/Hero";
import { Introduction } from "../Components/Introduction";

const bounceUpDown = `
  @keyframes bounceUpDown {
    0%, 100% { transform: translateY(-10px); }
    50% { transform: translateY(10px); }
  }
`;

export const Services = () => {
  return (
    <>
      <style>
        {bounceUpDown}
      </style>
      <Hero heroImg={service} heroHeading="Contact Us" />
      <Introduction
        IntroHeading="A First Impression Is The Only Impression. Your Partner In Effectual Development."
        IntroDetails="We offer a range of website development, ecommerce website development and SEO services tailored to encompass your marketing goals and captivate your target audience. Get a custom solution that actually meets your end-user’s needs"
      />

      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="gap-12 flex flex-col sm:flex-row py-10">
            <div className="sm:w-2/5">
              <img 
                src={success_summary_img1_1} 
                alt="Success Summary" 
                style={{ animation: 'bounceUpDown 2s infinite' }} // Apply the bounce animation
              />
            </div>
            <div className="sm:w-3/6 sm:mt-[100px]">
              <h2 className="text-center text-2xl lg:text-4xl font-bold">
                Build A Futuristic Digital Presence
              </h2>
              <p className="text-xl text-center py-10">
                Though we are still beginning our journey, it is never too early
                to identify and implement what we need to do to guarantee
                engaging results demanding everlasting impacts. Our teams
                concentrate on feature-packed digitally transformative solutions
                that are responsive with full intuitive functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
