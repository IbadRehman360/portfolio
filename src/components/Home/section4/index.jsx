import React from "react";
import { motion } from "framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";
import Link from "next/link";

const IconClickableWithAnimation = ({ href, Icon }) => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <Link href={href} className="" target="_blank" rel="noreferrer">
        <Icon className="w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer" />
      </Link>
    </motion.div>
  );
};

export default function section4() {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { duration: 0.5 } }}
        className="z-10 fixed bottom-0 left-0 hidden lg:flex flex-row px-12 items-center justify-between"
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            <IconClickableWithAnimation
              href="https://github.com/IbadRehman360"
              Icon={GithubIcon}
            />
            <IconClickableWithAnimation
              href="https://www.linkedin.com/in/ibad-ur-rehman-b5a78a27b/"
              Icon={LinkedinIcon}
            />
            <IconClickableWithAnimation
              href="https://www.youtube.com"
              Icon={YoutubeIcon}
            />
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        transition={{ y: { duration: 0.5 } }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 gap-4    justify-center items-center">
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <Link
              href="mailto:ibadhashim4@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className=" tracking-widest text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                Ibadhashim4<span className="text-AAsecondary ">@</span>gmail
                <span className="text-AAsecondary">.</span>com
              </span>
            </Link>
          </motion.div>
          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
