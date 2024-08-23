import React from "react";
export default function TeamCard(props) {
  return (
    <>
      <div className="group image text-center mx-auto border-4 border-y-blue-800 border-x-blue-400 w-[400px] h-[400px]  sm:w-[300px] sm:h-[400px]  md:w-[200px] md:h-[250px] relative rounded-tl-3xl rounded-br-3xl overflow-hidden">
        <img
          src={props.img}
          className=" image__img  bg-black   absolute block  w-full h-full   "
        />

        <div className="  absolute mt-2  skew2 text-center  top-[230px] md:top-[200px] w-full  text-white group-hover:hidden ">
          <p className="absolute image__discription  text-center mx-auto text-sm  font-bold text-white left-[10px]  top-[20px] ">
            {props.name}
          </p>
        </div>
        <div className="absolute w-full h-full bg-sky-500 opacity-80 top-full group-hover:top-0 transition-all  duration-300">
          <p className=" absolute top-1/4 left-5 text-center text-xl  font-bold text-white">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}
