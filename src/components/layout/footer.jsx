"use client";

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

const LinkedinIcon = (props) => (
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

const InstagramIcon = (props) => (
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

const YoutubeIcon = (props) => (
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

const ClickableIcon = (props) => {
  return (
    <a href={props.href} className="" target="_blank" rel="noreferrer">
      <props.Icon className="w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer" />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/hktitof", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/abdellatif-anaflous/",
    Icon: LinkedinIcon,
  },
  { href: "https://www.instagram.com/titof_abdo/", Icon: InstagramIcon },
  { href: "https://www.youtube.com/@abdellatif_anaflous", Icon: YoutubeIcon },
];

export default function Footer(props) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => (
          <ClickableIcon
            key={index}
            href={iconData.href}
            Icon={iconData.Icon}
          />
        ))}
      </div>
      <a href={props.githubUrl} className="" target="_blank" rel="noreferrer">
        <div className="group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2">
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Desgin Taken From Anaflous Abdellatif
          </span>
          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className="w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary" />
            <span>Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
}
