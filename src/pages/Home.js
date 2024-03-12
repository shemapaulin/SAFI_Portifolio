import React from "react";
import hoto from "../img/home/photo-pic.webp"
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}  
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className="container mx-auto h-full  relative">
        <div className="flex flex-col justify-center ">
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start "
          >
            <h1 className="h1">
              Photographer <br /> & Videographer
            </h1>
            <p className="text-[26px] lg:text-[36px]  mb-4 lg:mb-12 text-amber-900">
              Kigali Rwanda
            </p>
            <div>
              <Link to="/contact" className="btn mb-[30px] bg-amber-900 text-black rounded-md hover:bg-white">
                Hire Me
              </Link>
            </div>
          </motion.div>

          <div className="flex justify-end max-h-96  lg:max-h-max">
            <motion.div
       initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      exit={{ scale: 0}}
       transition={transition1}
             className="relative object-cover lg:-right-40  overflow-hidden">npm 
              <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={hoto} alt=" " />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
