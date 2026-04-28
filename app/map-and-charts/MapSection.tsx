"use client";

import dynamic from "next/dynamic";

// Leaflet requires a browser environment so we use dynamic import with ssr:false
const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function MapSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-stone-900 mb-2">
        Environmental Burdens Map
      </h2>
      <p className="text-stone-500 mb-4 text-sm leading-relaxed">
        The map below will display environmental burden data (pollution, heat
        risk, water issues) alongside demographic data for New York City
        neighborhoods. Data will be pulled from the{" "}
        <strong>OpenData NYC</strong> dataset.
      </p>

      {/* TODO: Replace placeholder with real data layer once dataset is finalized */}
      <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm h-[480px]">
        <LeafletMap />
      </div>
      <p className="text-stone-400 text-xs mt-2">
        Source: OpenData NYC · {/* TODO: Add dataset citation */}
      </p>
    </section>
  );
}
