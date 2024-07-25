"use client";

import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const popupIcon = L.icon({
  iconUrl: "/icon-location.svg",
  iconSize: [40, 50],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});

function Map({ location }) {
  return (
    <MapContainer
      center={location}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapUpdater location={location} />
      <Marker position={location} icon={popupIcon}></Marker>
    </MapContainer>
  );
}

function MapUpdater({ location }) {
  const map = useMap();

  useEffect(() => {
    map.setView(location);
  }, [location, map]);

  return null;
}

export default Map;
