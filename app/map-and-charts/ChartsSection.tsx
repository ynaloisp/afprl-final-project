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
  PieChart,
  Pie,
  Cell,
} from "recharts";

// TODO: Replace placeholder data with real values from your chosen dataset
const pollutionByRaceData = [
  { group: "Black", score: 62 },
  { group: "Hispanic", score: 55 },
  { group: "White", score: 31 },
  { group: "Asian", score: 44 },
];

const waterBurdenData = [
  { borough: "Bronx", blackPop: 43, highBurden: 58 },
  { borough: "Brooklyn", blackPop: 36, highBurden: 49 },
  { borough: "Manhattan", blackPop: 17, highBurden: 22 },
  { borough: "Queens", blackPop: 22, highBurden: 31 },
  { borough: "Staten Island", blackPop: 12, highBurden: 18 },
];

const facilityProximityData = [
  { name: "Black communities", value: 45 },
  { name: "Hispanic communities", value: 28 },
  { name: "White communities", value: 15 },
  { name: "Other", value: 12 },
];

const COLORS = ["#166534", "#15803d", "#86efac", "#d1fae5"];

export default function ChartsSection() {
  return (
    <section className="space-y-16">
      {/* Chart 1 */}
      <div>
        <h2 className="text-2xl font-semibold text-stone-900 mb-2">
          Environmental Pollution Burden by Race
        </h2>
        <p className="text-stone-500 text-sm mb-6 leading-relaxed">
          Average cumulative pollution burden score by racial group. Higher
          scores indicate greater exposure to environmental hazards.{" "}
          <span className="italic">
            {/* TODO: Update citation once real dataset is chosen */}
            (Placeholder data — replace with real values from OpenData NYC or CEJST.)
          </span>
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pollutionByRaceData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis dataKey="group" tick={{ fill: "#57534e" }} />
            <YAxis tick={{ fill: "#57534e" }} />
            <Tooltip />
            <Bar dataKey="score" fill="#166534" radius={[4, 4, 0, 0]} name="Burden Score" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2 */}
      <div>
        <h2 className="text-2xl font-semibold text-stone-900 mb-2">
          % Black Population vs. % High Environmental Burden Tracts by Borough
        </h2>
        <p className="text-stone-500 text-sm mb-6 leading-relaxed">
          Comparing the share of Black residents with the share of census tracts
          rated high environmental burden per borough.{" "}
          <span className="italic">
            (Placeholder data — replace with real values.)
          </span>
        </p>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={waterBurdenData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
            <XAxis dataKey="borough" tick={{ fill: "#57534e" }} />
            <YAxis tick={{ fill: "#57534e" }} unit="%" />
            <Tooltip formatter={(val) => `${val}%`} />
            <Legend />
            <Bar dataKey="blackPop" fill="#166534" name="% Black Population" radius={[4, 4, 0, 0]} />
            <Bar dataKey="highBurden" fill="#f59e0b" name="% High Burden Tracts" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 3 */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-stone-900 mb-2">
            Industrial Facility Proximity by Community
          </h2>
          <p className="text-stone-500 text-sm mb-4 leading-relaxed">
            Share of industrial facilities located within 1 mile of
            communities by racial majority.{" "}
            <span className="italic">
              (Placeholder data — replace with real values.)
            </span>
          </p>
          <ul className="space-y-1 text-sm text-stone-600">
            {facilityProximityData.map((entry, i) => (
              <li key={entry.name} className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ backgroundColor: COLORS[i] }}
                />
                {entry.name}: <strong>{entry.value}%</strong>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-shrink-0">
          <PieChart width={220} height={220}>
            <Pie
              data={facilityProximityData}
              cx={105}
              cy={105}
              outerRadius={90}
              dataKey="value"
            >
              {facilityProximityData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(val) => `${val}%`} />
          </PieChart>
        </div>
      </div>
    </section>
  );
}
