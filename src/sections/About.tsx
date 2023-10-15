/* eslint-disable @next/next/no-img-element */
"use client";
import { AboutCard } from "@/components/about/AboutCard";
import { AboutTitle } from "@/components/about/AboutTitle";
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

const features = [
  {
    title: "Todo",
    id: "1",

    image:
      "https://images.unsplash.com/photo-1692739843142-877be399d229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Color",
    id: "2",

    image:
      "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Instantly",
    id: "3",

    image:
      "https://images.unsplash.com/photo-1696961305234-c56d9af60e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Track",
    id: "4",

    image:
      "https://images.unsplash.com/photo-1692663664447-64d7e9a843f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
  },
  {
    title: "Color",
    id: "5",

    image:
      "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Instantly",
    id: "6",

    image:
      "https://images.unsplash.com/photo-1696961305234-c56d9af60e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Track",
    id: "7",

    image:
      "https://images.unsplash.com/photo-1692663664447-64d7e9a843f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
  },
];

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

  return (
    <section ref={targetRef} className="">
      <div className="relative h-[800vh] z-20  bg-black pb-64 shadow-2xl shadow-black">
        <div className="sticky top-1/2 flex origin-center -translate-y-1/2 justify-center">
          <motion.div
            className="translate-x-centered-offset absolute left-1/2 top-1/2 flex h-[60vh] w-full lg:w-[50vw] -translate-y-1/2 scale-[var(--scale)] flex-col items-center justify-center "
            style={stylesWithCssVar({
              opacity,
              "--x": x,
              "--scale": scale,
            })}
          >
            <div className="flex w-full h-full bg-gray-600 rounded-md border-[0.5px] border-[#151515]/10">
              <div className="w-[25%] bg-black rounded-l-md px-2 md:px-4 flex flex-col">
                <div className="flex gap-2 items-center mt-5 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6 text-white "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <p className="text-md hidden md:inline-block">Breadit</p>
                </div>
                <div className="mb-5">
                  <ul>
                    {features.map((feature) => (
                      <li key={feature.id}>
                        <AboutTitle id={feature.id}>{feature.title}</AboutTitle>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-[75%] relative bg-[#131313] rounded-r-md">
                {features.map((feature) => (
                  <AboutCard id={feature.id} key={feature.id}>
                    <img
                      className="w-full h-full object-cover rounded-r-md"
                      src={feature.image}
                      alt={`Feature ${feature.id}`}
                    />
                  </AboutCard>
                ))}
              </div>
            </div>
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
            className="translate-y-centered-offset absolute top-1/2 left-[20px] w-[200px] md:w-[400px] pl-6 md:pl-16 text-xl md:text-3xl leading-tight font-semibold text-white"
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
          className="translate-y-centered-offset top-1/2 left-[20px] w-[300px] md:w-[400px] pl-6 md:pl-16 text-xl md:text-3xl leading-tight font-semibold text-white"
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
          className="translate-y-centered-offset top-1/2 right-[20px] w-[300px] md:w-[400px] pl-16  md:pl-0 md:pr-16 text-xl md:text-3xl leading-tight font-semibold text-white"
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
