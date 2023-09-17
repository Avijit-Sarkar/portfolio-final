import React from "react";
import { Facebook, Github, Linkedin } from "lucide-react";

const ServiceNav = () => {
  return (
    <div className="fixed hidden md:flex container z-30 left-0 top-0 h-screen w-auto  flex-col justify-center">
      <div className="flex flex-col gap-4">
        <Facebook className="cursor-pointer hover:scale-110" />
        <Linkedin className="cursor-pointer hover:scale-110" />
        <Github className="cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default ServiceNav;
