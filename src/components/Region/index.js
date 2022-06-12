import React from "react";

import provinces from "../../assets/data/provinces.json";

const Region = () => {
  return (
    <>
      {/* <div className="w-full max-w-md h-screen overflow-auto flex-none px-0 hidden md:block"> */}
      <div className="bg-white mt-4">
        <div className="flex justify-between space-x-2 pb-2 px-3 border-b">
          <div className="flex flex-wrap w-2/3 items-center hidden md:flex">
            <div className="flex w-full">
              <a
                className="text-md font-bold text-gray-800 uppercase "
                href="#"
              >
                Regions
              </a>
            </div>
            <div className="text-xs text-gray-800">Please choose a region</div>
          </div>
          <div className="flex flex-row-reverse w-1/3">
            <div className="flex flex-wrap pl-2 items-center hidden md:flex">
              <a
                className="text-xs font-extrabold text-blue-500 uppercase "
                href="#"
              >
                About
              </a>
            </div>
            <div className="flex flex-wrap  items-center hidden md:flex">
              <a
                className="text-xs font-extrabold text-blue-500 uppercase "
                href="#"
              >
                Api
              </a>
            </div>
          </div>
        </div>

        <div className="border-b cursor-pointer">
          <div className="mt-2 mb-4">
            <div className="py-2">
              <div className="flex flex-wrap text-lg font-light text-blue-500">
                <ul className=" w-full">
                  {provinces.map((provinsi, index) => (
                    <li
                      className="py-1 px-5 hover:bg-gray-200 capitalize"
                      key={index}
                    >
                      <a href="#" title="{provinsi.name}">
                        {provinsi.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-5 text-center">
          <a href>
            <span className="text-blue-400 font-semibold capitalize cursor-pointer">
              call for further information
            </span>
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Region;
