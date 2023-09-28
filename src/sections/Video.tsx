"use client";

import React, { useRef, useEffect } from "react";
import { scroll, useScroll, useTransform, motion } from "framer-motion";

const Video = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"],
  });
  const video = useRef<HTMLVideoElement | null>(null);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 0.9],
    [0, 1, 1, 0]
  );
  const position = useTransform(scrollYProgress, (pos) => {
    return pos <= 0 || pos >= 1 ? "relative" : "fixed";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const videoElement = video.current;

      if (videoElement) {
        videoElement.pause();

        // Scrub through the video on scroll
        scroll((progress) => {
          if (videoElement.readyState === 4) {
            videoElement.currentTime = videoElement.duration * progress;
          }
        });
      }
    }
  }, []);

  return (
    <motion.section
      style={{ opacity }}
      className="z-10 h-[600vh]" // Change the height to "h-screen" to cover full height
      ref={targetRef}
    >
      <motion.div style={{ position }} className="w-screen top-0 h-screen">
        <video
          ref={video}
          muted
          playsInline
          preload="true"
          className="w-full h-full object-cover" // Use "object-cover" to make the video cover the div
          loop
          src="https://framerusercontent.com/modules/assets/de1SZVgW6x8oriFKmGD2vCLl4M~QgE11NLqSikToAlO4zGwAzyGWgrXLn2cqTQMkVVJmig.mp4"
        ></video>
      </motion.div>
    </motion.section>
  );
};

export default Video;
