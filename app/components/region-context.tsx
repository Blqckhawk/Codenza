"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Region = "ng" | "global";

type RegionContextValue = {
  region: Region;
  setRegion: (region: Region) => void;
};

const RegionContext = createContext<RegionContextValue | undefined>(undefined);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<Region>("ng");

  useEffect(() => {
    const saved = window.localStorage.getItem("codenza-region");
    if (saved === "ng" || saved === "global") {
      setRegionState(saved);
    }
  }, []);

  const setRegion = (next: Region) => {
    setRegionState(next);
    window.localStorage.setItem("codenza-region", next);
  };

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  const ctx = useContext(RegionContext);
  if (!ctx) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return ctx;
}