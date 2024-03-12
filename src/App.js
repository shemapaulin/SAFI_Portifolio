//import { useState } from "react";
import AnimRoutes from "./components/AnimRoutes";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import React  ,{ useContext } from "react";
//import CursorProvider from "./context/CursorContext";
import { motion } from "framer-motion";
import  {CursorContext}  from "./context/CursorContext";
const App = () => {
  const { CursorVariants } = useContext(CursorContext);
  return (
    <>
      
        <Router>
          <Header />
          <AnimRoutes />
        </Router>
        <motion.div
          variants={CursorVariants}
          animate={'default'}
          className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50"
        ></motion.div>
      
    </>
  );
};

export default App;
