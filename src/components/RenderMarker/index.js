import React from "react";
import {
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
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

const RenderMarker = ({ news, handleOnMarkerFlyTo, handleId }) => {

  const clickMarkerHandler = (e) => {
    const lat = e.lat;
    const lng = e.lng;
    if (lat) {
      handleOnMarkerFlyTo(lat,lng)
    }
  }

  const idHandler = (id) => {
    // console.log(id);
    handleId(id)
  }

  return (
    <>
      {news.map((city, idx) =>
        city.lat === "" ? null : (
          <Marker
            position={[city.lat, city.lng]}
            icon={getIcon(city.icon)}
            key={idx}
            eventHandlers={{
              click: (e) => {
                console.log('marker clicked', e)
                // console.log(idx);
                console.log(e.latlng);
                clickMarkerHandler(e.latlng)
                idHandler(city.id)
              },
            }}
          >
            <Popup>
              <b>{city.title}</b>
            </Popup>
          </Marker>
        )
      )}
    </>
  );
};

export default RenderMarker;
