import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// Components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

// Lin
import { projectData, START_YEAR } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="py-12 pt-12 xl:py-24 xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Computer Engineer
            </div>
            <h1 className="h1 mb-4">Hey there, I'm Andrés Buelvas</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Welcome to my portafolio! I can help you solve problems, design
              ideas and build modern applications.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:xm-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link
                href="./ANDRES_BUELVAS_AST_CV.pdf"
                variant="secondary"
                target="_blank"
                className="gap-x-2"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>{" "}
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              icon={<RiBriefcase4Fill />}
              containerStyles="absolute top-[24%] -left-[5rem]"
              endCountNum={+new Date().getFullYear() - START_YEAR}
              prefix={"+"}
              badgeText={"Years of Experience"}
            />
            {/* badge 2 */}
            <Badge
              icon={<RiTeamFill />}
              containerStyles="absolute top-[55%] -right-8"
              endCountNum={projectData.length}
              badgeText={"Projects built"}
            />
            {/* badge 3 */}
            <Badge
              icon={<RiTodoFill />}
              containerStyles="absolute top-[80%] -left-[2rem]"
              endCountNum={100}
              suffix={"%"}
              badgeText={"eager to learn"}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[610px] h-[600px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="w-[500px] h-[482px] bg-no-repeat relative bg-bottom"
              // containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc={`./hero/developer.png`}
            />
          </div>
        </div>
        {/* text */}
      </div>
      <div className="flex justify-center mt-16 xl:mt-2 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
