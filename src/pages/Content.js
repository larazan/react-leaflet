import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

import ContentNews from "../components/ContentNews";
import RenderMarker from "../components/RenderMarker";

import news from "../assets/data/news.json";

import imgCar from "../assets/icons/download.svg";
import imgExplode from "../assets/icons/exploison.svg";
import imgRifle from "../assets/icons/rifle.svg";
import imgKilled from "../assets/icons/killed.svg";

const markerIcon = L.Icon.extend({
  options: {
    iconSize: [39, 39],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  },
});

const getIcon = (iconName) => {
  let mapIcon = "";
  switch (iconName) {
    case "carIcon":
      mapIcon = new markerIcon({ iconUrl: imgCar });
      break;
    case "explodeIcon":
      mapIcon = new markerIcon({ iconUrl: imgExplode });
      break;
    case "rifleIcon":
      mapIcon = new markerIcon({ iconUrl: imgRifle });
      break;
    case "killedIcon":
      mapIcon = new markerIcon({ iconUrl: imgKilled });
      break;
  }
  return mapIcon;
};

const Content = () => {
  const [map, setMap] = useState(null);
  const [lat, setLat] = useState(-7.2491);
  const [lng, setLng] = useState(112.7508);
  const [center, setCenter] = useState({ lat: -7.2491, lng: 112.7508 });
  const ZOOM_LEVEL = 12;
  const [coor, setCoor] = useState({lat: -7.2491, lng: 112.7508});

  const handleOnFlyTo = (coorLat, coorLng) => {
    console.log("tofly");
    const co = [parseFloat(coorLat), parseFloat(coorLng)]
    map.flyTo(co, 14, {
      duration: 1,
    });
  }
  
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

              <ZoomControl position="bottomleft" />
              {news.map((city, idx) => (
                city.lat === '' ? null : 
                <Marker
                  position={[city.lat, city.lng]}
                  icon={getIcon(city.icon)}
                  // icon={<RenderMarker ma={city.icon} />}
                  key={idx}
                >
                  <Popup>
                    <b>{city.title}</b>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
          <div className="flex w-2/5">
            <ContentNews news={news} handleOnFlyTo={handleOnFlyTo} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
