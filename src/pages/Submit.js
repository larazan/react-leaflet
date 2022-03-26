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

import ContentSubmit from "../components/ContentSubmit";
import Sidebar from "../components/Sidebar";
import useGeoLocation from "../hooks/useGeolocation";

import mark from "../assets/icons/marker.png";

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
    } else {
      alert(location.error.message);
    }
  };

  console.log(position);

  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
        {/* <Sidebar /> */}
          <div className="flex z-0 outline-0 relative lg:w-4/5 md:w-4/6 ">
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

              <ZoomControl position="bottomright" />

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
            </MapContainer>
          </div>
          <div className="flex w-2/6">
            <ContentSubmit position={position} showMyLocation={showMyLocation} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Submit;
