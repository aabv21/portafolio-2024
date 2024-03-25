import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

// components
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 🖐️
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/* info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={20} className="text-primary" />
              <div className="text-lg">andres.buelvas.2102@gmail.com</div>
            </div>

            <div class="flex items-center gap-x-8">
              <HomeIcon size={20} className="text-primary" />
              <div className="text-lg">Caracas, Venezuela</div>
            </div>

            <div class="flex items-center gap-x-8">
              <PhoneCall size={20} className="text-primary" />
              <div className="text-lg">+58 424 120 4323</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
