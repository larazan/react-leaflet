import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import news from "../../assets/data/news.json";
import imgCar from "../../assets/icons/download.svg";
import imgExplode from "../../assets/icons/exploison.svg";
import imgRifle from "../../assets/icons/rifle.svg";
import imgKilled from "../../assets/icons/killed.svg";

const markerIcon = L.Icon.extend({
  options:{
    iconSize: [39, 39],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
  }
});

const carIcon = new markerIcon({iconUrl: imgCar})
const explodeIcon = new markerIcon({iconUrl: imgExplode})
const rifleIcon = new markerIcon({iconUrl: imgRifle})
const killedIcon = new markerIcon({iconUrl: imgKilled})

const getIcon = (iconName) => {
  let mapIcon = ''
  switch (iconName) {
    case 'carIcon':
      mapIcon = carIcon
      break;
    case 'explodeIcon':
      mapIcon = explodeIcon
      break;
    case 'rifleIcon':
      mapIcon = rifleIcon
      break;
    case 'killedIcon':
      mapIcon = killedIcon
      break;  
  }
  return mapIcon
}

const MapCanvas = () => {
  const [map, setMap] = useState(null)
  const [lat, setLat] = useState(-7.2491);
  const [lng, setLng] = useState(112.7508);
  const [center, setCenter] = useState({ lat: -7.2491, lng: 112.7508 });
  const ZOOM_LEVEL = 12;

  return (
    <MapContainer center={center} zoom={ZOOM_LEVEL} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

    </MapContainer>
  );
};

export default MapCanvas;
