import React from "react";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import L from "leaflet";

const MapComponent = () => {
  // Define the positions for markers and polyline
  const startPosition = [23.837577, 90.367264]; // Example coordinates
  const endPosition = [23.824384, 90.355446]; // Example coordinates
  const waypoints = [
    [23.837577, 90.367264], // Start point
    [23.835577, 90.365264], // Waypoint
    [23.830577, 90.360264], // Waypoint
    [23.824384, 90.355446], // End point
  ];

  // Custom icon for markers
  const customIcon = new L.Icon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
  });

  return (
    <div className="h-screen">
      <MapContainer center={startPosition} zoom={13} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={startPosition} icon={customIcon} />
        <Marker position={endPosition} icon={customIcon} />
        <Polyline positions={waypoints} color="red" />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
