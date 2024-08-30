"use client";

import Link from "next/link";
import React from "react";

const GithubIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path d="..." />
  </svg>
);



export default function Footer(props) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
     
      <Link href={"https://github.com/IbadRehman360"} className="" target="_blank" rel="noreferrer">
        <div className="group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2">
          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className="w-4 h-4 text-gray-400  fill-current group-hover:text-AAsecondary" />
            <span className="">Source code - Github</span>
          </span>
        </div>
      </Link>
    </div>
  );
}
