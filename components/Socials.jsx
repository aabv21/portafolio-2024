"use client";

import { RiLinkedinFill, RiGithubFill, RiCodeBoxFill } from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/andr%C3%A9s-buelvas-678993183/?locale=en_US",
    name: <RiLinkedinFill />,
  },
  { path: "https://github.com/aabv21", name: <RiGithubFill /> },
  {
    path: "https://www.hackerrank.com/profile/andres_buelvas_1",
    name: <RiCodeBoxFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} target="_blank">
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
