"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HVI_COLORS: Record<number, string> = {
  1: "#22c55e",
  2: "#84cc16",
  3: "#eab308",
  4: "#f97316",
  5: "#dc2626",
};

const HVI_LABELS: Record<number, string> = {
  1: "Lowest risk (1)",
  2: "Low-moderate risk (2)",
  3: "Moderate risk (3)",
  4: "High risk (4)",
  5: "Highest risk (5)",
};

// % Black or African American alone by ZCTA — 2022 ACS 5-year estimates (U.S. Census Bureau)
const PCT_BLACK: Record<string, number> = {
  "10001": 8.7,
  "10002": 8.9,
  "10003": 5.4,
  "10004": 5.8,
  "10005": 4.8,
  "10006": 6.0,
  "10007": 8.6,
  "10009": 7.7,
  "10010": 8.5,
  "10011": 4.6,
  "10012": 2.8,
  "10013": 3.3,
  "10014": 2.2,
  "10016": 4.8,
  "10017": 3.2,
  "10018": 6.3,
  "10019": 6.1,
  "10021": 0.4,
  "10022": 1.4,
  "10023": 5.5,
  "10024": 2.6,
  "10025": 10.8,
  "10026": 50.3,
  "10027": 35.9,
  "10028": 1.6,
  "10029": 29.3,
  "10030": 58.4,
  "10031": 27.7,
  "10032": 16.9,
  "10033": 7.2,
  "10034": 12.3,
  "10035": 40.3,
  "10036": 7.5,
  "10037": 65.8,
  "10038": 10.8,
  "10039": 57.4,
  "10040": 6.3,
  "10044": 13.5,
  "10065": 2.5,
  "10069": 3.3,
  "10075": 2.2,
  "10103": 0,
  "10128": 5.3,
  "10152": 0,
  "10278": 0,
  "10280": 1.7,
  "10282": 2.1,
  "10301": 21.5,
  "10302": 22.7,
  "10303": 32.4,
  "10304": 27.4,
  "10305": 4.7,
  "10306": 4.0,
  "10307": 0.1,
  "10308": 0.7,
  "10309": 0.5,
  "10310": 23.3,
  "10312": 1.0,
  "10314": 3.5,
  "10451": 45.3,
  "10452": 35.6,
  "10453": 32.4,
  "10454": 31.9,
  "10455": 29.8,
  "10456": 46.9,
  "10457": 42.8,
  "10458": 18.5,
  "10459": 34.1,
  "10460": 35.0,
  "10461": 9.9,
  "10462": 25.4,
  "10463": 15.5,
  "10464": 1.5,
  "10465": 15.5,
  "10466": 64.2,
  "10467": 32.0,
  "10468": 23.9,
  "10469": 55.1,
  "10470": 34.6,
  "10471": 10.2,
  "10472": 26.7,
  "10473": 37.8,
  "10474": 32.6,
  "10475": 64.0,
  "11001": 5.9,
  "11004": 5.4,
  "11005": 0.0,
  "11101": 10.9,
  "11102": 7.5,
  "11103": 2.7,
  "11104": 3.1,
  "11105": 4.4,
  "11106": 7.5,
  "11109": 1.2,
  "11201": 12.0,
  "11203": 82.1,
  "11204": 0.8,
  "11205": 23.1,
  "11206": 22.5,
  "11207": 60.9,
  "11208": 48.9,
  "11209": 3.4,
  "11210": 53.1,
  "11211": 6.6,
  "11212": 73.1,
  "11213": 59.0,
  "11214": 2.2,
  "11215": 4.0,
  "11216": 46.2,
  "11217": 17.7,
  "11218": 9.6,
  "11219": 1.6,
  "11220": 2.5,
  "11221": 43.2,
  "11222": 3.0,
  "11223": 5.6,
  "11224": 21.4,
  "11225": 55.3,
  "11226": 64.5,
  "11228": 1.2,
  "11229": 6.2,
  "11230": 8.8,
  "11231": 12.8,
  "11232": 7.2,
  "11233": 70.6,
  "11234": 43.7,
  "11235": 2.6,
  "11236": 81.5,
  "11237": 12.5,
  "11238": 26.9,
  "11239": 66.2,
  "11249": 8.8,
  "11354": 2.9,
  "11355": 2.8,
  "11356": 0.9,
  "11357": 0.7,
  "11358": 1.1,
  "11360": 1.3,
  "11361": 3.9,
  "11362": 2.7,
  "11363": 0.6,
  "11364": 3.0,
  "11365": 11.8,
  "11366": 5.4,
  "11367": 8.5,
  "11368": 9.4,
  "11369": 17.6,
  "11370": 11.3,
  "11372": 3.3,
  "11373": 1.5,
  "11374": 4.1,
  "11375": 3.3,
  "11377": 2.4,
  "11378": 1.3,
  "11379": 1.3,
  "11385": 3.7,
  "11411": 87.8,
  "11412": 81.6,
  "11413": 87.4,
  "11414": 4.2,
  "11415": 8.0,
  "11416": 5.0,
  "11417": 8.5,
  "11418": 8.8,
  "11419": 14.9,
  "11420": 22.2,
  "11421": 5.2,
  "11422": 80.7,
  "11423": 33.7,
  "11426": 5.9,
  "11427": 22.7,
  "11428": 20.8,
  "11429": 67.1,
  "11432": 17.3,
  "11433": 56.2,
  "11434": 80.0,
  "11435": 25.0,
  "11436": 62.9,
  "11439": 22.3,
  "11691": 43.4,
  "11692": 57.8,
  "11693": 23.8,
  "11694": 7.5,
  "11697": 0.2,
};

export default function LeafletMap() {
  const [geoJson, setGeoJson] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(
        "https://data.cityofnewyork.us/resource/4mhf-duep.json?$limit=300",
      ).then((r) => r.json()),
      fetch(
        "https://data.cityofnewyork.us/resource/pri4-ifjk.geojson?$limit=300",
      ).then((r) => r.json()),
    ])
      .then(([hviRows, geoData]) => {
        // Build zcta20 → hvi score lookup
        const hviLookup: Record<string, number> = {};
        for (const row of hviRows as Array<{ zcta20: string; hvi: string }>) {
          hviLookup[row.zcta20] = parseInt(row.hvi, 10);
        }

        // Augment each GeoJSON feature with its HVI score, drop unmatched
        const augmented = {
          ...geoData,
          features: (geoData.features as any[])
            .map((f) => ({
              ...f,
              properties: {
                ...f.properties,
                hvi: hviLookup[f.properties.modzcta] ?? 0,
              },
            }))
            .filter((f) => f.properties.hvi > 0),
        };

        setGeoJson(augmented);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-stone-900/80"
          style={{ zIndex: 1000 }}
        >
          <p className="text-stone-500 text-sm">
            Loading heat vulnerability data from NYC Open Data…
          </p>
        </div>
      )}
      {error && !loading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-white/80"
          style={{ zIndex: 1000 }}
        >
          <p className="text-red-500 text-sm">Could not load data: {error}</p>
        </div>
      )}
      <MapContainer
        center={[40.73, -73.95]}
        zoom={11}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geoJson && (
          <GeoJSON
            key={(geoJson as { features: unknown[] }).features?.length}
            data={geoJson as any}
            style={(feature: any) => ({
              fillColor:
                HVI_COLORS[feature?.properties?.hvi as number] ?? "#94a3b8",
              fillOpacity: 0.78,
              color: "#ffffff",
              weight: 0.7,
            })}
            onEachFeature={(feature: any, layer: any) => {
              const score = feature.properties?.hvi as number;
              const zip = feature.properties?.modzcta as string;
              const label = (feature.properties?.label as string) || zip;
              const pctBlack = PCT_BLACK[zip];
              const blackLine =
                pctBlack !== undefined
                  ? `<br />Black residents: <strong>${pctBlack}%</strong>`
                  : "";
              layer.bindPopup(
                `<strong>ZIP: ${label}</strong><br />` +
                  `HVI score: <strong>${score}&thinsp;/&thinsp;5</strong><br />` +
                  `<span style="color:${HVI_COLORS[score]};font-weight:600">${HVI_LABELS[score] ?? ""}</span>` +
                  blackLine,
              );
              layer.on(
                "mouseover",
                function (this: { setStyle: (s: object) => void }) {
                  this.setStyle({ fillOpacity: 0.95, weight: 2 });
                },
              );
              layer.on(
                "mouseout",
                function (this: { setStyle: (s: object) => void }) {
                  this.setStyle({ fillOpacity: 0.78, weight: 0.7 });
                },
              );
            }}
          />
        )}
      </MapContainer>
    </div>
  );
}
