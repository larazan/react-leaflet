import React, { memo, useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import axios from "axios";

import symbolIdList from "../icon";
import Carousel from "../components/Carousel";

const Coba = memo(() => {
  const url = `https://hargapangan.id/index.php?option=com_gtpihps&task=json.commodityPrices&province_id=0&price_type_id=1&_=1659174441179`;

  const getData = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      console.log("Response: ", response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className="flex z-0 outline-0 relative mt-10">
            <Carousel />
          </div>
        </div>
      </main>
    </>
  );
});

export default Coba;
