import { SquareCode, Server, Smartphone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <SquareCode size={72} strokeWidth={0.8} />,
    title: "Backend Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    icon: <Server size={72} strokeWidth={0.8} />,
    title: "Frontend Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    icon: <Smartphone size={72} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
];

const Services = () => {
  return (
    <section className="py-20 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl-mb-24 text-center mx-auto">
          Services
        </h2>
        {/*items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                {" "}
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
