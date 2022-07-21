import React from "react";

import cloudy from "../../assets/images/v2/02d.png";

const WeatherModal = ({ showWeather, closeWeather }) => {
  return (
    <>
      {showWeather ? (
        <div
          className="main-modal fixed w-full h-full inset-0 z-40 flex justify-center items-center2 animated fadeIn faster overflow-y-auto"
          style={{ background: `rgba(12,15,19,.5)` }}
          // style={{ background: `rgba(251,251,251,.9)` }}
          id="my-modal"
        >
          <div className="fixed md:px-2 md:py-2 lg:px-2 lg:py-2 top-2 md:top-3 lg:top-3 xl:top-3 left-2">
            <button className="h-8 w-8" onClick={() => closeWeather(false)}>
              <svg
                className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 md:text-white lg:text-white font-bold"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="absolute sm:mt-0 md:mt-28 lg:mt-8 xl:mt-12 lg:border lg:border-teal-500 modal-container bg-white w-full md:w-6/12  md:rounded-lg lg:rounded-md md:shadow-lg lg:shadow-lg outline-none h-screen md:h-fit">
            <div className="flex justify-end py-2 px-2 md:hidden lg:hidden">
              <button className="h-8 w-8" onClick={() => closeWeather(false)}>
                <svg
                  className="h-8 w-8 font-bold"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-auto md:flex lg:flex flex-wrap -mt-8 md:-mt-0 lg:-mt-0 px-5 py-0 ">
              <div className="flex w-full inline-flex py-3 px-2 justify-between md:justify-between ">
                <div className="flex-col space-y-1">
                  <div className="h-20 w-20">
                    <img src={cloudy} alt="" />
                  </div>
                  <div>
                    <span className="text-3xl">27&#176;C</span>
                  </div>
                  <div>
                    <span className="text-sm">Tuesday</span>,{" "}
                    <span className="text-sm text-gray-400">11:27 PM</span>
                  </div>
                </div>

                <div className="flex-col pt-3">
                  <div className="flex space-x-1">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-reactroot=""
                      >
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          fill="none"
                          d="M9 14.5954V3.99927C9 2.89967 8.1 2 7 2C5.9 2 5 2.89967 5 3.99927V14.5954C3.5 15.3951 2.7 17.1944 3.1 18.9938C3.4 20.3933 4.6 21.5928 6 21.8927C8.6 22.4925 11 20.4932 11 17.9941C11 16.4947 10.2 15.1952 9 14.5954Z"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          fill="none"
                          d="M7 18.4943C7.27614 18.4943 7.5 18.2705 7.5 17.9943C7.5 17.7182 7.27614 17.4943 7 17.4943C6.72386 17.4943 6.5 17.7182 6.5 17.9943C6.5 18.2705 6.72386 18.4943 7 18.4943Z"
                        ></path>
                        <path
                          fill="none"
                          d="M13 7C14.6452 7 16 8.35484 16 10C16 11.6452 14.6452 13 13 13"
                          undefined="1"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          d="M13 7C14.6452 7 16 8.35484 16 10C16 11.6452 14.6452 13 13 13"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          d="M13 3.6V2"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          d="M18.7 15.6954L17.6 14.5954"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          d="M17.6 5.39999L18.7 4.29999"
                        ></path>
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          d="M19.4 9.99707H21"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm">Feels like 28 &#176;C</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-reactroot=""
                      >
                        <path
                          stroke-linejoin="round"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                          stroke="#293449"
                          fill="none"
                          d="M18.1 9.7C17.3 7.6 15.2 6 12.7 6C9.5 6 6.9 8.5 6.9 11.7C6.9 11.8 6.9 11.9 6.9 12C6.4 11.7 5.9 11.6 5.3 11.6C3.5 11.5 2 13 2 14.8C2 16.6 3.5 18 5.3 18H17.9C20.2 18 22 16 22 13.8C22 11.6 20.3 9.9 18.1 9.7Z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm">Cloudly - 20%</span>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <div className="bg-gray-300 rounded-full h-6 w-6">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 30 30"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
	c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
	s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
	c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
	S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
	c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
	C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
	s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
	c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
	c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
	c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
	 M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
	c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
	c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
	c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
	c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
	l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
	"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm">Humidity 80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-0 py-5 border-b bg-gray-200 rounded-b-lg ">
              <div className="flex jistify-between px-6 pb-6">
                <div className="space-x-3">
                  <span className="text-lg text-gray-400">Today</span>
                  <span className="text-lg text-gray-700 border-b border-gray-700">
                    Week
                  </span>
                </div>
              </div>
              <div className="pb-5 max-h-fit overflow-y-auto no-scrollbar rounded-b-lg">
                <div className="px-6 inline-flex space-x-5">
                  <div className="flex flex-col justify-center w-32 px-5 py-2 space-y-2 items-center rounded-lg bg-white text-center shadow-md shadow-gray-500/50">
                    <span className="font-thin">11:27 PM</span>
                    <div className="flex place-self-center h-16 w-16">
                      <img src={cloudy} alt="" />
                    </div>
                    <div>
                      <span className="text-lg font-semibold">28&#176; - </span>
                      <span className="text-lg text-gray-400 font-semibold">
                        23&#176; C
                      </span>
                    </div>
                  </div>

                  <div className="flex-col px-5 py-2 space-y-2 rounded-lg bg-white text-center shadow-md shadow-gray-500/50">
                    <span className="font-thin">11:27 PM</span>
                    <div className="h-16 w-16">
                      <img src={cloudy} alt="" />
                    </div>
                    <span className="text-lg font-semibold">27&#176; C</span>
                  </div>

                  <div className="flex-col px-5 py-2 space-y-2 rounded-lg bg-white text-center shadow-md shadow-gray-500/50">
                    <span className="font-thin">11:27 PM</span>
                    <div className="h-16 w-16">
                      <img src={cloudy} alt="" />
                    </div>
                    <span className="text-lg font-semibold">27&#176; C</span>
                  </div>

                  <div className="flex-col px-5 py-2 space-y-2 rounded-lg bg-white text-center shadow-md shadow-gray-500/50">
                    <span className="font-thin">11:27 PM</span>
                    <div className="h-16 w-16">
                      <img src={cloudy} alt="" />
                    </div>
                    <span className="text-lg font-semibold">27&#176; C</span>
                  </div>

                  <div className="flex-col px-5 py-2 space-y-2 rounded-lg bg-white text-center shadow-md shadow-gray-500/50">
                    <span className="font-thin">11:27 PM</span>
                    <div className="h-16 w-16">
                      <img src={cloudy} alt="" />
                    </div>
                    <span className="text-lg font-semibold">27&#176; C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherModal;
