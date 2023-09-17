"use client";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import React, { useRef } from "react";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] h-screen py-20 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
      <motion.div
        style={{ scale, position }}
        className="z-10 flex flex-col container inset-x-0 items-center"
      >
        <div className="mx-auto max-w-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm bg-primary leading-6  ring-1 ring-gray-100/10 hover:ring-gray-100/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-background">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter leading-10 md:leading-[60px] text-gray-100 md:text-6xl">
              Data to enrich your{" "}
              <span className="text-primary text-6xl md:text-8xl leading-[40px] md:leading-[60px] font-extrabold tracking-tighter">
                <br />
                online business
              </span>
            </h1>
            <p className="mt-6 text-sm md:text-lg md:leading-8 text-gray-500">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className={cn(
                  buttonVariants(),
                  "text-md font-semibold tracking-tighter"
                )}
              >
                Get started
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
