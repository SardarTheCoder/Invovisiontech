import { QuoteForm } from "../ServicesComponents/QuoteForm";
import { useState } from "react";
export const Introduction = (props) => {
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseModal = () => {
    setShowForm(false);
  };
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-6 py-[100px]">
          <div className="flex flex-col justify-content item-center mx-auto w-3/4  ">
            <h1 style={{color:'#1c57a6'}} className="text-2xl lg:text-6xl text-center font-bold">
              {props.IntroHeading}
            </h1>
            <p className=" text-sm md:text-xl text-center leading-10 py-12">
              {props.IntroDetails}
            </p>
            <div className="mx-auto">
              <button
                onClick={handleButtonClick}
                className="bg-gradient-to-r from-cyan-200 to-blue-500 hover:bg-gradient-to-l py-3 px-10 text-lg text-white font-bold"
              >
                Request A Quote
              </button>
            </div>
          </div>
        </div>
      </div>
      <QuoteForm show={showForm} onClose={handleCloseModal} />
    </>
  );
};
