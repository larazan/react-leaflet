import React, { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";

import { lp, undersvg1, bg, undersvg2, svgl } from "../../assets/data/icons";

import imag from "../../assets/images/22399054_0.jpg";
import imag2 from "../../assets/images/22399259_0.jpg";
import imag3 from "../../assets/images/22399192_0.jpg";
import bakery from "../../assets/images/bakery.jpg";
import bmkg from "../../assets/images/bmkg.jpg";
import tenis from "../../assets/images/tenis.jpg";
import even from "../../assets/images/even.jpg";
import ied from "../../assets/images/ied.jpg";
import pln from "../../assets/images/pln.jpg";
import bbm from "../../assets/images/bbm.jpg";

const getImage = (imgName) => {
  let imgNews = "";
  switch (imgName) {
    case "imag":
      imgNews = imag;
      break;
    case "imag2":
      imgNews = imag2;
      break;
    case "imag3":
      imgNews = imag3;
      break;
    case "bakery":
      imgNews = bakery;
      break;
    case "bmkg":
      imgNews = bmkg;
      break;
    case "tenis":
      imgNews = tenis;
      break;
    case "pln":
      imgNews = pln;
      break;
    case "even":
      imgNews = even;
      break;
    case "ied":
      imgNews = ied;
      break;
    case "bbm":
      imgNews = bbm;
      break;
  }

  return imgNews;
};

const returnsvg = (c, f) => {
  var a = c.split("-"),
    e = undersvg1,
    l = "#ffc600";
  6 === a[1] && (l = "#ffffff");
  // f && (e += lp.replace("#ED1F24", l));
  if (f === -1) e += lp.replace("#ED1F24", l);
  var m = svgl[a[0]];

  switch (a[1]) {
    case "1":
      e +=
        bg.replace("#27286D", "#801615") +
        undersvg2.replace("#00AEEF", "#d65431").replace("#2E3192", "#b51c1c");
      break;
    case "2":
      e +=
        bg.replace("#27286D", "#1c437a") +
        undersvg2.replace("#00AEEF", "#1b6bd9").replace("#2E3192", "#2257a5");
      break;
    case "3":
      e +=
        bg.replace("#27286D", "#313131") +
        undersvg2.replace("#00AEEF", "#5d5d5d").replace("#2E3192", "#3a3a3a");
      break;
    case "4":
      e +=
        bg.replace("#27286D", "#17641b") +
        undersvg2.replace("#00AEEF", "#55a934").replace("#2E3192", "#0c871a");
      break;
    case "5":
      e +=
        bg.replace("#27286D", "#8a8a8a") +
        undersvg2.replace("#00AEEF", "#e5dada").replace("#2E3192", "#c8c8c8");
      l = l.replace(/#FFFFFF/g, "#ff3333");
      break;
    case "6":
      e +=
        bg.replace("#27286D", "#17641b") +
        undersvg2.replace("#00AEEF", "#ffc600").replace("#2E3192", "#ffc600");
      break;
    case "7":
      e +=
        bg.replace("#27286D", "#000080") +
        undersvg2.replace("#00AEEF", "#000080").replace("#2E3192", "#13315d");
      break;
    case "8":
      e +=
        bg.replace("#27286D", "#006400") +
        undersvg2.replace("#00AEEF", "#006400").replace("#2E3192", "#26682c");
      break;
    case "9":
      e +=
        bg.replace("#27286D", "#800080") +
        undersvg2.replace("#00AEEF", "#800080").replace("#2E3192", "#dd44aa");
      break;
    case "10":
      e +=
        bg.replace("#27286D", "#964B00") +
        undersvg2.replace("#00AEEF", "#964B00").replace("#2E3192", "#964B00");
      break;
    case "11":
      e +=
        bg.replace("#27286D", "#FF8000") +
        undersvg2.replace("#00AEEF", "#FF8000").replace("#2E3192", "#FF8000");
      break;
    case "12":
      e += undersvg2
        .replace("#00AEEF", "#FFFFFF")
        .replace("#2E3192", "#FFFFFF");
      break;
    default:
      e +=
        bg.replace("#27286D", "#8a8a8a") +
        undersvg2.replace("#00AEEF", "#aaa880").replace("#2E3192", "#e2e2d0");
    // (l = l.replace(/#FFFFFF/g, "#c65411"));
  }

  a = (f === 4) ? window.btoa(e + m.replaceAll("#FFFFFF", "#000000") + "</svg>") : window.btoa(e + m + "</svg>");
  return a;
}


const markerIcon = L.Icon.extend({
  options: {
    iconSize: [39, 39],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
    className: "drop-shadow-md",
  },
});

const RenderMarker = ({
  news,
  handleOnMarkerFlyTo,
  handleId,
  selectedIndex,
  setSelectedIndex,
}) => {
  const getIcon = (iconName, index) => {

    console.log(iconName);

    if (index === selectedIndex) {
      return new markerIcon({ iconUrl: "data:image/svg+xml;base64," + returnsvg(iconName, -1) });  //`${<RenderSvg c={iconName} f={-1} g={1} />}` });
    } else {
      return new markerIcon({ iconUrl: "data:image/svg+xml;base64," + returnsvg(iconName, 1) }); //`${<RenderSvg c={iconName} f={1} g={1} />}` });
    }

  };

  const clickMarkerHandler = (e) => {
    const lat = e.lat;
    const lng = e.lng;
    if (lat) {
      handleOnMarkerFlyTo(lat, lng);
    }
  };

  const idHandler = (id) => {
    // console.log(id);
    handleId(id);
  };

  // console.log(selectedIndex);

  ///////////////////////////////

  

  const replaceWithBr = (title) => {
    return title.replace(/\n/g, "<br />")
  }

  return (
    <>
      {news.map((city, index) =>
        city.lat === "" ? null : (
          <Marker
            key={index}
            index={index}
            position={[city.lat, city.lng]}
            icon={getIcon(city.ikon, index)}
            // onclick={handleClick}
            eventHandlers={{
              click: (e) => {
                console.log("marker clicked", e);
                console.log(e.latlng);
                clickMarkerHandler(e.latlng);
                idHandler(city.id);
                setSelectedIndex(e.target.options.index);
              },
            }}
          >
            <Popup>
            {city.images ? (
                  <div className="py-2">
                    <img
                      className="w-full"
                      src={getImage(city.images)}
                      alt="image"
                    />
                  </div>
                ) : (
                  <div className="py-3"></div>
                )}
              <div
                  dangerouslySetInnerHTML={{__html: replaceWithBr(city.title)}}
                  className="font-light text-gray-700"
                />
                
              
            </Popup>
          </Marker>
        )
      )}
    </>
  );
};

export default RenderMarker;
