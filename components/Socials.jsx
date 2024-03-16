"use client";

import { RiLinkedinFill, RiGithubFill, RiCodeBoxFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  // { path: "/", name: <RiYoutubeFill /> },
  { path: "/", name: <RiLinkedinFill /> },
  { path: "/", name: <RiGithubFill /> },
  { path: "/", name: <RiCodeBoxFill /> },
  // { path: "/", name: <RiInstallFill /> },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
