import { Link } from "react-router-dom";
import { useState } from "react";
import { WeAreTheBest } from "./WeAreTheBest";
import { OurAffiliations } from "./OurAffiliations";
import { OurAchievements } from "./OurAchievements";
import { WorkFlow } from "./WorkFlow";

export const ReasonsToChooseUs = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <div className="w-full mt-10">
        <div className="max-w-[1280px] mx-auto px-6 py-[50px]">
          <div className="flex flex-col justify-content item-center mx-auto sm:w-2/4  ">
            <h1 style={{color:'#1c57a6'}} className="text-2xl lg:text-4xl text-center font-bold">
              Reasons To Choose Invovision!
            </h1>
            <p className=" text-sm md:text-xl text-center leading-10 py-12">
              People we work with and projects we work on are our identity and
              we showcase them as a badge of honor. These are the things that
              make Invovision the best software house in Islamabad, Pakistan.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="max-w-[1280px] mx-auto py-10">
            <ul className="border-b-2 grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center">
              <li
                className={`cursor-pointer py-5 mx-auto text-lg font-bold border-b-2 ${
                  activeLink === 0
                    ? "border-sky-500 text-sky-700"
                    : "border-transparent"
                } hover:border-sky-500 hover:text-sky-700`}
                onClick={() => handleClick(0)}
              >
                We are the Best
              </li>
              <li
                className={`cursor-pointer py-5 mx-auto text-lg font-bold border-b-2 ${
                  activeLink === 1
                    ? "border-sky-500 text-sky-700"
                    : "border-transparent"
                } hover:border-sky-500 hover:text-sky-700`}
                onClick={() => handleClick(1)}
              >
                Our Affiliations
              </li>
              <li
                className={`cursor-pointer py-5 mx-auto text-lg font-bold border-b-2 ${
                  activeLink === 2
                    ? "border-sky-500 text-sky-700"
                    : "border-transparent"
                } hover:border-sky-500 hover:text-sky-700`}
                onClick={() => handleClick(2)}
              >
                Our Achievements
              </li>
              <li
                className={`cursor-pointer font-bold py-5 mx-auto text-lg border-b-2 ${
                  activeLink === 3
                    ? "border-sky-500 text-sky-700"
                    : "border-transparent"
                } hover:border-sky-500 hover:text-sky-700`}
                onClick={() => handleClick(3)}
              >
                Work Flow
              </li>
            </ul>
          </div>
        </div>
      </div>
      {activeLink === 0 && <WeAreTheBest />}
      {activeLink === 1 && <OurAffiliations />}
      {activeLink === 2 && <OurAchievements />}
      {activeLink === 3 && <WorkFlow />}
    </>
  );
};
