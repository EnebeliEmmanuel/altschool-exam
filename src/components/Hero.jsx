import { React, useState } from "react";

import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images from "../images";
function Hero() {
 
  return (
   
    //  
    <div className="scrollbar-hide bg-vector1   overflow-y-auto">
     
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="ellipse1 hidden md:block"
      ></motion.div>
     
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mt-16 md:mt-24 px-3 sm:px-6 max-w-[1240px] mx-auto  flex gap-8 flex-col items-center sm:flex-row justify-between flex-wrap md:flex-nowrap"
    >
      <div className="flex flex-col flex-1 w-full justify-end">
        <h3 className="text-white font-audio text-5xl  xl:text-7xl ">
          <span className="block">Welcome Users</span>{" "}
          <span className="block md:inline">Make sure you log in</span> to access the game
        </h3>
        <div className="mt-6 flex flex-col small:flex-row small:items-center">
          <Link
            to="/login"
            className="inline-block bg-black w-fit px-10 py-3 text-center  rounded-md shadow"
          >
            Login
          </Link>
        </div>
      </div>
      <div className="flex-1 w-full">
        <img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="w-full"
         
          src={images.desktop}
         
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </motion.div>
  
     
    </div>

  );
}

export default Hero;
