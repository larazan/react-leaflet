import React, { useState, useEffect } from "react";

import bengkel from "../assets/images/bengkel.jpg";
import restoran from "../assets/images/restoran.jpg";
import toko from "../assets/images/toko.jpg";
import event from "../assets/images/event.jpg";
import kafe from "../assets/images/kafe.jpg";
import sliders from "../assets/data/slides.json";
import slides from "../assets/data/slides.json";


const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const length = slides.length;
    let timeOut = null;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  const slideRight = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  }, [slideRight]);

  return (
    <>

      <div className="w-screen h-screen2">
        <div className="relative" id="relative">
          <header>
            
            <div
              id="indicators-carousel"
              className="relative"
              data-carousel="static"
              onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut);
              }}
              onMouseLeave={() => {
                setAutoPlay(true);
              }}
            >
              <div className="overflow-hidden relative h-64 md:h-96">
                  {sliders.map((slide, index) => (

                <div
                  className={`duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 ${index === current ? 'slide active' : 'slide'} `}
                  data-carousel-item="active"
                  key={index}
                >
                    {index === current && (
                        <img
                        src={slide.image}
                        className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                        alt="..."
                      />
                    )}
                  
                  <div className="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">
                    Fast & Easy Booking
                  </div>
                </div>
                ))}
                {/* <div
                  className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                  data-carousel-item=""
                >
                  <img
                    src={kafe}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                  <div className="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">
                    Many Pickup Location
                  </div>
                </div>
                <div
                  className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
                  data-carousel-item=""
                >
                  <img
                    src={event}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                  <div className="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">
                    Statified Customers
                  </div>
                </div>
                <div
                  className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
                  data-carousel-item=""
                >
                  <img
                    src={restoran}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                  <div className="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">
                    Advanced Engine Services
                  </div>
                </div>
                <div
                  className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                  data-carousel-item=""
                >
                  <img
                    src={toko}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                    alt="..."
                  />
                  <div className="absolute top-1/2 lg:left-1/3 md:h-1/4 left-1/4 text-white font-bold md:text-4xl sm:text-2xl text-center">
                    Professional Car Wash
                  </div>
                </div> */}
              </div>
              <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
              {sliders.map((_, index) => {
            return (
                <button
                  type="button"
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === current ? 'bg-gray-700' : 'bg-white' } bg-white dark:bg-gray-800`}
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                  onClick={() => setCurrent(index)}
                ></button>
                );
              })}
              </div>
              <button
                type="button"
                className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-prev=""
                // onClick={prevSlide}
                onClick={slideLeft}
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="hidden">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                data-carousel-next=""
                // onClick={nextSlide}
                onClick={slideRight}
              >
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="hidden">Next</span>
                </span>
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* <div id="default-carousel" className="relative" data-carousel="static">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 w-full" data-carousel-item="">
            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src={bengkel} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <img src={kafe} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
            <img src={event} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}
    </>
  );
};

export default Carousel;
