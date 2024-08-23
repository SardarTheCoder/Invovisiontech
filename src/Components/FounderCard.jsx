import React from "react";
export default function FounderCard(props) {
  return (
    <>
      <div className="group image text-center my-5 mx-auto w-[250px] h-[350px] sm:w-[350px] h-[550px]  md:w-[350px] md:h-[550px] xl:w-[400px] h-[630px] relative rounded-tl-3xl rounded-br-3xl overflow-hidden">
        <img
          src={props.img}
          className=" image__img  absolute block  w-full h-full   "
        />

        <div className="  absolute skew text-center  top-[550px] w-full   text-white group-hover:hidden">
          <p className="absolute image__discription text-center  text-2xl text-left font-bold text-white bottom-[5px] top-[20px] ">
            {props.name}
          </p>
        </div>
        <div className="absolute w-full h-full bg-sky-500 opacity-80 top-full group-hover:top-0 transition-all  transition-transform duration-300">
          <p className=" absolute top-1/4 right-2/4 text-center text-xl  font-bold text-white">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}
