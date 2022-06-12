import React from "react";

import imgCar from "../../assets/icons/download.svg";
import imgExplode from "../../assets/icons/exploison.svg";
import imgRifle from "../../assets/icons/rifle.svg";
import imgKilled from "../../assets/icons/killed.svg";


const RenderIcon = ({ ic }) => {
  const getIcon = (iconName) => {
    let mapIcon = "";
    switch (iconName) {
      case "carIcon":
        mapIcon = imgCar;
        break;
      case "explodeIcon":
        mapIcon = imgExplode;
        break;
      case "rifleIcon":
        mapIcon = imgRifle;
        break;
      case "killedIcon":
        mapIcon = imgKilled;
        break;
    }
    return mapIcon;
  };

  return (
    <>
      <img src={getIcon(ic)} alt="" />
    </>
  );
};

export default RenderIcon;
