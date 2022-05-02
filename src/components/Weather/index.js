import React, { useState, useEffect } from 'react'
import { LocationMarkerIcon } from '@heroicons/react/outline';

const Weather = ({ clickWeather }) => {
    const [info, setInfo] = useState({});

    async function getData() {
		await fetch(
			`https://api.weatherapi.com/v1/forecast.json?key=f676e0d30686474d99b160351221104&q=surabaya&days=1&aqi=no&alerts=no`
		)
			.then((r) => r.json())
			.then((d) =>
				setInfo({
					name: d.location.name,
					country: d.location.country,
					condition: d.current.condition.text,
					temp: {
						current: d.current.temp_c,
						max: d.forecast.forecastday[0].day.maxtemp_c,
						min: d.forecast.forecastday[0].day.mintemp_c,
					},
				})
			);
	}

    useEffect(() => {
		getData();
	}, []);

  return (
    <>
    <div className="flex items-center space-x-1 cursor-pointer" onClick={clickWeather}>
            {/* <div className="text-xl font-bold">20 C</div> */}
            <div className="flex-col justify-items-end text-right">
              <div className="font-bold"><span>{info.temp?.current}{' '}&#176;C</span></div>

              <div className="flex text-xs space-x-1 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Surabaya</span>
              </div>
            </div>
          </div>
    </>
  )
}

export default Weather