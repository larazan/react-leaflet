import React, { useState } from "react";

import Carousel from "../components/Carousel";
import Header2 from "../components/Header2";
import Footer from "../components/Footer";
import RenderSvg from "../components/RenderSvg";

import jakarta from "../assets/images/jakarta.jpg"
import surabaya from "../assets/images/surabaya.jpg"
import bandung from "../assets/images/bandung.jpg"
import semarang from "../assets/images/semarang.jpg"
import makassar from "../assets/images/makassar.jpg"
import batam from "../assets/images/batam.jpg"

const Home = () => {
  
  return (
    <>
      {/* <Header2 clickNewsPageActive={clickNewsPageActive} clickMapPageActive={clickMapPageActive} /> */}
      <main>
        <div className="md:flex md:flex-no-wrap ">
          <div className="flex z-0 outline-0 relative mt-10">
            <Carousel />
          </div>
        </div>

        <div className="relative px-8 py-10 z-9 bg-[#f5f5f5]">
          <div className=" py-3 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 group w-full ">
              <div className="flex">
                <div className="my-2 drop-shadow-sm w-full h-fit hover:drop-shadow-lg cursor-pointer opacity-90 hover:opacity-100">
                  <div className="relative block overflow-hidden bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-5">
                    <div className="relative block w-auto h-auto h-60">
                      <img
                        src={jakarta}
                        className="relative w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="absolute z-20 flex justify-center items-center w-full h-full bottom-0">
                      <div className="">
                        <span className="text-lg md:text-2xl text-white font-bold">
                            Jakarta
                          </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="my-2 drop-shadow-sm w-full h-fit hover:drop-shadow-lg cursor-pointer opacity-90 hover:opacity-100">
                  <div className="relative block2 overflow-hidden bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-5">
                    <div className="relative block w-auto h-auto h-60">
                      <img
                        src={surabaya}
                        className="relative w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="absolute z-20 flex justify-center items-center w-full h-full bottom-0">
                      <div className="">
                        <span className="text-lg md:text-2xl text-white font-bold">
                            Surabaya
                          </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="my-2 drop-shadow-sm w-full h-fit hover:drop-shadow-lg cursor-pointer opacity-90 hover:opacity-100">
                  <div className="relative block2 overflow-hidden bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-5">
                    <div className="relative block w-auto h-auto h-60">
                      <img
                        src={bandung}
                        className="relative w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="absolute z-20 flex justify-center items-center w-full h-full bottom-0">
                      <div className="">
                        <span className="text-lg md:text-2xl text-white font-bold">
                            Bandung
                          </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="my-2 drop-shadow-sm w-full h-fit hover:drop-shadow-lg cursor-pointer opacity-90 hover:opacity-100">
                  <div className="relative block2 overflow-hidden  bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-5">
                    <div className="relative block w-auto h-auto h-60">
                      <img
                        src={batam}
                        className="relative w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="absolute z-20 flex justify-center items-center w-full h-full bottom-0">
                      <div className="">
                        <span className="text-lg md:text-2xl text-white font-bold">
                            Batam
                          </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="my-2 drop-shadow-sm w-full h-fit hover:drop-shadow-lg cursor-pointer opacity-90 hover:opacity-100">
                  <div className="relative block2 overflow-hidden bg-white rounded shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded space-y-5">
                    <div className="relative block w-auto h-auto h-60">
                      <img
                        src={makassar}
                        className="relative w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="absolute z-20 flex justify-center items-center w-full h-full bottom-0">
                      <div className="">
                        <span className="text-lg md:text-2xl text-white font-bold">
                            Makassar
                          </span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-60 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="">
                        <span className="text-lg  font-bold">
                          See All
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-8 py-10 z-9 bg-[#f5f5f5]">
          <div className=" py-3 mt-5">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 group w-full ">
              
              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`toko-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`makanan-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`coffeeshop-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`diskon-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`barbershop-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`laundry-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`jasa-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`mobil-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                      <div className="h-28 w-28 p-2">
                        <RenderSvg c={`motor-12`} f={4} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="my-2 drop-shadow-sm cursor-pointer w-full hover:drop-shadow-lg text-gray-800 hover:text-[#fe2c55]">
                  <div className="relative block h-36 overflow-hidden bg-white rounded border shadow aspect-w-16 aspect-h-10 dark:bg-gray-800 flex-col bg-white rounded ">
                    <div className="flex justify-center items-center h-full">
                    <div className="">
                        <span className="text-lg  font-bold">
                          See All
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
