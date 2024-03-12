import React from "react";

import image1 from "../img/portfolio/1.jpg";
import image2 from "../img/portfolio/two.jpeg";
import image3 from "../img/portfolio/story.jpg";
import image4 from "../img/portfolio/4.jpg";

import {motion} from "framer-motion"
import {transition1} from "../transitions"
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 , y: '100%'}}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '100%' }}
          transition={transition1}
    className="section ">
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div 
          initial={{ opacity: 0 , y: '-80%'}}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1}
          className="flex flex-col lg:items-start ">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm text-white font-size-[40px] ]">
              lorem ipsum dolor sit amet consectetur adipisicing elit g lorem
              ipsum dolor sit amet consectetur adipisicin elit ipsum dolor s it
              amet consectetur adipisicing elit lorem ipsum dolor sit amet
              consectetur adipisicin
            </p>

            <Link to="/" className="btn mb-[30px] bg-amber-900 text-black rounded-md hover:bg-white">
              View Garrely
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 lg:gap-2 pt-10">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden object-cover">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500 cursor-pointer"
                src={image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
