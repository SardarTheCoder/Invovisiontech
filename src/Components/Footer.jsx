import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { color } from "framer-motion";
export const Footer = () => {
  return (
    <>
     

<div style={{ background: 'linear-gradient(to left,#1c57a6,#4db3ff, #1c57a6,  #4db3ff)' }} className="w-full">
        <div className="max-w-[1280px] mx-auto px-6 h-full">
          <div className="gap-5  sm:flex">
            <div className="w-2/2 sm:w-2/5  py-4">
              <div className="border-b-[1px] w-2/2 sm:w-1/2 py-5 ">
                <h4 className="text-white text-xl ">Invovision</h4>
              </div>
              <p className="text-slate-200 text-sm py-5">
                Invovision is a web and e-store development company focused on
                creating reliable digital solutions that steer your business
                towards sustainable growth. Although providing you a significant
                solution is, undoubtedly, our top priority, it isn’t the only
                on.
              </p>
              <div className="border-b-[1px] w-2/2 sm:w-1/2 py-5 ">
                <h4 className="text-white text-xl ">Our Products</h4>
              </div>

              <ul  className=" text-sm text-slate-200 py-5">
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <a
                    href="http://invofy.store"
                    target="_blank"
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    invofy.store
                  </a>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4">
                  <a
                    href="https://quaalz.com/"
                    target="_blank"
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Quaalz
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-2/2 sm:w-1/5 py-4">
              <div className="border-b-[1px] w-2/2 sm:w-1/2 py-5 ">
                <h4 className="text-white text-xl ">Company</h4>
              </div>

              <ul className=" text-sm text-slate-100 py-5">
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-500 h-4 my-5">
                  <Link
                    to="about-us"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    About Us
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="faqs"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="our-team"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Our Team
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="careers"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Careers
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="contact-us"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-2/2 sm:w-2/6 py-4">
              <div className="border-b-[1px] 2/2 sm:w-1/2 py-5 ">
                <h4 className="text-white text-xl ">Our Services</h4>
              </div>

              <ul className=" text-sm text-slate-100 py-5">
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="aap-development"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                   App Development
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="paid-advertising"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="social-media-marketing"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="e-commerce-dvelopment"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    E-Commerce Development
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="search-engine-optimization"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <Link
                    to="costum-website-development"
                    onClick={() => scrollTo(0, 0)}
                    className="inline-block  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    Website Development
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-2/2 sm:w-3/6 py-4">
              <div className="border-b-[1px] w-1/2 py-5 ">
                <h4 className="text-white text-xl ">Our Contacts</h4>
              </div>

              <ul className=" text-sm text-slate-100 py-5">
                <li className="flex hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <a
                    href="tel:051-573-008-8"
                    className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    <BsFillTelephoneFill />
                    &nbsp; 051-6125234
                  </a>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <a
                    href="mailto:info@ebridge.com.pk"
                    className="flex  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    <MdEmail />
                    &nbsp; info@invovision.io
                  </a>
                </li>
                <li className="hover:border-l-[4px] border-sky-500 hover:text-sky-100 h-4 my-5">
                  <a
                    href="services"
                    className="flex  transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                  >
                    <MdLocationOn />
                    &nbsp; Office #202,2nd floor,Ghousia Plaza,Jinnah Avenue,Blue Area,Islamabad
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="mx-auto max-w-[1280px] px-6 flex  flex-col sm:flex-row justify justify-between py-3">
          <div>
            <p className="">
              Copyright © 2023 &nbsp;
              <a href="https://invovision.io/" className="text-sky-500">
                Invovision
              </a>
              &nbsp; All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-5 text-sm">
            <a
              href="https://invovision.io/"
              className="hover:text-sky-500"
            >
              Privacy Policy
            </a>
            <a
              href="https://invovision.io/"
              className="hover:text-sky-500"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
