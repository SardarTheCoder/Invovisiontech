export const BigCard = (props) => {
  return (
    <>
      <div className="w-[320px] h-[250px] shadow-2xl  bg-white flex  justify-content item-center mx-auto relative ">
        <div className="absolute px-6">
          <h3 style={{color:'#1c57a6'}} className=" text-center text-xl font-bold py-5">
            {props.cardHeading}{" "}
          </h3>
          <p className="text-center   ">{props.cardText}</p>
        </div>
      </div>
    </>
  );
};
