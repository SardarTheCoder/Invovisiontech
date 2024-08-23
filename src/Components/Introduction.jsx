import { Link } from "react-router-dom";

export const Introduction = (props) => {
  return (
    <>
      <div className="w-full ">
        <div className="max-w-[1280] px-6 mx-auto">
          <div className="  text-center mt-20 w-full sm:w-3/4 mx-auto ">
            <h1 className="text-2xl lg:text-6xl text-center font-bold">
              {props.IntroHeading}
            </h1>
            <p className=" text-sm md:text-xl text-center leading-10 py-12">
              {props.IntroDetails}
            </p>
            <Link to="/contact-us" onClick={() => scrollTo(0, 0)}>
              <button className=" m-6 lg:text-xl text-lg h-11 my-4 text-white sm:px-10 md:w-1/5 w-3/6  bg-gradient-to-r from-cyan-200 to-blue-500 hover:bg-gradient-to-l   ">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
