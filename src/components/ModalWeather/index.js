import React, { useState, useEffect } from "react";
import { shuffle } from 'lodash';
// import moment from 'moment';
import moment from 'moment/min/moment-with-locales';
import Moment from 'react-moment';
import 'moment-timezone';

import background, { gradient } from '../../hoc/background';

moment.locale('id');

const ModalWeather = ({ showWeather, closeWeather }) => {
  const [info, setInfo] = useState({});
  const [grad, setgrad] = useState(null);
  const currentDateTime = moment()


    async function getData() {
		await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=f676e0d30686474d99b160351221104&q=surabaya&days=1&aqi=no&alerts=no`
		)
			.then((r) => r.json())
			.then((d) =>
				setInfo({
					name: d.location.name,
					country: d.location.country,
          localtime: d.location.localtime,
					condition: d.current.condition.text,
					temp: {
						current: d.current.temp_c,
						max: d.forecast.forecastday[0].day.maxtemp_c,
						min: d.forecast.forecastday[0].day.mintemp_c,
					},
          wind: d.current.wind_kph,
          pressure: d.current.pressure_mb,
          humidity: d.current.humidity,
				})
			);
	}

    useEffect(() => {
		getData();
	}, []);

  useEffect(() => {
		setgrad(shuffle(gradient).pop());
	}, []);

  return (
    <>
      {showWeather ? (
        <div
          className="main-modal fixed w-full h-full inset-0 z-40 flex justify-center items-center2 animated fadeIn faster overflow-y-auto"
          style={{ background: `rgba(12,15,19,.7)` }}
          // style={{ background: `rgba(251,251,251,.9)` }}
          id="my-modal"
        >
          <div className="fixed md:px-2 md:py-2 lg:px-2 lg:py-2 top-2 md:top-3 lg:top-3 xl:top-3 left-2">
            <button className="h-8 w-8" onClick={() => closeWeather(false)}>
              <svg
                className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 md:text-gray-800 lg:text-gray-800 font-bold"
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
          <div className="absolute sm:mt-0 md:mt-28 lg:mt-8 xl:mt-12 lg:border lg:border-teal-500 modal-container bg-white w-8/12 lg:w-8/12  md:rounded lg:rounded md:shadow-lg lg:shadow-lg outline-none">
            <div className="flex justify-end py-2 px-2 md:hidden lg:hidden">
              <button className="h-8 w-8">
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

            <div 
            className="px-7 py-3 pb-5 border-b rounded-md  max-h-fit overflow-y-auto"
            style={
              info.condition?.toLowerCase() === 'clear'
                ? { backgroundImage: background.clear }
                : info.condition?.toLowerCase() === 'sunny'
                ? { backgroundImage: background.sunny }
                : info.condition?.toLowerCase().includes('cloudy')
                ? { backgroundImage: background.cloudy }
                : info.condition?.toLowerCase().includes('rain') ||
                  info.condition?.toLowerCase().includes('drizzle')
                ? { backgroundImage: background.rainy }
                : info.condition?.toLowerCase().includes('snow') ||
                  info.condition?.toLowerCase().includes('sleet')
                ? { backgroundImage: background.snow }
                : info.condition?.toLowerCase().includes('overcast')
                ? { backgroundImage: background.overcast }
                : { backgroundImage: grad }
            }
            >
              <div className="flex">
                <div className="flex-col w-1/3 justify-between">
                  <div className="flex-col h-1/2">
                    <div className="text-3xl font-bold mb-2">
                      <p><Moment format='dddd'>{currentDateTime}</Moment></p>
                    </div>
                    <div className="font-semibold"><Moment format='Do MMMM'>{currentDateTime}</Moment></div>
                    <div className="flex items-center">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="font-semibold text-lg">{info.name}</span>
                    </div>
                  </div>
                  <div className="flex-col h-1/2">
                    <div className="absolute inset-x-0 bottom-0 p-4 ml-3">
                    <div className="">
                      <img
                        width="45"
                        src="https://www.metaweather.com/static/img/weather/hc.svg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <p className="text-3xl font-bold">
                      {info.temp?.current}&#176;C
                      </p>
                    </div>
                    <div className="">
                      <p>{info.condition}</p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col w-2/3">
                  <div className="w-full">
                    <div className="flex-col">
                      <div className="flex justify-between">
                        <p className="mb-0 font-bold text-uppercase">
                          PREDICTABILITY
                        </p>
                        <p className="mb-0">71 %</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-0 font-bold text-uppercase">
                          HUMIDITY
                        </p>
                        <p className="mb-0">{info.humidity} %</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-0 font-bold text-uppercase">WIND</p>
                        <p className="mb-0">{info.wind} km/h</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-0 font-bold text-uppercase">
                          AIR PRESSURE
                        </p>
                        <p className="mb-0">{info.pressure} mb</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-0 font-bold text-uppercase">
                          MAX TEMP
                        </p>
                        <p className="mb-0">{info.temp?.max}&#176;C</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="mb-0 font-bold text-uppercase">
                          MIN TEMP
                        </p>
                        <p className="mb-0">{info.temp?.min}&#176;C</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mt-2 p-2">
                      <ul className="flex flex-wrap">
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center justify-center items-center p-2">
                          <div className="flex flex-col items-center hidden md:flex">
                            <img
                              class="mb-2"
                              width="30"
                              src="https://www.metaweather.com/static/img/weather/hr.svg"
                              alt=""
                            />
                            <div>
                              <span className="text-md font-semibold text-gray-800">
                                Selasa
                              </span>
                            </div>
                            <div>
                              <span className="font-bold">18&#176;C</span>
                            </div>
                          </div>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center justify-center items-center p-2">
                          <div className="flex flex-col items-center hidden md:flex">
                            <img
                              class="mb-2"
                              width="30"
                              src="https://www.metaweather.com/static/img/weather/hr.svg"
                              alt=""
                            />
                            <div>
                              <span className="text-md font-semibold text-gray-800">
                                Rabu
                              </span>
                            </div>
                            <div>
                              <span className="font-bold">18&#176;C</span>
                            </div>
                          </div>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center justify-center items-center p-2">
                          <div className="flex flex-col items-center hidden md:flex">
                            <img
                              class="mb-2"
                              width="30"
                              src="https://www.metaweather.com/static/img/weather/hr.svg"
                              alt=""
                            />
                            <div>
                              <span className="text-md font-semibold text-gray-800">
                                Kamis
                              </span>
                            </div>
                            <div>
                              <span className="font-bold">18&#176;C</span>
                            </div>
                          </div>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center justify-center items-center p-2">
                          <div className="flex flex-col items-center hidden md:flex">
                            <img
                              class="mb-2"
                              width="30"
                              src="https://www.metaweather.com/static/img/weather/hr.svg"
                              alt=""
                            />
                            <div>
                              <span className="text-md font-semibold text-gray-800">
                                Jumat
                              </span>
                            </div>
                            <div>
                              <span className="font-bold">{info.temp?.current}&#176;C</span>
                            </div>
                          </div>
                        </li>
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center justify-center items-center p-2">
                          <div className="flex flex-col items-center hidden md:flex">
                            <img
                              class="mb-2"
                              width="30"
                              src="https://www.metaweather.com/static/img/weather/hr.svg"
                              alt=""
                            />
                            <div>
                              <span className="text-md font-semibold text-gray-800">
                                Sabtu
                              </span>
                            </div>
                            <div>
                              <span className="font-bold">18&#176;C</span>
                            </div>
                          </div>
                        </li>
                        
                      </ul>
                    </div>
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

export default ModalWeather;
