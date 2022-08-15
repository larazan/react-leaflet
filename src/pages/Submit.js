import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import { useParams } from "react-router-dom";

import ContentSubmit from "../components/ContentSubmit";
import useGeoLocation from "../hooks/useGeolocation";
import MiniMap from "../components/MiniMap";

import mark from "../assets/icons/marker.png";

import "../peta.css";

const markerIcon = L.Icon.extend({
    options: {
      iconSize: [39, 39],
      iconAnchor: [17, 46], //[left/right, top/bottom]
      popupAnchor: [0, -46], //[left/right, top/bottom]
    },
  });
  
const marker = new markerIcon({ iconUrl: mark });


const Submit = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(null);
  const [center, setCenter] = useState({ lat: -7.2491, lng: 112.7508 });
  const ZOOM_LEVEL = 12;
  
  const location = useGeoLocation();

  let { cat } = useParams();

  const HandleClickMap = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        setPosition(e.latlng);
        map.flyTo(e.latlng);
      },
    });

    return position == null ? null : <Marker position={position} icon={marker}></Marker>;
    // return null
  };

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      map.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        14,
        { animate: true }
      );
      setPosition({ lat: location.coordinates.lat, lng: location.coordinates.lng })
    } else {
      alert(location.error.message);
    }
  };

  console.log(position);

  return (
    <>
      <main>
        <div className="flex flex-col md:flex-row relative2 md:flex-no-wrap">
        {/* <Sidebar /> */}
          <div className="peta flex relative z-0 inset-4 md:inset-x-0 md:top-0 md:outline-0 md:h-screen  md:w-3/6 lg:w-4/6">
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

              <HandleClickMap />

              {location.loaded && !location.error && (
                <Marker
                  icon={marker}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ></Marker>
              )}
              {/* <Marker position={center} icon={marker}>
                <Popup>
                  <b>hello</b>
                </Popup>
              </Marker> */}
              <MiniMap position="bottomright"  />
            </MapContainer>
          </div>
          <div className="flex w-full md:w-3/6 lg:2/6">
            <ContentSubmit position={position} showMyLocation={showMyLocation} catName={cat} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Submit;
