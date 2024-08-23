import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export const QuoteForm = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed  z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={onClose}
          ></div>
        </div>

        <div className="absolute  flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-xl transform transition-all lg:h-[500px] w-3/5">
          <GrClose
            className="absolute top-5 right-5  cursor-pointer   z-10"
            onClick={onClose}
          />
          <div className=" w-full lg:w-2/5 lg:h-full bg-blue-700 px-10 lg:py-10 ">
            <h3 className="font-bold text-white text-3xl">Request A Quote</h3>
            <p className="text-white py-5">
              Share all the necessary details and nitty gritties about your
              idea, for better understanding.
            </p>
            <div className="lg:mt-[200px]">
              <ul className="text-white text-sm">
                <li className="flex hover:border-l-[4px] border-sky-500 hover:text-sky-500 h-4 my-5">
                  <a
                    href="tel:051-573-008-8"
                    className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    <BsFillTelephoneFill />
                    &nbsp; 051-573-008-8
                  </a>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-500 h-4 my-5">
                  <a
                    href="mailto:info@ebridge.com.pk"
                    className="flex  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    <MdEmail />
                    &nbsp; info@ebridge.com.pk
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-3/5 lg:h-full py-10 px-5 ">
            <form>
              <div className="lex flex-col lg:flex-row gap-5">
                <div className="flex flex-col">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="mt-2 border-[1px] focus:border-sky-blue-500 outline-none focus:ring-2 p-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="mt-2 border-[1px] focus:border-sky-blue-500 outline-none focus:ring-2 p-2"
                  />
                </div>
              </div>
              <div className=" py-5">
                <label>Please Select Service (optional)</label>
                <select
                  defaultValue="Select"
                  className="w-full  p-3 mt-2  border-[1px] focus:border-sky-blue-500 outline-none focus:ring-2"
                >
                  <option value="">--Please Select an Option--</option>
                  <option value="web-design">Web Design</option>
                  <option value="costum-website-development">
                    Costum Website Development
                  </option>
                  <option value="e-commerce-development">
                    E-Commerce Development
                  </option>
                  <option value="paid-advertising">Paid Advertising</option>
                  <option value="social-media-marketing">
                    Social Media Marketing
                  </option>
                </select>
              </div>
              <div className=" ">
                <label>Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="3"
                  className="w-full  p-3 mt-2  border-[1px] focus:border-sky-blue-500 outline-none focus:ring-2"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send A Request"
                className="text-white font-medium px-10 bg-gradient-to-r  from-cyan-200 to-blue-500 hover:bg-gradient-to-l p-3   "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
