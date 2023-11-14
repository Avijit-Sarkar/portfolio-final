"use client";

import React, { useRef, useState } from "react";
import { Facebook, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

interface FramerProps {
  children: React.ReactNode;
}

function Framer({ children }: FramerProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>): void => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = (): void => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

const ServiceNav = () => {
  return (
    <div className="fixed hidden md:flex container z-30 left-0 top-0 h-screen w-auto  flex-col justify-center">
      <div className="flex flex-col gap-5 bg-white/20 px-3 py-4 rounded-md">
        <Framer>
          <Facebook
            fill="currentColor"
            className="cursor-pointer hover:scale-110"
          />
        </Framer>
        <Framer>
          <Linkedin
            fill="currentColor"
            className="cursor-pointer hover:scale-110"
          />
        </Framer>
        <Framer>
          <Github
            fill="currentColor"
            className="cursor-pointer hover:scale-110"
          />
        </Framer>
      </div>
    </div>
  );
};

export default ServiceNav;
