import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './component.css' 

export const Leading = () => {
  return (
    <div  className="w-full mt-4">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
        <motion.h1 style={{color:'#1c57a6'}}
    className=" md:text-5xl text-3xl font-bold py-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: 'easeOut' }}
>
    Leading You To Your Future
</motion.h1>

          
          <motion.p
            className="md:w-4/6 px-4 md:leading-10 text-xs font-bold md:px-4 mx-auto md:text-xl md:font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration:1.5 , delay: 1, ease: 'easeOut' }}
          >
            Invovision is a web and e-store development company focused on
            creating reliable digital solutions that help steer businesses
            towards sustainable growth. The skilled and experienced team at
            Ebridge provides custom digital experiences and builds lasting
            partnerships. This software house in Pakistan provides holistic
            software development and marketing services combined with a
            long-term growth strategy.
          </motion.p>
          
          <Link to="about-us">
            <motion.button
              className="m-6 italic bg-gradient-to-r from-cyan-200 to-blue-500 hover:bg-gradient-to-l text-white p-4 shadow-800 font-semibold cursor-pointer flex item-center mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              Learn More About Us
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};
