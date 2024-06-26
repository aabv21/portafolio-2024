"use client";

import Link from "next/link";
import { Button } from "./ui/button";

// import swiepr react components
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

// libs
import { projectData } from "@/lib/utils";

const Work = () => {
  return (
    <section className="relative pt-16">
      <div className="container mx-auto">
        {/* text*/}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4"> Featured Projects</h2>
          <p className="subtitle mb-8">
            You can be curious and take a look at my great contributions
            throughout my journey as a developer.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* slider*/}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            navigation={true}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {/* show only the first 4 projects for the slides*/}
            {projectData.slice(0, 4).map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={item} truncate={true} />
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
