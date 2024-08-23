import { TallCard } from "../ServicesComponents/TallCard.jsx";
export const CostumPHandCMHdevelopment = (props) => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280] mx-auto px-6 py-[70px]">
          <div className="mx-auto w-3/4">
            <h3 style={{color:'#1c57a6'}} className="text-center text-4xl font-bold">{props.Heading}</h3>
            <p className="text-center py-10">{props.Details}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 ">
            <TallCard
              cardHeading={props.Card1Heading}
              cardText={props.Card1Details}
              cardList={props.Card1List}
              cardImg={props.Card1Img}
            />
            <TallCard
              cardHeading={props.Card2Heading}
              cardText={props.Card2Details}
              cardList={props.Card2List}
              cardImg={props.Card2Img}
            />
            <TallCard
              cardHeading={props.Card3Heading}
              cardText={props.Card3Details}
              cardList={props.Card3List}
              cardImg={props.Card3Img}
            />
          </div>
        </div>
      </div>
    </>
  );
};
