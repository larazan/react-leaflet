import React, { useState, useRef, useEffect } from "react";
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
import Header2 from "../components/Header2";

import news from "../assets/data/news.json";
import cities from "../assets/data/kota.json";

const Content = () => {
  const [subdomain, setSubdomain] = useState(null)
  const [map, setMap] = useState(null);
  const [selected, setSelected] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [center, setCenter] = useState({ lat: -7.2491, lng: 112.7508 });
  const ZOOM_LEVEL = 12;

  const [newsActive, setNewsActive] = useState(true)
  const [mapActive, setMapActive] = useState(false)

  const clickNewsPageActive = () => {
    console.log('NEWS PAGE ACTIVE');
    setNewsActive(true)
    setMapActive(false)
  } 

  const clickMapPageActive = () => {
    console.log('MAP PAGE ACTIVE');
    setNewsActive(false)
    setMapActive(true)
  } 

  useEffect(() => {
    const host = window.location.host;

    const arr = host
        .split(".")
        .slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) setSubdomain(arr[0])
  }, [])

  const requestedCity = cities.find((city) => city.city.toLowerCase() === subdomain)
 
  console.log(requestedCity);

  if (requestedCity) {
    const newLat = requestedCity.location.lat 
    const newLng = requestedCity.location.lng
    const co = [parseFloat(newLat), parseFloat(newLng)]
    map.flyTo(co, 14, {
      duration: 1,
    });
  }

  // useEffect(() => {
    
   
  // }, [subdomain])
  

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
    var h = 150;
    const el = document.getElementById(id)
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setSelected(id)
  }

  
  return (
    <>
    <Header2 clickNewsPageActive={clickNewsPageActive} clickMapPageActive={clickMapPageActive} />
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className={`flex z-0 outline-0 relative ${mapActive === true ? 'flex' : 'hidden md:flex' } lg:w-4/5 md:w-3/5 `}>
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
              newsActive={newsActive}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
