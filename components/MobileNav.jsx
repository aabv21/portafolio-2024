import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            {/* <Logo /> */}
            <Nav
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="relative hover:text-primary transition-all text-2xl"
            />
          </div>
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
            iconsStyles="text-foreground text-2xl hover:text-primary transition-all"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
