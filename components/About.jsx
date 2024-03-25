import DevImg from "./DevImg";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  { icon: <User2 size={20} />, text: "Andrés Buelvas" },
  { icon: <PhoneCall size={20} />, text: "+58 424 1204323" },
  { icon: <MailIcon size={20} />, text: "andres.buelvas.2102@gmail.com" },
  { icon: <Calendar size={20} />, text: "Born on 21 Feb, 1996" },
  {
    icon: <GraduationCap size={20} />,
    text: "Computer Science & Engineering, BE",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Unversidad Simón Bolívar",
        qualification: "Bachelor of Science",
        years: "201 - 2019",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Latinux",
        role: "Backend Engineer",
        years: "2013 - 2019",
      },
      {
        company: "SmartHop",
        role: "Full Stack Engineer, Senior Full Stack Engineer, Engineer Manager",
        years: "2013 - 2019",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML, CSS" },
      { name: "JavaScript, Python" },
      { name: "React, React Native" },
      { name: "TypeScript" },
      { name: "Stripe" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

const getData = (array, title) => array.find((item) => item.title === title);

const listQualificationsGroup = (title) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="flex gap-x-4 items-center text-[22px] text-primary">
        {title === "experience" ? <Briefcase /> : <GraduationCap size={28} />}
        <h4 className="capitalize font-medium">
          {getData(qualificationData, title).title}
        </h4>
      </div>

      {/* list */}
      <div className="flex flex-col gap-y-8">
        {getData(qualificationData, title).data.map((item, index) => {
          const { company, university, role, qualification, years } = item;
          return (
            <div className="flex gap-x-8 group" key={index}>
              <div className="h-[84px] w-[1px] bg-border relative ml-2">
                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
              </div>
              <div>
                <div className="font-semibold text-xl leading-none mb-2">
                  {company ?? university}
                </div>
                <div className="text-lg leading-none text-muted-foreground mb-4">
                  {role ?? qualification}
                </div>
                <div className="text-base font-medium">{years}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/*image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repet relative"
              imgSrc="about/developer.png"
            />
          </div>
          {/*tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="bg-prmary w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl-w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl-w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl-w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4"> Lorem Ipsum</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>Spanish, English</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* experience and education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      {listQualificationsGroup("experience")}
                      {/* education */}
                      {listQualificationsGroup("education")}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <di className="text-center xl:text-left">
                    <h3 className="h3 mb-8"> What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div className="">
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          return (
                            <div className="" key={index}>
                              <Image
                                src={item.imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              ></Image>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </di>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
