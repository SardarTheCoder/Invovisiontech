import "../App.css";

// ......................................

export function ExpertiesCard(props) {
  return (
    <>
      <div style={{background:'#2bade2'}} className="flex text-white card items-center hover:drop-shadow-xl  border rounded-2xl w-full mx-auto pl-2	lg:w-4/5 m-5   ">
        <img src={props.imgsrc} alt="image" className="  w-20 h-16 mt-2  " />
        <div className=" flex flex-col ">
          <h1 className="text-2xl pl-4 font-bold pt-5 heading font-serif">
            {props.cardheading}
          </h1>

          <p className="flex  mx-4 font-bold text-sm lg:font-thin pt-4 pb-6 px-2 leading-6 text-gray-100 ">
            {props.carddetail}
          </p>
        </div>
      </div>
    </>
  );
}
