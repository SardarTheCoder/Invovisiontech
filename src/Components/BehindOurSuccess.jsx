import React from "react";
import clarity from "../assets/clarity.png";
import communication from "../assets/communication.png";
import competence from "../assets/competence.png";
import consistency from "../assets/consistency.png";
import { HexagonCard } from "./HexagonCard";

export const BehindOurSuccess = () => {
  return (
    <div className="w-full bg-slate-100 mt-24">
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="flex flex-col md:w-3/5 mx-auto">
          <h1 className="text-center italic text-5xl font-bold bg-gradient-to-r from-[#b04ce2] via-[#71deff] to-[#645fff] bg-clip-text text-transparent">
            The 4 C’s Behind Our Success
          </h1>
          <p className="text-center md:text-lg py-5">
            Our competent teams remain clear and responsive throughout the
            process promising a convincing solution with lasting impact.
          </p>
        </div>
        <div className="grid gap-y-[200px] sm:grid-cols-4 my-[130px]">
          <HexagonCard
          className="text-center"
            cardHeading="Clarity"
            CardImg={clarity}
            no="01"
            mt="mt-[100px]"
            delay={0} // No delay for the first card
          />
          <HexagonCard
            cardHeading="Communication"
            CardImg={communication}
            no="02"
            delay={1} // Half-second delay for the second card
          />
          <HexagonCard
            cardHeading="Competence"
            CardImg={competence}
            no="03"
            mt="mt-[100px]"
            delay={1.5} // One-second delay for the third card
          />
          <HexagonCard
            cardHeading="Consistency"
            CardImg={consistency}
            no="04"
            delay={2} // One and a half-second delay for the fourth card
          />
        </div>
      </div>
    </div>
  );
};

