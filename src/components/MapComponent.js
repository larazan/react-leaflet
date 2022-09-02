import React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapRef } from "./MapRef";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import mark from "../assets/icons/marker.png";

Leaflet.Icon.Default.imagePath = "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/";

function MapComponent({ onMarkerClick, selected }) {
  const style = {
    height: "100%",
    width: "100%"
  };

  return (
    <div style={style} className="md:flex md:flex-no-wrap">
      <MapContainer center={[51.505, -0.09]} zoom={5} className="relative h-screen w-screen w-[100%] h-[100%]">
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {/* <MapRef
          width='100'
          height='100'
          onMarkerClick={onMarkerClick}
          selected={selected}
        /> */}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
