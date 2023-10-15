"use client";
import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/sections/feature/store";
import React from "react";

type FeatureCardProps = {
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string;
};
export const AboutCard = ({ children, id }: FeatureCardProps) => {
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
