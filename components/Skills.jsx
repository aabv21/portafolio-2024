import { SquareCode, Database, Blend } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const skillsData = [
  {
    icon: <SquareCode size={72} strokeWidth={0.8} />,
    title: "Frontend",
    list: ["HTML/CSS/Tailwind", "React/React Native, Next.js"],
  },
  {
    icon: <Database size={72} strokeWidth={0.8} />,
    title: "Backend",
    list: ["Node.js/Express.js", "MongoDB, Redis"],
  },
  {
    icon: <Blend size={72} strokeWidth={0.8} />,
    title: "Miscellaneous",
    list: ["JavaScript/TypeScript/Python", "Stripe, Firebase"],
  },
];

const Skills = () => {
  return (
    <section className="pt-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl-mb-24 text-center mx-auto">
          Skills
        </h2>
        {/*items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {skillsData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  {item.list.map((listItem, index) => {
                    return (
                      <CardDescription key={index} className="text-lg">
                        {listItem}
                      </CardDescription>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
