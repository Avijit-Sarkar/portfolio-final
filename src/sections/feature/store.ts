import { create } from "zustand";

type FeatureStore = {
  inViewFeature: string | null;
  setInviewFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
  inViewFeature: null,
  setInviewFeature: (feature: string | null) => set({ inViewFeature: feature }),
}));
