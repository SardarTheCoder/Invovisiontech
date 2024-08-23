export const WidthCard = (props) => {
  return (
    <>
      <div className="w-[350px] h-[300px] lg:w-[500px] lg:h-[250px] xl:w-[600px]  border-2 border-sky-100  bg-white flex  justify-content item-center mx-auto relative ">
        <div className="absolute px-6">
          <h3 style={{color:'#1c57a6'}} className="text-center text-xl font-bold py-5">
            {props.cardHeading}{" "}
          </h3>
          <p className="text-center   ">{props.cardText}</p>
        </div>
      </div>
    </>
  );
};
