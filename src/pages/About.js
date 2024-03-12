import React from "react";
//import woman from "../img/about/woman.png";
import aboutPic from "../img/about/aboutPic.jpg"
import {motion} from 'framer-motion'
import { transition1 } from "../transitions";


import { Link } from "react-router-dom";
const About = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 , y: '100%'}}
      animate={{ opacity: 1, y: '0' }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className="container mx-auto h-full relative">
        <div
          className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16"
        >
          <div className="flex-1 max-h-95 lg:max-h-max mt-10 order-2 lg:order-none overflow-hidden ">
            <img src={aboutPic} alt="" />
          </div>

          <motion.div
          initial={{ opacity: 0 , y: '-80%'}}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
           className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm text-white">
              lorem300 ipsum dolor sit amet consectetur adipisicing elit.
              lorem300 ipsum dolor sit amet consectetur adipisicing elit.
              consectetur adipisicing elit.lorem300 ipsum dolor sit amet
              consectetur adipisicing elit.dolor sit amet consectetur
              adipisicing elit. consectetur adipisicing elit.lorem30 consectetur
              adipisicing elit
            </p>
            <Link to="/Portfolio" className="btn mb-[30px] bg-amber-900 text-black rounded-md hover:bg-white">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
