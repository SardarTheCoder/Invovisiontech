import { WidthCard } from "../ServicesComponents/WidthCard.jsx";
export const DevelopmentService = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280] mx-auto px-6 py-[70px]">
          <h2 style={{color:'#1c57a6'}} className="text-center text-2xl lg:text-4xl font-bold">
            {props.Heading}
          </h2>
          <p className="text-center py-5">{props.Details}</p>
          <div className="gap-10 grid grid-cols-1  md:grid-cols-2 py-14  ">
            <WidthCard
              cardHeading={props.Card1Heading}
              cardText={props.Card1Details}
            />
            <WidthCard
              cardHeading={props.Card2Heading}
              cardText={props.Card2Details}
            />
          </div>
        </div>
      </div>
    </>
  );
};
