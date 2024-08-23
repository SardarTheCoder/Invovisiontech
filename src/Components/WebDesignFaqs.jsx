import React, { useState } from "react";

export default function WebDesignFaqs() {
  const [showParagraph, setShowParagraph] = useState(false);
  const clickHandle = () => {
    setShowParagraph(!showParagraph); // toggle the value of showParagraph
  };

  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280] mx-auto py-6">
          <div className="mx-6">
            <h1 className=" text-2xl font-bold my-12">Web Development</h1>
            <div className="border rounded shadow-xl   mt-6">
              <div className="group flex items-center">
                <span
                  class="  border rounded-b-2xl border-t-0  flex  items-center
               justify-center border-b-4  border-sky-500 border-x-0  mx-2 w-5 py-1  px-4  text-sky-700  badge"
                >
                  1
                </span>
                <p
                  className=" px-2  md:text-xl cursor-pointer text-lg hover:corser group-hover:text-sky-700 py-6"
                  onClick={clickHandle}
                >
                  Which niche of web designing you guys are expert in?
                </p>
              </div>
              {showParagraph && (
                <div className="  py-6  lg:text-xl text-sm mb-4  px-12 transition-transform duration-1000 transform -translate-y-[-12px]">
                  <p>
                    Our team of creative web designers can design the websites
                    of almost every niche. From IT, blogging, eCommerce,
                    medicines, sports, fashion, government, business, and
                    gaming, we cover it all. AND MUCH MORE.
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
