"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

const Header = () => {
  const RefNavBar = useRef(null);
  const [ShowElement, setShowElement] = useState(true);
  const [rotate, setRotate] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        <div
          onClick={() => {
            setRotate(!rotate);
            setShowElement(!ShowElement);
          }}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div className="w-3/4 h-full bg-MobileNavBarColor flex flex-col justify-center items-center space-y-8 font-sans">
          {[
            "aboutSection",
            "WhereIhaveWorkedSection",
            "SomethingIveBuiltSection",
            "GetInTouchSection",
          ].map((section, index) => (
            <ReactScrollLink
              key={index}
              to={section}
              spy={true}
              smooth={true}
              offset={index === 1 ? -250 : -50}
              duration={200}
              onClick={() => {
                setRotate(!rotate);
                setShowElement(!ShowElement);
              }}
              className="flex flex-col text-center space-y-2"
            >
              <span className="text-AAsecondary text-xs font-mono">{`0${
                index + 1
              }.`}</span>
              <span className="text-white font-Text2 text-sm sm:text-base hover:text-AAsecondary hover:cursor-pointer duration-300">
                {["About", "Experience", "Work", "Contact"][index]}
              </span>
            </ReactScrollLink>
          ))}
          <a href={"/"} target={"_blank"} rel="noreferrer">
            <button className="rounded border font-Text2 border-AAsecondary hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary">
              Resume
            </button>
          </a>
        </div>
      </motion.div>

      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { duration: 0.5 },
        }}
        className={`w-full fixed ${
          ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `
        } bg-AAprimary flex justify-between px-6 sm:px-12 py-2 sm:py-4 transition duration-4000 translate-y-0 z-20`}
      >
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          className="relative h-12 w-10"
        >
          <motion.span
            initial={{ x: 1 }}
            className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
          >
            A
          </motion.span>
          {[-30, 90, 30, -30, 30, 90].map((rotate, index) => (
            <motion.div
              key={index}
              animate={{
                rotate,
                y: [5, 18, 31, 27, -10, 2][index],
                x: [0, -10, 0, 19, 19, 28][index],
              }}
              className="h-1 w-6 rounded bg-AAsecondary"
            ></motion.div>
          ))}
        </motion.div>

        <div
          className="md:hidden text-white space-y-2 left-0 hover:cursor-pointer mt-2"
          onClick={() => {
            setRotate(!rotate);
            setShowElement(!ShowElement);
          }}
        >
          <div className="flex justify-end">
            <motion.div
              animate={rotate ? { y: 10, rotate: 45 } : { rotate: 0, y: 0 }}
              transition={
                rotate
                  ? { y: 0.15, rotate: { duration: 0.2 } }
                  : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
              }
              className="w-8 h-0.5 rounded bg-AAsecondary"
            ></motion.div>
          </div>
          <motion.div
            animate={rotate ? { opacity: 0 } : { opacity: 1 }}
            transition={{ opacity: { duration: 0.2 } }}
            className="flex justify-end"
          >
            <div className="w-6 h-0.5 rounded bg-AAsecondary"></div>
          </motion.div>
          <div className="flex justify-end">
            <motion.div
              animate={
                rotate
                  ? { y: -10, width: "150%", rotate: -45 }
                  : { y: 0, rotate: 0, width: "50%" }
              }
              transition={
                rotate
                  ? { y: 0.15, rotate: { duration: 0.2 } }
                  : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
              }
              className="w-4 h-0.5 rounded bg-AAsecondary"
            ></motion.div>
          </div>
        </div>

        <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8">
          {["About", "Experience", "Work", "Contact"].map((section, index) => (
            <motion.div
              key={index}
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className="text-AAsecondary"
            >
              <ReactScrollLink
                to={`${section}Section`}
                spy={true}
                smooth={true}
                offset={-100}
                duration={200}
              >
                &gt; 0{index + 1}.{" "}
                <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
                  {section}
                </span>
              </ReactScrollLink>
            </motion.div>
          ))}
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <motion.button
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.5,
              }}
              className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
            >
              Resume
            </motion.button>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
