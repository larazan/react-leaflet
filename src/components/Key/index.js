import React from "react";

import RenderSvg from "../RenderSvg";

import keys from '../../assets/data/keys.json'

const Key = () => {
  return (
    <>
      {/* <div className="w-full max-w-md h-screen overflow-auto flex-none px-0 hidden md:block"> */}
        <div className="bg-white mt-4">
          <div className="flex justify-between space-x-2 pb-2 px-3 border-b">
            <div className="flex flex-wrap w-2/3 items-center hidden md:flex">
              <div className="flex w-full">
                <a
                  className="text-md font-bold text-gray-800 uppercase "
                  href="/"
                >
                  Key
                </a>
              </div>
              <div className="text-xs text-gray-800">Key and pattern info</div>
            </div>
            <div className="flex flex-row-reverse w-1/3">
              <div className="flex flex-wrap pl-2 items-center hidden md:flex">
                <a
                  className="text-xs font-extrabold text-blue-500 uppercase "
                  href="/"
                >
                  About
                </a>
              </div>
              <div className="flex flex-wrap  items-center hidden md:flex">
                <a
                  className="text-xs font-extrabold text-blue-500 uppercase "
                  href="/"
                >
                  Api
                </a>
              </div>
            </div>
          </div>

          <div className="border-b">
            <div className="py-3 px-3">
              <div className="py-2">
                <div className="flex flex-wrap text-sm font-semibold uppercase">
                  <p>Icons</p>
                </div>
                <div className="flex2 mt-3">
                  <div className="flex flex-wrap justify-between">
                    {keys.map((key, idx) => (
                      <div className="w-1/2 p-1">
                      <div className="flex inline-flex justify-center items-center space-x-2">
                        <div className="h-8 w-8">
                        <RenderSvg c={`${key.name}-2`} f={1} />
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                          {key.title}
                        </div>
                      </div>
                    </div>
                    ))}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      {/* </div> */}
    </>
  );
};

export default Key;
