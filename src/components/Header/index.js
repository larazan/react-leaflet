import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import Autocomplete from "../Autocomplete";
import Weather from "../Weather";
import ModalWeather from "../WeatherModal";
import Filter from "../Filter";
import RegionalOption from "../RegionalOption";

import compass from "../../assets/icons/compass.svg";

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
      <header className="z-20 h-10 md:h-14 w-screen absolute top-0 md:top-0 m-0 md:m-0 px-4 md:px-5 py-2 md:py-3 flex items-center justify-between bg-white border-b">
        <div className="flex w-full md:w-3/5 justify-between">
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
              <img
                className="h-5 md:h-7"
                src="https://liveuamap.com/images/logo_luam.svg"
                alt="liveuamap"
              />
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
            {showSearchDrop && (
              <div
                className={`w-full md:w-72 ${
                  showSearchDrop === false ? "hidden" : ""
                }  right-0 mt-9 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
              >
                <div className="flex py-1.5 px-2 space-x-3">
                  <div className="w-full relative text-gray-600 border-2 border-gray-400/100">
                    <input
                      type="search"
                      name="serch"
                      placeholder="Search"
                      className="w-full bg-white h-8 px-2 pr-10 text-sm "
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-2 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                  </div>
                  <button onClick={filToggle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </button>
                  <button onClick={openSearchDrop}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="pt-2 pb-4">
                  <ul className="px-4">
                    <li className="">
                      <a
                        href="#"
                        className="flex justify-between block text-sm text-gray-600 whitespace-nowrap capitalize px-2 py-3 border-b hover:bg-gray-100"
                      >
                        <span className="pl-2">promosi</span>
                        <button className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 transform rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="#"
                        className="flex justify-between block text-sm text-gray-600 whitespace-nowrap capitalize px-2 py-3 border-b hover:bg-gray-100"
                      >
                        <span className="pl-2">bisnis</span>
                        <button className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 transform rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    <li className="">
                      <a
                        href="#"
                        className="flex justify-between block text-sm text-gray-600 whitespace-nowrap capitalize px-2 py-3 border-b hover:bg-gray-100"
                      >
                        <span className="pl-2">diskon</span>
                        <button className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 transform rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <button className="h-8 w-8 md:hidden" onClick={openUserDrop}>
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
              {showUserDrop && (
                <div
                  ref={ref}
                  className={`sm:w-72 md:w-72 ${
                    showUserDrop === false ? "hidden" : ""
                  }  right-2 mt-2 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
                >
                  <div className="py-2">
                    <ul className="flex-col font-sans items-center justify-center text-sm">
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Atur Profil</span>
                          </div>
                        </li>
                      </Link>
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
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
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span>Pengaturan & privasi</span>
                          </div>
                        </li>
                      </Link>
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
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
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>Informasi</span>
                          </div>
                        </li>
                      </Link>
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
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
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>Pusat Bantuan</span>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className="hidden md:flex">
            <Autocomplete
              options={["Chennai", "Mumbai", "Bangalore"]}
              value={selectedOption}
              onChange={setSelectedOption}
            />
          </div>
          <div className="hidden md:flex ">
            <Weather clickWeather={clickWeather} />
          </div>
        </div>
        <Filter filOpen={filOpen} filToggle={filToggle} />
        <RegionalOption regOpen={regOpen} regToggle={regToggle} />
      </header>

      <ModalWeather showWeather={showWeather} closeWeather={setShowWeather} />
    </>
  );
};

export default Header;
