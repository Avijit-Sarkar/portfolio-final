/* eslint-disable @next/next/no-img-element */
"use client";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";
import React, { useRef } from "react";

const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [1, 1.8]);
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.7, 0.71, 0.72, 0.75, 0.8, 1],
    [0, 0.3, 0.5, 0.6, 1, 1, 0]
  );
  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const fadeOutimg = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);
  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  const position = useTransform(scrollYProgress, (pos) => {
    return pos <= 0.4 ? "#0d0d0d" : "#000000";
  });

  const position2 = useTransform(scrollYProgress, (pos) => {
    const shadowOpacity = [0.7, 0.5, 0.3, 0.2, 0.1, 0];
    const boxShadow =
      pos <= 0.05
        ? "0 -5px 140px 20px #48267f"
        : `0 -5px 140px 20px rgba(72, 38, 127, ${
            shadowOpacity[Math.floor(pos * 20)]
          })`;
    return boxShadow;
  });

  return (
    <section className="relative z-10 mt-[-40vh] h-[400vh]">
      <div ref={targetRef} className="mb-[-120vh] h-[300vh] w-full">
        <div className="sticky top-[13vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, opacity }} className="origin-top">
              <motion.div
                style={{ backgroundColor: position, boxShadow: position2 }}
                className="h-full rounded-md transition-all ease-in-out"
              >
                <motion.div
                  style={{ opacity: fadeOut }}
                  className="flex justify-start bg-[#353535] p-2  rounded-tl-md duration-300 rounded-tr-md"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mx-2"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </motion.div>
                <motion.img
                  style={{ opacity: fadeOutimg }}
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  className="h-auto hidden lg:inline-block rounded-b-md max-h-none w-[50vw]"
                />
                <motion.img
                  style={{ opacity: fadeOutimg }}
                  src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                  className="h-auto lg:hidden rounded-b-md inline-block max-h-none w-[60vw]"
                />
              </motion.div>
              <div className="w-full h-full flex justify-center absolute inset-0">
                <motion.p
                  style={{
                    opacity: finalTextOpacity,
                    scale: finalTextScale,
                    y: "-50%",
                    x: "-50%",
                  }}
                  className="absolute left-1/2 top-[30%] text-[2rem] md:text-[4rem] leading-tight tracking-tight text-white"
                >
                  Streamlined
                  <br />
                  Experience.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
