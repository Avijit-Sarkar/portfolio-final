/* eslint-disable @next/next/no-img-element */
"use client";
import Cards from "@/components/Cards";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Carosul = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="mx-[10%]">
      <motion.div
        ref={carousel}
        className="overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6  p-10 "
        >
          {Cards.map((image) => {
            return (
              <div
                key={image.id}
                className="group pointer-events-auto relative h-[30rem] min-w-[25rem] overflow-hidden rounded-lg"
              >
                <div
                  style={{
                    backgroundImage: `url(${image.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                ></div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carosul;
