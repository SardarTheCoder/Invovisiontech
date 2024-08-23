import { Link } from "react-router-dom";
export const PortfolioCard = (props) => {
  return (
    <>
      <div className="xl:w-[550px] xl:h-[300px] lg:w-[500px] lg:h-[280px] w-[390px] h-[250px] relative bg-gray-500 group mx-auto">
        <img
          src={props.portfolioImg}
          alt={props.PortfolioImg}
          className="absolute group-hover:opacity-20   h-full w-full "
        />
        <div className="flex flex-col justify-center items-center invisible group-hover:visible absolute left-1/3 top-1/3 ">
          <h4 className=" text-xl text-white py-2">{props.portfolioTitle}</h4>
          <Link to={props.portfolioLink}>
            <button
              onClick={() => scrollTo(0, 0)}
              className="bg-gradient-to-r from-cyan-200 to-blue-500 hover:bg-gradient-to-l  py-3 px-10 "
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
