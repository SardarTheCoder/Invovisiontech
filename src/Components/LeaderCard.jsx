import React from "react";
export default function LeaderCard(props) {
  return (
    <>
      <div className="mx-auto group image text-center   w-[320px] h-[390px] relative rounded-tl-3xl rounded-br-3xl overflow-hidden">
        <img
          src={props.img}
          className=" image__img  mx-auto   absolute block  w-full h-full   "
        />

        <div className="  absolute mt-2  skew2 text-center top-[322px] w-full  text-white group-hover:hidden">
          <p className="absolute image__discription  mx-auto text-sm text-left font-bold text-white  top-[20px] ">
            {props.name}
          </p>
        </div>
        <div className="absolute w-full h-full bg-sky-500 opacity-80 top-full group-hover:top-0 transition-all   duration-300">
          <p className=" absolute top-1/4 left-5 text-center text-xl  font-bold text-white">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}
