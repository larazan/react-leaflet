import React from "react";

import { lp, undersvg1, bg, undersvg2, svgl } from "../assets/data/icons";

const RenderSvg = ({ c, f, g = 0 }) => {
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
  
  if (g === 0) {
    return <img src={`data:image/svg+xml;base64, ${a} `} alt={c} />;
  } else {
    return a;
  }
  
};

export default RenderSvg;
