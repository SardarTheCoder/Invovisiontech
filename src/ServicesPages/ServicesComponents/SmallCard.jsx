export const SmallCard = (props) => {
  return (
    <>
      <div className="w-[162px] h-[150px] shadow hover:shadow-2xl  bg-white flex  justify-content item-center mx-auto relative group">
        <p className="text-center  py-10 font-medium group-hover:text-sky-500 left-3 absolute ">
          {props.cardText}
        </p>
      </div>
    </>
  );
};
