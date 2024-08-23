import React, { useState } from "react";

export default function WebDevelopmentFaqs() {
  const [showParagraph, setShowParagraph] = useState(false);
  const clickHandle = () => {
    setShowParagraph(!showParagraph); // toggle the value of showParagraph
  };
  const [index, setIndex] = useState(false);
  const clickHandle2 = () => {
    setIndex(!index); // toggle the value of showParagraph
  };
  const [state, setState] = useState(false);
  const clickHandle3 = () => {
    setState(!state); // toggle the value of showParagraph
  };
  return (
    <>
      <div className="w-full">
        <div className="max-w-[1280] mx-auto py-6">
          <div className="mx-6">
            <h1 className=" text-2xl font-bold hover:pointer my-12">
              Web Development
            </h1>
            <div className="  border rounded shadow-xl  mt-6">
              <div className=" group flex items-center">
                <span
                  class="   border rounded-b-2xl border-t-0  flex  items-center
               justify-center border-b-4  border-sky-500 border-x-0  mx-2 w-5 py-1  px-4  text-sky-500 badge"
                >
                  1
                </span>
                <p
                  className=" px-2 inline-block cursor-pointer  md:text-xl text-lg hover:corser  group-hover:text-sky-500 py-6"
                  onClick={clickHandle}
                >
                  Can you help in upgrading the existing website?
                </p>
              </div>
              {showParagraph && (
                <div className="px-12 py-6  lg:text-xl text-sm mb-4   ">
                  <p>
                    YES, we welcome all kinds of projects. We can help you to
                    update your existing website, remove errors in the existing
                    website, add/edit new features in the website.
                  </p>
                </div>
              )}
              <div className="  border  border-dotted border-sky-200"></div>
              <div className=" group flex items-center">
                <span
                  class=" border rounded-b-2xl border-t-0  flex  items-center
               justify-center border-b-4  border-sky-500 border-x-0  mx-2 w-5 py-1  px-4 text-sky-500  badge"
                >
                  2
                </span>
                <p
                  className="px-2 inline-block  md:text-xl cursor-pointer text-lg hover:corser  group-hover:text-sky-500 py-6"
                  onClick={clickHandle2}
                >
                  How much does it cost to create a website?
                </p>
              </div>
              {index && (
                <div className=" py-6  lg:text-xl text-sm mb-4   px-12">
                  <p>
                    Price is never fixed since it depends upon scope of the
                    project. We charge as per the features and work-load of the
                    project. AND of course we give discount on availing multiple
                    services.
                  </p>
                </div>
              )}
              <div className="border  border-dotted   border-sky-200"></div>
              <div className="group flex items-center">
                <span
                  class="nline-block border rounded-b-2xl border-t-0  flex  items-center
               justify-center border-b-4  border-sky-500 border-x-0  mx-2 w-5 py-1  px-4 text-sky-500  badge"
                >
                  3
                </span>
                <p
                  className=" px-2 inline-block  md:text-xl cursor-pointer text-lg hover:corser group-hover:text-sky-500 py-6"
                  onClick={clickHandle3}
                >
                  How much time does it take to develop a website from scratch?
                </p>
              </div>
              {state && (
                <div className=" py-6 lg:text-xl   text-sm mb-4 px-12  border-sky-200">
                  <p>
                    Completion time differs from website to website. But we
                    mutually decide the turn around time with the clients, prior
                    to starting the project.
                  </p>
                </div>
              )}
              <div className="border w-full border-dotted   border-sky-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
