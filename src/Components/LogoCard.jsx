export const LogoCard = (props) => {
  return (
    <>
      <div className="w-[200px] h-[200px] shadow hover:shadow-2xl  bg-white flex  justify-content item-center mx-auto relative group">
        <img
          src={props.cardImg}
          alt={props.cardImg}
          className="absolute w-[70%] top-[30px] left-[30px]"
        />
      </div>
    </>
  );
};
