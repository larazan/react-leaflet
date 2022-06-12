import React, { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

import ContentNews from "../components/ContentNews";
import RenderMarker from "../components/RenderMarker";
import Tabs from "../components/Tabs";
import MiniMap from "../components/MiniMap";

import news from "../assets/data/news.json";

const Content = () => {
  const [map, setMap] = useState(null);
  const [selected, setSelected] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [center, setCenter] = useState({ lat: -7.2491, lng: 112.7508 });
  const ZOOM_LEVEL = 12;

  const handleOnFlyTo = (coorLat, coorLng) => {
    console.log("tofly");
    const co = [parseFloat(coorLat), parseFloat(coorLng)]
    map.flyTo(co, 14, {
      duration: 1,
    });
  }

  const handleOnMarkerFlyTo = (coorLat, coorLng) => {
    console.log("tofly");
    const co = [parseFloat(coorLat), parseFloat(coorLng)]
    map.flyTo(co, 12, {
      duration: 0,
    });
    
  }

  const handleId = (id) => {
    const el = document.getElementById(id)
    el.scrollIntoView({ behavior: 'smooth' });
    // el.scroll(0, 550);
    setSelected(id)
  }

  
  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className="flex z-0 outline-0 relative hidden md:flex lg:w-4/5 md:w-3/5 ">
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
             
              <RenderMarker 
                news={news} 
                handleOnMarkerFlyTo={handleOnMarkerFlyTo} 
                handleId={handleId} 
                selectedIndex={selectedIndex} 
                setSelectedIndex={setSelectedIndex} 
              />
            
              <MiniMap position="bottomright"  />
            </MapContainer>
          </div>
          <div className="md:w-2/5">
            <Tabs 
              news={news} 
              handleOnFlyTo={handleOnFlyTo} 
              selected={selected} 
              setSelected={setSelected} 
              setSelectedIndex={setSelectedIndex} 
              handleId={handleId}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
