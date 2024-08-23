import React from 'react';
import { motion } from 'framer-motion';

export const HexagonCard = (props) => {
  return (
    <motion.div
      className={`relative ${props.mt} hexagon group hover:bg-blue-200 mx-auto`}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }} // Swing up and down
      transition={{
        duration: 2, // Duration of one complete cycle
        repeat: Infinity, // Repeat indefinitely
        repeatType: 'loop', // Loop the animation
        ease: 'easeInOut', // Easing function
        delay: props.delay, // Delay for staggered effect
      }}
    >
      <h2 className="text-sky-100 group-hover:text-sky-400 absolute bottom-[150px] left-[140px] sm:bottom-[90px] md:bottom-[100px] lg:bottom-[120px] sm:left-7 text-[80px] md:text-[100px] z-[1]">
        {props.no}
      </h2>
      <div className="absolute sm:bottom-2/2 md:bottom-0 left-1/4 z-10">
        <img src={props.CardImg} alt={props.cardHeading} className="z-10" />
        <h3 className="text-xl">{props.cardHeading}</h3>
      </div>
    </motion.div>
  );
};

