"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiepr react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

const projectData = [
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text*/}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4"> Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider*/}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickeable: true }}
          >
            {/* show only the first 4 projects for the slides*/}
            {projectData.slice(0, 4).map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
