import React, { useState } from "react";
import { Link } from "react-router-dom";

import Autocomplete from "../Autocomplete";
import Weather from "../Weather";
import ModalWeather from "../ModalWeather";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showWeather, setShowWeather] = useState(false);

  const openWeather = () => {
    console.log("weather open!");
    setShowWeather((prev) => !prev);
  };

  const clickWeather = () => {
    openWeather()
  }

  return (
    <>
      <header className="z-20 h-14 w-screen absolute  top-0 px-5 py-3 flex items-center justify-between bg-white border-b">
        <div className="flex w-3/5 justify-between">
          <div className="flex inline-flex">
            <button className="h-8 w-8 md:hidden">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div className="flex">
              <img
                className="h-9"
                src="https://liveuamap.com/images/logo_luam.svg"
                alt="liveuamap"
              />
            </div>
          </div>
          <div className="">
            <Autocomplete
              options={["Chennai", "Mumbai", "Bangalore"]}
              value={selectedOption}
              onChange={setSelectedOption}
            />
          </div>
          <Weather clickWeather={clickWeather} />
        </div>

        <div className="w-[360px] px-4 bg-cyan-500">
          <div className="flex justify-between pl-4"></div>
        </div>
      </header>

      <ModalWeather showWeather={showWeather} closeWeather={setShowWeather} />
    </>
  );
};

export default Header;
