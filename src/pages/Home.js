import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import Tabs from "../components/Tabs";

import mark from "../assets/icons/marker.png";

const markerIcon = L.Icon.extend({
  options: {
    iconSize: [39, 39],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  },
});

const marker = new markerIcon({ iconUrl: mark });

const Home = () => {
  const [map, setMap] = useState(null);
  const [lat, setLat] = useState(-7.2491);
  const [lng, setLng] = useState(112.7508);
  const [center, setCenter] = useState({ lat: -7.2491, lng: 112.7508 });
  const ZOOM_LEVEL = 12;

  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className="flex z-0 outline-0 relative lg:w-4/5 md:w-3/5 ">
            <MapContainer
              center={center}
              zoom={ZOOM_LEVEL}
              zoomControl={false}
              className="h-screen w-screen"
              whenCreated={setMap}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[lat, lng]} icon={marker}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="w-2/5">
            <Tabs />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
