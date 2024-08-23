import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import ebridgelogo from "../assets/IT_logo-01.png";
import { GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { Footer } from "../Components/Footer";
import { SocialContacts } from "../Components/SocialContacts";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const handleClick = (index) => {
    setActiveLink(index);
  };
  return (
    <>
      <nav className="w-full font-serif font-bold italic ">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex justify-between items-center ">
            <div className="mb-2">
              <Link to="/">
                <img
                  src={ebridgelogo}
                  className="mt-4 cursor-pointer w-28"
                />
              </Link>
            </div>

            <div className="flex flex-col ">
              {/* Hamburger icon */}
              <div
                className={`  md:hidden ${
                  isNavVisible ? "fixed" : "absolute"
                }  right-[50px] top-5  flex justify-center items-center z-10`}
              >
                <button className="" onClick={toggleNav}>
                  {isNavVisible ? <GrClose /> : <RxHamburgerMenu />}
                </button>
              </div>

              {/* Navbar links */}
              <ul className="hidden md:flex flex-row text-xl">
                <li
                  className={`p-5 hover:text-sky-800 ${
                    activeLink === 0 ? "text-sky-700" : ""
                  }`}
                  onClick={() => handleClick(0)}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`p-5 hover:text-sky-700 ${
                    activeLink === 1 ? "text-sky-700" : ""
                  }`}
                  onClick={() => handleClick(1)}
                >
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="relative group p-5 ">
                  <Link
                    to="/services"
                    className={`p-5 hover:text-sky-700 ${
                      activeLink === 2 ? "text-sky-700" : ""
                    }`}
                    onClick={() => handleClick(2)}
                  >
                    Services <span className="text-[10px]">&nbsp;▼</span>
                  </Link>
                  <div className="absolute z-10 hidden group-hover:block bg-white w-[250px] navbarShadow">
                    <ul className="text-[15px] font-medium">
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="aap-development"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                         App Development
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="paid-advertising"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          Paid Advertising
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="social-media-marketing"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          Social Media Marketing
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="e-commerce-development"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          E-Commerce Development
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="search-engine-optimization"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          Search Engine Optimization
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="costum-website-development"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          Costum Website Optimization
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="graphics-design"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          Graphics Designing
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="cyber-security"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          Cyber Security
                        </Link>
                      </li>

                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="ai-development"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          AI Development
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="arvr_app_development"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          AR/VR App Developent
                        </Link>
                      </li>
                      <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                        <Link
                          to="blockchain_development"
                          className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                        >
                          Blockchain Developent
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  className={`p-5 hover:text-sky-700 ${
                    activeLink === 3 ? "text-sky-700" : ""
                  }`}
                  onClick={() => handleClick(3)}
                >
                  <Link to="portfolio">Portfolio</Link>
                </li>
                <li
                  className={`p-5 hover:text-sky-700 ${
                    activeLink === 4 ? "text-sky-700" : ""
                  }`}
                  onClick={() => handleClick(4)}
                >
                  <Link to="our-team">Our Team</Link>
                </li>
                <li
                  className={`p-5 hover:text-sky-700 ${
                    activeLink === 5 ? "text-sky-700" : ""
                  }`}
                  onClick={() => handleClick(5)}
                >
                  <Link to="contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden ">
            {/* Navbar mobile */}
            <ul
            
              className={`fixed top-0 right-0 h-screen w-3/5 transform ${
                isNavVisible
                  ? "translate-x-0 shadow-black shadow-2xl"
                  : "translate-x-full"
              } transition duration-500 ease-in-out md:hidden text-xl bg-white  `}
            >
              <li className="p-5 border-b-2  border-sky-500 hover:text-sky-700">
                <Link to="/">Home</Link>
              </li>
              <li className="p-5 border-b-2  border-sky-500 hover:text-sky-700 ">
                <Link to="about-us">About Us</Link>
              </li>
              <li className="relative group p-5 ">
                <Link to="services" className="hover:text-sky-700">
                  Services <span className="text-[10px]">&nbsp;▼</span>
                </Link>
                <div className="absolute z-10 hidden group-hover:block bg-white w-[250px] navbarShadow">
                  <ul className="text-[15px] font-medium">
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="website-design"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Website Design
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="paid-advertising"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Paid Advertising
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="social-media-marketing"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Social Media Marketing
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="e-commerce-development"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        E-Commerce Development
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="search-engine-optimization"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Search Engine Optimization
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="costum-website-dvelopment"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Costum Website Optimization
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="graphics-design"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Graphics Designing
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="cyber-security"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Cyber Security
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="ai-developmen"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        AI Development
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="arvr_app_development"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        AR/VR App Development
                      </Link>
                    </li>
                    <li className="px-4 mb-4 hover:border-l-[4px] border-sky-500 hover:text-sky-700 ">
                      <Link
                        to="blockchain_development"
                        className="flex transition-transform duration-300 ease-in-out transform hover:translate-x-2"
                      >
                        Blockchain Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="p-5 border-b-2 ">
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li className="p-5 border-b-2 ">
                <Link to="our-team">Our Team</Link>
              </li>
              <li className="p-5">
                <Link to="contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SocialContacts />
      <Outlet />
      <Footer />
    </>
  );
};
export default Navbar;
