"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Section1() {
  return (
    <div
      className="h-full flex bg-AAprimary flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32 md:px-28 sm:px-8 py-32 sm:py-52"
    >
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0, duration: 0.2 },
          y: { delay: 0, duration: 0.2 },
        }}
        className="text-AAsecondary font-mono"
      >
        Hi, my name is
      </motion.span>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0, duration: 0.2 },
          y: { delay: 0, duration: 0.2 },
        }}
        className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        Ibad ur Rehman.
      </motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0, duration: 0.2 },
          y: { delay: 0, duration: 0.2 },
        }}
        className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
      >
        I make ideas & things alive.
      </motion.h2>
<motion.h3
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    opacity: { delay: 0, duration: 0.2 },
    y: { delay: 0, duration: 0.2 },
  }}
  className="text-gray-400 max-w-2xl font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
>
  I&apos;m a <span className="text-AAsecondary">Software Developer</span> providing intuitive digital experiences. My expertise lies in <span className="text-AAsecondary">Web</span> and <span className="text-AAsecondary">Mobile </span> Development with React Native and Expo to some extend. <span className="text-AAsecondary">Interactive applications</span> using technologies like <span className="text-AAsecondary">Next.js, Vue.js</span>, and <span className="text-AAsecondary">SQL/NoSQL</span> databases, delivering <span className="text-AAsecondary">dynamic projects</span> that make a difference.
</motion.h3>


      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0, duration: 0.2 },
          y: { delay: 0, duration: 0.2 },
        }}
        className="mt-12"
      >
         <Link href={"/Ibad_resume.pdf"} target={"_blank"} rel="noreferrer">
          <button className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary">
            Check out my resume!
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
