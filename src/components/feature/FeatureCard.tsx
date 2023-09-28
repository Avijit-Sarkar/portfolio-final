/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { useFeatureStore } from "./store";

type FeatureCardProps = {
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};
export const FeatureCard = ({ children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
        inViewFeature === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};
