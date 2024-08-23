import React, { useState } from "react";
// import Client from "../Client";
export default function GeneralFaqs() {
  const [showParagraph, setShowParagraph] = useState(false);
  const clickHandle = () => {
    setShowParagraph(!showParagraph); // toggle the value of showParagraph
  };
  const [index, setIndex] = useState(false);
  const clickHandle2 = () => {
    setIndex(!index); // toggle the value of showParagraph
  };

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280] mx-auto py-6">
          <div className="mx-6">
            <h1 className=" text-2xl  font-bold my-12">General</h1>
            <div className="border rounded shadow-xl  mt-6">
              <div className="flex items-center">
                <span
                  className=" inline-block border rounded-b-2xl border-t-0  flex  items-center
               justify-center border-b-4  border-sky-500 border-x-0  mx-2 w-5 py-1  px-4  text-sky-500"
                >
                  1
                </span>
                <p
                  className="lg:text-xl md:text-xl text-lg  cursor-pointer px-2  hover:text-sky-500 py-6"
                  onClick={clickHandle}
                >
                  Can a client visit your office to discuss the project?
                </p>
              </div>
              {showParagraph && (
                <div className=" py-6 lg:text-xl text-sm  mb-4 px-12 ">
                  <p>
                    We would be more than happy to discuss about your project in
                    office and have a coffee together, you are welcome to pay a
                    visit. We remain open from 10 AM to 7PM – Monday to Friday.
                    AND yes the coffee will be on us.
                  </p>
                </div>
              )}
              <div className="border  border-dotted  border-sky-200"></div>

              <div className="flex items-center">
                <span
                  class="inline-block border rounded-b-2xl border-t-0  flex  items-center
               justify-center border-b-4  border-sky-500 border-x-0  mx-2 w-5 py-1  px-4  text-sky-500"
                >
                  2
                </span>
                <p
                  className="lg:text-xl md:text-xl px-2 cursor-pointer text-lg hover:text-sky-500 py-6"
                  onClick={clickHandle2}
                >
                  Can a client visit your office to discuss the project?
                </p>
              </div>
              {index && (
                <div className="py-6 lg:text-xl  text-sm mb-4 px-12">
                  <p>
                    YES, we offer digital marketing services, more precisely we
                    are into, PPC, SEO, and Social Media Marketing. And charges
                    vary from project to project. You are welcome to get a
                    quotation by contacting us.
                  </p>
                </div>
              )}
              <div className="border  border-dotted  border-sky-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
