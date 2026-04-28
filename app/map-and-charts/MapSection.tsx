"use client";

import dynamic from "next/dynamic";

// Leaflet requires browser DOM — dynamic import with ssr:false is required
const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function MapSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
        Heat Vulnerability Index by NYC Neighborhood
      </h2>
      <p className="text-stone-500 dark:text-stone-400 mb-4 text-sm leading-relaxed">
        Each area is a NYC ZIP code colored by its{" "}
        <strong>Heat Vulnerability Index (HVI) </strong> score; a 1-5 scale
        developed by the NYC Department of Health that combines summer surface
        temperature, green space access, home air conditioning rates, poverty,
        and neighborhood racial composition. The DOHMH&apos;s own documentation
        states that Black New Yorkers die of heat-related illness at a
        disproportionately high rate and that these disparities stem directly
        from structural racism, including redlining and neighborhood
        disinvestment. Click any neighborhood to see its HVI score and the share
        of Black residents (
        <a
          href="https://www.census.gov/programs-surveys/acs"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
        >
          2022 U.S. Census ACS
        </a>
        ). Data loads live from{" "}
        <a
          href="https://data.cityofnewyork.us"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
        >
          NYC Open Data
        </a>
        .
      </p>

      <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-sm h-120">
        <LeafletMap />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-3 text-xs text-stone-500 dark:text-stone-400">
        {[
          { score: 1, label: "Lowest risk", color: "#22c55e" },
          { score: 2, label: "Low-moderate", color: "#84cc16" },
          { score: 3, label: "Moderate", color: "#eab308" },
          { score: 4, label: "High risk", color: "#f97316" },
          { score: 5, label: "Highest risk", color: "#dc2626" },
        ].map(({ score, label, color }) => (
          <div key={score} className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm inline-block"
              style={{ backgroundColor: color }}
            />
            {score} — {label}
          </div>
        ))}
      </div>
      <p className="text-stone-400 dark:text-stone-500 text-xs mt-1">
        Source:{" "}
        <a
          href="https://data.cityofnewyork.us/Health/Heat-Vulnerability-Index-Rankings/4mhf-duep"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
        >
          NYC DOHMH Heat Vulnerability Index
        </a>{" "}
        · NYC Open Data ·{" "}
        <a
          href="https://data.cityofnewyork.us/Health/Heat-Vulnerability-Index-Rankings/4mhf-duep"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
        >
          <code>4mhf-duep</code>
        </a>{" "}
        &amp;{" "}
        <a
          href="https://data.cityofnewyork.us/Health/Modified-Zip-Code-Tabulation-Areas-MODZCTA-/pri4-ifjk"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
        >
          <code>pri4-ifjk</code>
        </a>
      </p>
    </section>
  );
}
