"use client";

import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/sections/feature/store";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  id: string;
};
export const AboutTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const setInViewFeature = useFeatureStore((state) => state.setInviewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const handleClick = () => {
    setInViewFeature(id);
  };
  useEffect(() => {
    ref.current?.click();
  }, []);

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "md:font-semibold text-sm md:text-xl text-[#7A7A7A] flex w-full py-2 px-2 md:px-3 rounded-md hover:text-white justify-between items-center",
        inViewFeature === id ? "bg-[#151515] text-white" : ""
      )}
    >
      {children}
      <ChevronRight size={18} className="hidden md:inline-block" />
    </button>
  );
};
