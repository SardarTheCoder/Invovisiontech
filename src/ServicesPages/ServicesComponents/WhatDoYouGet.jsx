import { TiTick } from "react-icons/ti";
export const WhatDoYouGet = (props) => {
  return (
    <div className="w-full bg-blue-50">
      <div className="max-w-[1280] mx-auto px-6 py-12">
        <h2 style={{color:'#1c57a6'}} className="text-center text-2xl lg:text-4xl font-bold">
          {props.Heading}
        </h2>

        <p></p>
        <div className="gap-12 flex flex-col sm:flex-row       py-10">
          <div className="sm:w-3/6">
            <h4 style={{color:'#1c57a6'}} className="lg:text-2xl  font-bold pt-10 flex">
              <span className="text-sky-500">
                <TiTick style={{color:'#1c57a6'}} />
              </span>
              &nbsp; {props.List1}
            </h4>
            <p className="text-sm py-3">{props.List1Details}</p>

            <h4 style={{color:'#1c57a6'}} className="lg:text-2xl  font-bold pt-10 flex">
              <span className="text-sky-500">
                <TiTick style={{color:'#1c57a6'}} />
              </span>
              &nbsp; {props.List2}
            </h4>
            <p className="text-sm py-3">{props.List2Details}</p>
            <h4 style={{color:'#1c57a6'}} className="lg:text-2xl  font-bold pt-10 flex">
              <span className="text-sky-500">
                <TiTick style={{color:'#1c57a6'}} />
              </span>
              &nbsp; {props.List3}
            </h4>
            <p className="text-sm py-3">{props.List3Details}</p>
          </div>
          <div className="sm:w-2/5">
            <img src={props.Img} alt={props.Img} />
          </div>
        </div>
      </div>
    </div>
  );
};
