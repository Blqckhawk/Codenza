"use client";

import { useRegion } from "./region-context";

export function RegionToggle() {
  const { region, setRegion } = useRegion();

  return (
    <button
      onClick={() => setRegion(region === "ng" ? "global" : "ng")}
      className="rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
      aria-label="Switch pricing region"
    >
      {region === "ng" ? "🇳🇬 Nigeria (₦)" : "🌍 Global ($)"}
    </button>
  );
}