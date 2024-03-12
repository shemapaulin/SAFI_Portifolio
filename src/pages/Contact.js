import React from "react";
import {motion} from "framer-motion"
import {transition1} from "../transitions"
import stand2 from "../img/contact/stand2.jpg"
//import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 , y: '100%'}}
    animate={{ opacity: 1, y: '0' }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}

    className="section ">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center h-full justify-start pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
          initial={{ opacity: 0 , y: '100%'}}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '100%' }}
          transition={transition1}
          className="hidden lg:flex bg-amber-900 absolute bottom-0 left-0 right-0 top-60 -z-10 "></motion.div>
          <div className="lg:flex-1 lg:pt-32  px-17 ">
            <h1 className="h1 text-black">Contact</h1>
            <p className="mb-12">
              I would to love to get your suggestions from you.
            </p>
            <form className="flex flex-col gap-y-4">
              <div className=" flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary
                 w-full pl-3 placeholder:text-black"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 
                placeholder:text-black"
                  type="text"
                  placeholder="your Email Address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-black"
                type="text"
                placeholder="your message"
              />
              <button className="btn mb-[30px] mx-auto lg:mx-0 self-start hover:bg-white hover:text-black rounded-lg">
                Send it
              </button>
            </form>
          </div>
          <motion.div
          initial={{ opacity: 0 , y: '100%'}}
          animate={{ opacity: 1, y: '0' }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ transition: transition1, duration: 1.5
          }} className="lg:flex-1 p-[165px]">
            <img src={stand2} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
