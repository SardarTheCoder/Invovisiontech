import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export const FancyCard = (props) => {
  return (
    <motion.div
      className="bg-[#eef1f5] text-center"
      initial={{ opacity: 0, y: 20 }} // Initial state
      whileInView={{ opacity: 1, y: 0 }} // State when in view
      transition={{ duration: 0.6, ease: "easeOut" }} // Transition properties
    >
      <div
        className="pt-8 mt-10 italic group my-12 mx-auto w-4/5 h-72 text-black border rounded-tl-3xl rounded-br-3xl bg-blue-100 border-sm mx-w-sm overflow-hidden hover:shadow-lg flex flex-col items-center"
      >
        <motion.div
          className="flex items-center justify-center w-full h-full"
          animate={{ y: [0, 10, 0] }} 
          transition={{
            duration: 2, 
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "easeInOut", 
          }}
        >
          <img
            src={props.imgsrc}
            alt="image"
            className="max-w-[104px] max-h-full object-contain"
          />
        </motion.div>

        <h1 className="heading group-hover:text-sky-500 text-sm lg:text-xl font-bold mt-4">
          {props.cardheading}
        </h1>

        <p className="text-xs md:text-sm w-4/5 py-4 mx-auto">
          {props.carddetail}
        </p>
      </div>
    </motion.div>
  );
};
