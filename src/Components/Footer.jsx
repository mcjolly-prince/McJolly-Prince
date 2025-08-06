
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Copyright, FbIcon, IgIcon, InIcon, TwIcon, MediumIcon } from "./svg";

const Footer = () => {
  const [time, setTime] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    
    updateTime(); // Initial call
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Return empty time string during server-side rendering
  const displayTime = mounted ? time : '';

  return (
    <section className="mx-[30px] mt-[60px] pb-[20px] lg:pb-[50px] lg:mx-[76px] lg:mt-[150px]">
       <div className="lg:max-w-[13000px] lg:mx-[71px] h-[2px] mt-[63.37px] bg-[#130b1c]"></div>
      <div className="mt-[63px] flex flex-col-reverse justify-start gap-5 md:gap-0 md:flex md:flex-row md:justify-between md:items-center ">
        <div className="flex flex-col justify-start items-start">
          <div className="flex flex-row items-center lg:gap-[4px]">
            <span>
              <Copyright className="size-[18px] md:size-[20px]" />
            </span>
            <p className={`text-[#000] md:text-xl text-lg font-medium`}>
             Mcjolly
              <span className="text-[#000] text-[14px] lg:text-base">
                {" "}
                53 BC -
              </span>{" "}
              <span className="text-[#000] text-[14px] lg:text-base">
                {new Date().getFullYear()}
              </span>
            </p>
          </div>
          <p className="text-[#000] transition-all duration-300 text-end text-sm lg:text-base mt-1">
            {displayTime}
          </p>
        </div>
        <div className="mt-[10px] md:mt-[65px] flex justify-start items-center gap-[20px] md:gap-[40px]">
          <motion.a
            href="https://medium.com/@mcjollyngajiprince/"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <MediumIcon
              fill={`#000`}
              className={`w-[30px] h-[30px] rounded-full border-[#000] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://x.com/Mcjolly_prince"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <TwIcon
              fill="#000"
              className={`w-[30px] h-[30px] rounded-full border-[#000] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/mcjolly_prince"
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 1.1 }}
            whileHover={{ scale: 0.99 }}
            className="h-auto w-auto"
          >
            <IgIcon
              fill={`#000`}
              className={`w-[30px] h-[30px] rounded-full border-[#000] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-gray-500`}
            />
          </motion.a>
          
        </div>
      </div>


    </section>
  );
};

export default Footer;
