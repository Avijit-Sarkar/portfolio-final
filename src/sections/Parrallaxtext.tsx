import ParallaxText from "@/components/ParallaxText";
import React from "react";

const Parrallaxtext = () => {
  return (
    <div className="py-24 sm:py-32">
      <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
      <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
    </div>
  );
};

export default Parrallaxtext;
