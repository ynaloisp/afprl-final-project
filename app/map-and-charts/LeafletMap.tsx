"use client";

import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// TODO: Replace these placeholder points with real dataset coordinates and values
const placeholderPoints = [
  { lat: 40.6501, lng: -73.9496, label: "Brownsville, Brooklyn", burden: "High pollution burden" },
  { lat: 40.6782, lng: -73.9442, label: "Crown Heights, Brooklyn", burden: "Elevated heat risk" },
  { lat: 40.8448, lng: -73.8648, label: "Hunts Point, Bronx", burden: "Industrial facility density" },
  { lat: 40.7282, lng: -74.0776, label: "Greenville, Jersey City (reference)", burden: "Reference point" },
  { lat: 40.7128, lng: -74.006,  label: "Lower Manhattan", burden: "Moderate burden" },
];

export default function LeafletMap() {
  return (
    <MapContainer
      center={[40.7128, -73.9]}
      zoom={11}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {placeholderPoints.map((point) => (
        <CircleMarker
          key={point.label}
          center={[point.lat, point.lng]}
          radius={10}
          pathOptions={{ color: "#166534", fillColor: "#16a34a", fillOpacity: 0.6 }}
        >
          <Popup>
            <strong>{point.label}</strong>
            <br />
            {point.burden}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
