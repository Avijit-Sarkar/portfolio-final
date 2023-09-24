/* eslint-disable @next/next/no-img-element */
"use client";
import { stylesWithCssVar } from "@/lib/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { GitBranchIcon } from "lucide-react";
import { useRef } from "react";

const animationOrder = {
  initial: 0,
  fadeInEnd: 0.15,
  showParagraphOne: 0.25,
  hideParagraphOne: 0.3,
  showParagraphTwoStart: 0.35,
  showParagraphTwoEnd: 0.4,
  hideParagraphTwo: 0.5,
  showLoadingScreenStart: 0.53,
  showLoadingScreenEnd: 0.58,
  createBranchStart: 0.65,
  createBranchEnd: 0.7,
  createBranchFadeInStart: 0.8,
  createBranchFadeInEnd: 0.85,
  endTextFadeInStart: 0.8,
  endTextFadeInEnd: 0.95,
};

const About = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart,
    ],
    [0, 1, 1, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart,
    ],
    [3, 1, 1, 0.7]
  );
  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
      animationOrder.showLoadingScreenStart,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchEnd,
    ],
    ["50%", "50%", "55%", "-50%", "-50%", "-55%", "0%", "0%", "27%"]
  );

  const paragraph1Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    [0, 1, 0]
  );
  const paragraph1TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.fadeInEnd + 0.02,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const paragraph2Opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    [0, 1, 0]
  );
  const paragraph2TranslateY = useTransform(
    scrollYProgress,
    [
      animationOrder.showParagraphTwoStart,
      animationOrder.showParagraphTwoEnd,
      animationOrder.hideParagraphTwo,
    ],
    ["4rem", "0rem", "-4rem"]
  );

  const newBranchOpacity2 = useTransform(scrollYProgress, [0.67, 0.8], [0, 1]);

  const endTextOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const endTexty = useTransform(scrollYProgress, [0.8, 1], ["4rem", "0rem"]);

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const avatarOpacity = useTransform(scrollYProgress, (pos) =>
    pos >= animationOrder.fadeInEnd ? 1 : 0
  );

  return (
    <section ref={targetRef}>
      <div className="relative h-[800vh]">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
          <motion.div
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex h-[60vh] w-full lg:w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center "
            style={stylesWithCssVar({
              opacity,
              "--x": x,
              "--scale": scale,
            })}
          >
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              className="object-cover w-full h-full object-left rounded-md"
              alt="main-image"
            />
            <motion.span
              className="mt-5 block text-lg md:text-2xl text-white"
              style={{ opacity: newBranchOpacity2 }}
            >
              <GitBranchIcon className="mr-3 inline-block md:h-12 md:w-12" />{" "}
              Frontend
              {`FYI's branch`}
            </motion.span>
          </motion.div>

          <motion.p
            style={stylesWithCssVar({
              opacity: endTextOpacity,
              "--y": endTexty,
            })}
            className="translate-y-centered-offset absolute top-1/2 left-[20px] w-[200px] md:w-[300px] pl-6 md:pl-16 text-2xl leading-tight font-semibold text-white"
          >
            <span className="text-primary">Built for flow</span>
            <br />
            Spin up a new branch for any sized project in seconds.
          </motion.p>
        </div>
        <motion.p
          style={stylesWithCssVar({
            opacity: paragraph1Opacity,
            "--y": paragraph1TranslateY,
            position,
          })}
          className="translate-y-centered-offset top-1/2 left-[20px] w-[300px] pl-6 md:pl-16 text-2xl leading-tight font-semibold text-white"
        >
          Not only share code,
          <br />
          <span className="text-primary">share the context.</span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: paragraph2Opacity,
            "--y": paragraph2TranslateY,
            position,
          })}
          className="translate-y-centered-offset top-1/2 right-[20px] w-[300px] pl-16  md:pl-0 md:pr-16 text-xl leading-tight font-semibold text-white"
        >
          {`Sometimes it's not about code.`}
          <br />
          <span className="text-primary">
            Get everybody on the same page. Literally.
          </span>
        </motion.p>
      </div>
    </section>
  );
};

export default About;
