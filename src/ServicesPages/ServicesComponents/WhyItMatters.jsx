import { SmallCard } from "../ServicesComponents/SmallCard.jsx";

const bounceUpDown = `
  @keyframes bounceUpDown {
  
    0%, 100% { transform: translateY(30px); }
    50% { transform: translateY(15px); }
    50% { transform: translateX(15px); }
  }
`;

export const WhyItMatters = (props) => {
  return (
    <>
      <style>
        {bounceUpDown}
      </style>
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 style={{ color: '#1c57a6' }} className="text-center text-2xl lg:text-4xl font-bold">
            {props.Heading}
          </h2>
          <div className="gap-12 flex flex-col sm:flex-row py-10">
            <div className="sm:w-2/5">
              <img 
                src={props.Img} 
                alt="Descriptive Image" 
                style={{ animation: 'bounceUpDown 3s infinite' }} // Apply the bounce animation
              />
            </div>
            <div className="sm:w-3/6">
              <h4 style={{ color: '#1c57a6' }} className="lg:text-2xl font-bold">{props.Heading2}</h4>
              <p className="text-sm py-10">{props.Details}</p>
              <h4 style={{ color: '#1c57a6' }} className="text-2xl font-bold">{props.Heading3}</h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                <SmallCard cardText={props.Card1} />
                <SmallCard cardText={props.Card2} />
                <SmallCard cardText={props.Card3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

