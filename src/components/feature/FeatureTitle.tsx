"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useFeatureStore } from "./store";

type Props = {
  children: React.ReactNode;
  id: string;
};

export const FeatureTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useFeatureStore((state) => state.setInviewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) {
      setInViewFeature(id);
    }
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={cn(
        "py-16 font-semibold text-5xl text-slate-700",
        isInView ? "text-white" : "text-gray-700"
      )}
    >
      {children}
    </p>
  );
};
