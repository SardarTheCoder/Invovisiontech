import React from "react";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { GrClose } from "react-icons/gr";

export const QuoteForm = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  const [name, setName] = useState();
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState(false);
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [service, setService] = useState();
  const [message, setMessage] = useState();
  const [sent, setSent] = useState(false);
  const handelName = (e) => {
    let name = e.target.value;
    setName(name);
    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const handelEmail = (e) => {
    let email = e.target.value;
    setEmail(email);
    if (!email.match(regex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const handelService = (e) => {
    let service = e.target.value;
    setService(service);
  };

  const handelMessage = (e) => {
    let message = e.target.value;
    setMessage(message);
  };
  const handelSubmit = (e) => {
    e.preventDefault();

    let name = e.target.name.value;

    if (name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    let email = e.target.email.value;

    if (!email.match(regex)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (name.length > 3 && email.match(regex)) {
      setSent(true);
    }
  };

  return (
    <div className="fixed  z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={onClose}
          ></div>
        </div>

        <div className="absolute  flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-xl transform transition-all lg:h-[600px] w-3/5">
          <GrClose
            className="absolute top-5 right-5  cursor-pointer   z-10"
            onClick={onClose}
          />
          <div className=" w-full lg:w-2/5 lg:h-full bg-sky-700 px-10 lg:py-10 ">
            <h3 className="font-bold text-white text-3xl">Request A Quote</h3>
            <p className="text-white py-5">
              Share all the necessary details and nitty gritties about your
              idea, for better understanding.
            </p>
            <div className="lg:mt-[200px]">
              <ul className="text-white text-sm">
                <li className="flex hover:border-l-[4px] border-orange-500 hover:text-orange-500 h-4 my-5">
                  <a
                    href="tel:+923455237716"
                    className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    <BsFillTelephoneFill />
                    &nbsp; +923455237716
                  </a>
                </li>
                <li className="hover:border-l-[4px] border-orange-500 hover:text-orange-500 h-4 my-5">
                  <a
                    href="mailto:macrosoartechnologies@gmail.com"
                    className="flex  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    <MdEmail />
                    &nbsp; info@invovision.io
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-3/5 lg:h-full py-10 px-5 overflow-y-auto ">
            <form onSubmit={handelSubmit}>
              <div className="lex flex-col lg:flex-row gap-5">
                <div className="flex flex-col">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handelName}
                    placeholder="Full Name"
                    className="mt-2 border-[1px] focus:border-orange-blue-500 outline-none focus:ring-2 p-2"
                  />
                  {nameError && (
                    <p className="text-sm text-red-500 py-3">
                      Name must be more than 3!
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handelEmail}
                    placeholder="Email"
                    className="mt-2 border-[1px] focus:border-orange-blue-500 outline-none focus:ring-2 p-2"
                  />
                </div>
                {emailError && (
                  <p className="text-sm text-red-500 py-3">
                    please enter a vailed email!
                  </p>
                )}
              </div>
              <div className=" py-5">
                <label>Please Select Service (optional)</label>
                <select
                  name="service"
                  value={service}
                  onChange={handelService}
                  defaultValue="Select"
                  className="w-full  p-3 mt-2  border-[1px] focus:border-orange-blue-500 outline-none focus:ring-2"
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
                  className="w-full  p-3 mt-2  border-[1px] focus:border-orange-blue-500 outline-none focus:ring-2"
                ></textarea>
              </div>
              <div>
                <input
                  type="submit"
                  value="Send A Request"
                  className=" font-medium px-10  bg-gradient-to-r text-white  from-cyan-200 to-blue-500 hover:bg-gradient-to-l p-3   "
                />
                {sent && (
                  <div className="macrosoar_bg_darkblue rounded-2xl my-3">
                    <p className="text-center text-sm text-white py-3">
                      Your Qoute Resquest Recieved Succesfully! We will GetBack
                      To You Soon
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
