import { BigCard } from "./BigCard.jsx";
export const WhatDoWeDo = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280] mx-auto px-6">
          <h2 style={{color:'#1c57a6'}} className="text-center text-2xl lg:text-4xl font-bold">
            {props.Heading}
          </h2>
          <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-14  ">
            <BigCard
              cardHeading={props.Card1Heading}
              cardText={props.Card1Details}
            />
            <BigCard
              cardHeading={props.Card2Heading}
              cardText={props.Card2Details}
            />
            <BigCard
              cardHeading={props.Card3Heading}
              cardText={props.Card3Details}
            />
            <BigCard
              cardHeading={props.Card4Heading}
              cardText={props.Card4Details}
            />
            <BigCard
              cardHeading={props.Card5Heading}
              cardText={props.Card5Details}
            />
            <BigCard
              cardHeading={props.Card6Heading}
              cardText={props.Card6Details}
            />
          </div>
        </div>
      </div>
    </>
  );
};
