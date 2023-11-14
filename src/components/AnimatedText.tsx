import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord: Variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set a timer to trigger the exit animation after 5 seconds
    const opacityTimer = setTimeout(() => {
      setHasAnimated(true);
    }, 5000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(opacityTimer);
  }, []);

  return (
    <div>
      <motion.h1
        className={`inline-block ${className}`}
        variants={quote}
        initial="initial"
        animate={hasAnimated ? "exit" : "animate"}
        exit="exit"
      >
        <span className="sr-only">{text}</span>
        {text.split("").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            aria-hidden
            className="inline-block"
            variants={singleWord}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
