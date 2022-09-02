import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

import { MapRef } from "../components/MapRef";

import mark from "../assets/icons/marker.png";

const markerIcon = L.Icon.extend({
  options: {
    iconSize: [39, 39],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  },
});

const marker = new markerIcon({ iconUrl: mark });

const Wide = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(null);
  const [center, setCenter] = useState({ lat: 51.505, lng: -0.09 });
  const ZOOM_LEVEL = 5;
  const [selected, setSelected] = useState([]);

  const handleMarkerClick = (id) => {
    setSelected([...selected, id]);
  };

  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row relative2 md:flex-no-wrap">
          <div className="peta flex relative z-0 inset-4 md:inset-x-0 md:top-0 md:outline-0 md:h-screen  md:w-6/6 lg:w-4/6">
            <MapContainer
              center={center}
              zoom={ZOOM_LEVEL}
              zoomControl={false}
              className="h-screen  w-screen"
              whenCreated={setMap}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <ZoomControl position="bottomleft" />

              <Marker position={center} icon={marker} />
              <MapRef
                width="100"
                height="100"
                onMarkerClick={handleMarkerClick}
                selected={selected}
              />
            </MapContainer>
          </div>
        </div>
      </main>
    </>
  );
};

export default Wide;
