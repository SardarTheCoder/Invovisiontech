import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import welcome from '../assets/welcome.png';
import { Link } from 'react-router-dom';
import home_bg_cover from '../assets/home_bg_cover.jpg';

export const HomeHero = () => {
  useEffect(() => {
    // GSAP animation for the image to move up and down
    gsap.to('.welcome-image', {
      y: '20%', // Adjust this value to control the distance of movement
      repeat:Infinity, // Infinite repeat
      yoyo: true, // Alternate between up and down
      duration: 4, // Duration of one complete cycle
      ease: 'power1.inOut' // Easing function
    });
  }, []);

  return (
    <div
      className="w-full text-white"
      style={{
        backgroundImage: `linear-gradient(
          rgba(28, 87, 166, 0.9),
          rgba(43, 173, 226, 0.9),
          rgba(38, 144, 206, 1),
          rgba(28, 87, 166, 1)
        ), url(${home_bg_cover})`,
        height: 'auto',
        width: 'auto',
        position: 'relative', // To position child elements absolutely
        overflow: 'hidden',  // To hide any overflow from animation
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="flex flex-col-reverse sm:flex-row gap-24 py-10">
          <div className="w-full sm:w-3/5">
            <h1 className="text-2xl lg:text-6xl italic font-bold">
              Innovative IT Solutions Crafted for Your Business
            </h1>
            <p className="text-base md:text-lg py-10 leading-8">
              Invovision is a leading Software house in Islamabad providing
              custom IT solutions to businesses of all niches. Our
              result-oriented approach helps companies become brands, realize
              their vision, and achieve their goals. Get Free Quote
            </p>
            <Link to="contact-us">
              <button className="bg-gradient-to-r italic from-cyan-200 to-blue-500 hover:bg-gradient-to-l py-3 px-8 text-lg font-bold">
                Get Free Quote
              </button>
            </Link>
          </div>
          <div className="w-full sm:w-2/5 relative">
            <motion.img
              src={welcome}
              alt="welcome"
              className="welcome-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }} // Fade-in effect with 1-second delay
            />
          </div>
        </div>
      </div>
    </div>
  );
};
