import React from 'react'
import L from "leaflet";

import imgCar from "../../assets/icons/download.svg";
import imgExplode from "../../assets/icons/exploison.svg";
import imgRifle from "../../assets/icons/rifle.svg";
import imgKilled from "../../assets/icons/killed.svg";

const markerIcon = L.Icon.extend({
    options: {
      iconSize: [39, 39],
      iconAnchor: [17, 46], //[left/right, top/bottom]
      popupAnchor: [0, -46], //[left/right, top/bottom]
    },
  });
  
  const carIcon = new markerIcon({ iconUrl: imgCar });
  const explodeIcon = new markerIcon({ iconUrl: imgExplode });
  const rifleIcon = new markerIcon({ iconUrl: imgRifle });
  const killedIcon = new markerIcon({ iconUrl: imgKilled });
  
  const getIcon = (iconName) => {
    let mapIcon = "";
    switch (iconName) {
      case "carIcon":
        mapIcon = carIcon;
        break;
      case "explodeIcon":
        mapIcon = explodeIcon;
        break;
      case "rifleIcon":
        mapIcon = rifleIcon;
        break;
      case "killedIcon":
        mapIcon = killedIcon;
        break;
    }
    return mapIcon;
  };

const RenderMarker = ({ ma }) => {
    
  return getIcon(ma)
}

export default RenderMarker