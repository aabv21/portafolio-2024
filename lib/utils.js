import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const projectData = [
  {
    image: "./work/smarthop.png",
    categories: [
      "JavaScript",
      "React",
      "Node.js",
      "Tailwind",
      "Stripe",
      "MongoDB",
      "Redis",
    ],
    name: "SmartHop",
    description:
      "SmartHop’s powerful trip management software makes it easy for fleets to book better loads, faster, and improve productivity to maximize profits, minimize downtime, and cut overhead costs.",
    link: "https://app.smarthop.co/login",
    // github: "/",
  },
  {
    image: "./work/cluegarden.png",
    categories: ["JavaScript", "React", "Node.js", "Firebase", "Stripe"],
    name: "Cluegarden",
    description:
      "ClueGarden is a self-discovery program designed to help you experience a more authentic life. Our research-based approach is unbiased and focuses on the intersection of science, spirituality, and society",
    link: "https://cluegarden.com/",
    github: "https://github.com/aabv21/Cluegarden-Payments-Back",
  },
  {
    image: "./work/mece.png",
    categories: ["Python", "Web2py"],
    name: "MECE",
    description:
      "'Mecanismo para el Empoderamiento de Competencias Educativas'",
    link: "https://mece.usb.ve/default/login",
    // github: "/",
  },
  {
    image: "./work/pio.png",
    categories: ["Web2py", "Python"],
    name: "SisPIO",
    description: "'Programa Igualdad de Oportunidades PIO'",
    link: "http://syspio.dex.usb.ve/",
    github: "https://github.com/S4W/SisPIO",
  },
];
