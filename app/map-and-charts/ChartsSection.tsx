"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Average PM2.5 (µg/m³) in NYC neighborhoods grouped by majority racial
// demographic, derived from NYCCAS measurements cross-referenced with
// 2020 U.S. Census ACS racial composition data.
const pm25ByRaceData = [
  { group: "Black-majority", pm25: 8.9 },
  { group: "Hispanic-majority", pm25: 8.4 },
  { group: "Asian-majority", pm25: 7.8 },
  { group: "White-majority", pm25: 6.5 },
];

// % Black residents (2020 Decennial Census) vs. % of census tracts
// designated "disadvantaged" by the federal CEJST tool (CEQ, 2022).
// Sorted descending by Black population share to make the correlation visible.
const boroughBurdenData = [
  { borough: "Bronx", blackPop: 36, burdenTracts: 66 },
  { borough: "Brooklyn", blackPop: 35, burdenTracts: 50 },
  { borough: "Queens", blackPop: 20, burdenTracts: 36 },
  { borough: "Manhattan", blackPop: 15, burdenTracts: 25 },
  { borough: "Staten Is.", blackPop: 12, burdenTracts: 16 },
];

// Asthma emergency department visit rate per 10,000 residents by borough.
// Asthma is a direct downstream consequence of chronic PM2.5 and NO2 exposure.
// Sorted descending to emphasize the Bronx disparity.
const asthmaRateData = [
  { borough: "Bronx", rate: 29.1 },
  { borough: "Brooklyn", rate: 17.4 },
  { borough: "Manhattan", rate: 12.6 },
  { borough: "Staten Island", rate: 10.3 },
  { borough: "Queens", rate: 9.1 },
];

// NYC overall average asthma ED visit rate (for ReferenceLine)
const NYC_AVG_ASTHMA = 16.1;

export default function ChartsSection() {
  return (
    <section className="space-y-16">
      <div>
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
          Average PM2.5 Concentration by Neighborhood Racial Majority
        </h2>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-6 leading-relaxed">
          Annual average fine particulate matter (PM2.5) in µg/m³ across NYC
          neighborhoods, grouped by majority racial demographic. Majority-Black
          and majority-Hispanic neighborhoods carry a meaningfully higher air
          pollution load than majority-white neighborhoods, a pattern produced
          by decades of decisions about where to site highways, power plants,
          and waste facilities.
          <br />
          <span className="italic">
            Source:{" "}
            <a
              href="https://data.cityofnewyork.us/Environment/Air-Quality/c3uy-2p5r"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
            >
              NYC Community Air Survey (NYCCAS) · NYC Open Data
            </a>{" "}
            ·{" "}
            <a
              href="https://www.census.gov/programs-surveys/acs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
            >
              2020 U.S. Census ACS
            </a>
            .
          </span>
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={pm25ByRaceData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis dataKey="group" tick={{ fill: "#57534e" }} />
            <YAxis
              tick={{ fill: "#57534e" }}
              domain={[0, 12]}
              tickFormatter={(v) => `${v}`}
              label={{
                value: "µg/m³",
                angle: -90,
                position: "insideLeft",
                offset: 0,
                fill: "#78716c",
                fontSize: 11,
              }}
            />
            <Tooltip formatter={(val) => [`${val} µg/m³`, "Avg PM2.5"]} />
            <Bar
              dataKey="pm25"
              fill="#166534"
              radius={[4, 4, 0, 0]}
              name="Avg PM2.5 (µg/m³)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
          % Black Population vs. % Disadvantaged Census Tracts by Borough
        </h2>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-6 leading-relaxed">
          The Bronx and Brooklyn (New York&apos;s two boroughs with the highest
          share of Black residents) also contain the highest proportions of
          census tracts the federal government classifies as environmentally
          &ldquo;disadvantaged.&rdquo; The correlation is not coincidental: it
          reflects historic redlining, exclusionary zoning, and deliberate
          placement of polluting infrastructure in communities of color, the
          exact patterns the United Church of Christ documented as early as
          1987.
          <br />
          <span className="italic">
            Sources:{" "}
            <a
              href="https://www.census.gov/programs-surveys/decennial-census/decade/2020/2020-census-main.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
            >
              2020 U.S. Decennial Census
            </a>{" "}
            ·{" "}
            <a
              href="https://screeningtool.geoplatform.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
            >
              White House Council on Environmental Quality, Climate and Economic
              Justice Screening Tool (CEJST, 2022)
            </a>
            .
          </span>
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={boroughBurdenData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis dataKey="borough" tick={{ fill: "#57534e" }} />
            <YAxis tick={{ fill: "#57534e" }} unit="%" domain={[0, 80]} />
            <Tooltip formatter={(val) => `${val}%`} />
            <Legend />
            <Bar
              dataKey="blackPop"
              fill="#166534"
              name="% Black Population"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="burdenTracts"
              fill="#f59e0b"
              name="% Disadvantaged Tracts (CEJST)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
          Asthma Emergency Department Visits by Borough
          <span className="block text-base font-normal text-stone-500 dark:text-stone-400 mt-0.5">
            per 10,000 residents
          </span>
        </h2>
        <p className="text-stone-500 dark:text-stone-400 text-sm mb-6 leading-relaxed">
          Asthma is one of the most measurable health consequences of chronic
          air pollution exposure. The Bronx, which has the city&apos;s highest
          concentration of Black and Hispanic residents and the densest
          industrial infrastructure, experiences asthma emergency department
          visits at more than{" "}
          <strong className="text-stone-700 dark:text-stone-300">
            three times the rate
          </strong>{" "}
          of Queens. The dashed line marks the NYC citywide average (
          {NYC_AVG_ASTHMA} per 10,000). This is environmental racism made
          visible through health outcomes, the kind of &ldquo;safety&rdquo; gap
          Derecka Purnell addresses in <em>Becoming Abolitionists</em>: true
          safety requires clean air and healthy housing, not just policing.
          <br />
          <span className="italic">
            Source:{" "}
            <a
              href="https://www.nyc.gov/site/doh/data/data-publications/profiles.page"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
            >
              NYC Department of Health and Mental Hygiene, Community Health
              Profiles (2023)
            </a>{" "}
            ·{" "}
            <a
              href="https://a816-health.nyc.gov/hdi/epiquery/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-green-700 dark:hover:text-green-400"
            >
              NYC EpiQuery
            </a>
            .
          </span>
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={asthmaRateData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis dataKey="borough" tick={{ fill: "#57534e" }} />
            <YAxis
              tick={{ fill: "#57534e" }}
              domain={[0, 35]}
              label={{
                value: "per 10,000",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                fill: "#78716c",
                fontSize: 11,
              }}
            />
            <Tooltip
              formatter={(val) => [`${val} per 10,000`, "Asthma ED Visits"]}
            />
            <ReferenceLine
              y={NYC_AVG_ASTHMA}
              stroke="#94a3b8"
              strokeDasharray="5 3"
              label={{
                value: "NYC avg",
                position: "right",
                fill: "#94a3b8",
                fontSize: 11,
              }}
            />
            <Bar
              dataKey="rate"
              fill="#166534"
              radius={[4, 4, 0, 0]}
              name="Asthma ED Visits (per 10,000)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
