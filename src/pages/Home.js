import React, { useState } from "react";

import Carousel from "../components/Carousel";
import Header2 from "../components/Header2";

const Home = () => {
  
  return (
    <>
    {/* <Header2 clickNewsPageActive={clickNewsPageActive} clickMapPageActive={clickMapPageActive} /> */}
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className="flex z-0 outline-0 relative mt-10">
            <Carousel />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
