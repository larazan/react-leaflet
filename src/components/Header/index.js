import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import Autocomplete from "../Autocomplete";
import ModalWeather from "../WeatherModal";
import Filter from "../Filter";
import RegionalOption from "../RegionalOption"
import InputSearch from "../InputSearch";
import UserDrop from "../UserDrop";
import UserDropMenu from "../UserDropMenu";
import Notifications from "../../partials/header/Notifications";
import UserMenu from "../../partials/header/UserMenu";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showWeather, setShowWeather] = useState(false);
  const [showUserDrop, setShowUserDrop] = useState(false);
  const [showSearchDrop, setShowSearchDrop] = useState(false);
  const [filOpen, setFilOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);

  const filToggle = () => {
    setFilOpen(!filOpen);
  };

  const regToggle = () => {
    setRegOpen(!regOpen);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setShowUserDrop(false));

  const openUserDrop = (e) => {
    e.stopPropagation();
    setShowUserDrop((prev) => !prev);
  };

  const openSearchDrop = (e) => {
    e.stopPropagation();
    setShowSearchDrop((prev) => !prev);
  };

  const openWeather = () => {
    console.log("weather open!");
    setShowWeather((prev) => !prev);
  };

  const clickWeather = () => {
    openWeather();
  };

  return (
    <>
      <header className="hidden md:flex z-20 md:z-20 h-10 md:h-14 w-full absolute md:absolute top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between bg-white border-b shadow">
        <div className="flex w-full md:w-3/5 justify-between space-x-4">
          <div className="flex justify-between inline-flex w-full md:w-[100px]">
            {/* <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button> */}
            <div className="flex justify-center items-center">
              <Link to={"/"} >
              <img
                className="h-5 md:h-7"
                src="https://liveuamap.com/images/logo_luam.svg"
                alt="liveuamap"
              />
              </Link>
            </div>
            <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </button>
            <button className="h-8 w-8 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>

            <button className="h-8 w-8 md:hidden" onClick={regToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className="h-8 w-8 md:hidden" onClick={openSearchDrop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <InputSearch
              showSearchDrop={showSearchDrop}
              filToggle={filToggle}
              openSearchDrop={openSearchDrop}
            />

            {/* <button className="h-8 w-8 md:hidden" onClick={openUserDrop}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <UserDrop
                showUserDrop={showUserDrop}
                setShowUserDrop={setShowUserDrop}
              />
            </button> */}
            <UserDrop />
          </div>
          <div className="hidden w-full md:flex">
            <Autocomplete
              options={["Chennai", "Mumbai", "Bangalore"]}
              value={selectedOption}
              onChange={setSelectedOption}
            />
          </div>
          {/* <div className="hidden  md:flex ">
            <Weather clickWeather={clickWeather} />
          </div> */}
          
        </div>
        <div className="flex flex-row space-x-3">
        <div className="flex">
            <button className="flex inline-flex items-center justify-center rounded border px-3 py-1.5 space-x-2 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span className="font-semibold">Posting</span>
            </button>
          </div>
          <div className="flex space-x-1">
            <button className="flex inline-flex items-center justify-center rounded border px-6 py-1.5 space-x-2 bg-[#fe2c55] opacity-90 hover:opacity-100">
              <span className="font-semibold text-white">Masuk</span>
            </button>
            <button className="flex inline-flex items-center justify-center rounded border px-6 py-1.5 space-x-2 bg-[#30ffd0] opacity-90 hover:opacity-100">
              <span className="font-semibold text-white2">Daftar</span>
            </button>
          </div>
          
            <UserDropMenu />
          
        </div>
        <Filter filOpen={filOpen} filToggle={filToggle} />
        <RegionalOption regOpen={regOpen} regToggle={regToggle} />
      </header>

      <ModalWeather showWeather={showWeather} closeWeather={setShowWeather} />
    </>
  );
};

export default Header;
