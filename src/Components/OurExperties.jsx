import { ExpertiesCard } from "./ExpertiesCard";
import e1 from "../assets/react.png";
import e2 from "../assets/e4.png";
import e3 from "../assets/laravel.png";
import e4 from "../assets/nextjs.png";
import e5 from "../assets/e5.png";

const bounceUpDown = `
  @keyframes bounceUpDown {
    0%, 100% { transform: translateY(-10px); }
    0%, 100% { transform: translatex(-15px); }
    50% { transform: translateY( 10px); }
    50% { transform: translatex( 10px); }
  }
`;

export const OurExperties = () => {
  return (
    <>
      <style>
        {bounceUpDown}
      </style>
      <div className="w-full font-bold">
        <div className="max-w-[1280px] mx-auto px-6 py-[100px]">
          <div className="flex flex-col justify-content item-center mx-auto w-3/4">
            <h1 style={{ color: '#1c57a6' }} className="text-4xl mt-12 italic lg:text-4xl text-center font-bold">
              Our Expertise
            </h1>
            <p className="text-sm md:text-xl text-center leading-10 py-12">
              We possess proficiency in these leading development platforms
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-[url(./assets/background.jpg)]">
        <div className="mx-w[1200] mx-auto px-6">
          <div className="md:flex md:flex-row flex-col">
            <div className="md:w-3/5">
              <ExpertiesCard
                imgsrc={e1}
                cardheading="React js"
                carddetail="React.js has been adopted by thousands of developers and businesses, enabling them to create seamless and highly interactive content and experiences across the web."
              />
              <ExpertiesCard
                imgsrc={e2}
                cardheading="Wordpress"
                carddetail="With WordPress, anyone can create a stunning website, from personal blogs to full-fledged eCommerce sites, without writing a single line of code."
              />
              <ExpertiesCard
                imgsrc={e3}
                cardheading="Laravel"
                carddetail="Laravel is the PHP framework that empowers developers to build modern, robust applications with elegance and simplicity."
              />
              <ExpertiesCard
                imgsrc={e4}
                cardheading="Next js"
                carddetail="Next.js is the React framework that brings server-side rendering, static site generation, and dynamic routing together for blazing-fast web applications."
              />
            </div>
            <div className="md:w-2/5 flex items-center justify-center">
              <img 
                src={e5} 
                alt="Expertise Image" 
                style={{
                  animation: 'bounceUpDown 3s infinite'
                }} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

