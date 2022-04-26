import React from "react";

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
              <div className="text-xs text-gray-800">
                Please choose a region
              </div>
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
            <div className="py-3 px-3">
              <div className="py-2">
                <div className="flex flex-wrap text-lg font-light text-blue-500">
                  <ul className="px-2 w-full">
                    <li className="p-1 px-2 hover:bg-gray-200">
                      <a href="#" title="">
                        Ukraina
                      </a>
                    </li>
                    <li className="p-1 px-2 hover:bg-gray-200">
                      <a href="#" title="">
                        Yaman
                      </a>
                    </li>
                    <li className="p-1 px-2 hover:bg-gray-200">
                      <a href="#" title="">
                        Syria
                      </a>
                    </li>
                    <li className="p-1 px-2 hover:bg-gray-200">
                      <a href="#" title="">
                        Korea
                      </a>
                    </li>
                    <li className="p-1 px-2 hover:bg-gray-200">
                      <a href="#" title="">
                        Turkey
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Region;