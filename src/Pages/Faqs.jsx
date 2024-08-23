import React, { useState, Link } from "react";
import breadcumb from "../assets/breadcumb.webp";
import { Hero } from "../Components/Hero";
import { Introduction } from "../Components/Introduction";
import GeneralFaqs from "../Components/GeneralFaqs";
import WebDevelopmentFaqs from "../Components/WebDevelopmentFaqs";


import faq_img from "../assets/faq_img.png";

export const Faqs = () => {
  const [index, SetIndex] = useState(0);
  const clickHandle = (ind) => {
    SetIndex(ind);
  };

  return (
    <>
      <Hero heroImg={breadcumb} heroHeading="About Us" />
      <Introduction
        IntroHeading="  Frequently Asked Questions"
        IntroDetails="Welcome to the Frequently Asked Questions area at Ebridge Technology. We are here to help and answer your queries about the products and services we offer. Browse through below FAQs to find answers to the most relevant and commonly raised questions. If you have a question that is not answered here"
      />
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto py-6">
          <div className="md:my-20  md:flex   ">
            <div className="md:w-2/5 mt-28  ">
              <img src={faq_img} />
            </div>
            <div className="md:w-3/5    ">
              <ul className="lg:text-lg  text-sm py-4 flex  justify-center border pb-8 border-x-0 border-t-0 ">
                <li
                  className={`cursor-pointer border w-60 mx-6  h-12  py-2 font-semibold  ${
                    index === 0 ? "text-sky-500" : ""
                  }  hover:text-sky-500 text-center 
                   rounded-tl-3xl rounded-br-3xl bg-gray-50`}
                  onClick={() => clickHandle(0)}
                >
                  General
                </li>
                <li
                  className={`cursor-pointer border w-60 mx-6  h-12  py-2 font-semibold  ${
                    index === 1 ? "text-sky-500" : ""
                  }  hover:text-sky-500 text-center 
                   rounded-tl-3xl rounded-br-3xl bg-gray-50`}
                  onClick={() => clickHandle(1)}
                >
                  App development
                </li>
                <li
                  className={`cursor-pointer border w-60 mx-6  h-12  py-2 font-semibold  ${
                    index === 2 ? "text-sky-500" : ""
                  }  hover:text-sky-500 text-center 
                   rounded-tl-3xl rounded-br-3xl bg-gray-50`}
                  onClick={() => clickHandle(2)}
                >
                  Web Development
                </li>
              </ul>

              {index === 0 && <GeneralFaqs />}
             
              {index === 2 && <WebDevelopmentFaqs />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
