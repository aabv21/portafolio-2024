import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const projectData = [
  {
    image: "/work/1.png",
    category: "React",
    name: "Random Website 1",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "React",
    name: "Random Website 2",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React",
    name: "Random Website 3",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React",
    name: "Random Website 4",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Next.js",
    name: "Random Website 5 ",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "React",
    name: "Random Website 6",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "React",
    name: "Random Website 7",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Next.js",
    name: "Random Website 8",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Python",
    name: "Random Website 9",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Python",
    name: "Random Website 10",
    description: "Lorem Ipsum is simply dummy text of the  ",
    link: "/",
    github: "/",
  },
];
