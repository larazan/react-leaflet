import React from "react";

import ReadMore from "./ReadMore";

const DetailProfile = () => {
  return (
    <>
      <div className="flex flex-wrap -mx-px md:-mx-3">
        <div className=" p-0 md:px-3 md:w-8/12 pt-5 md:mx-auto mb-8">
          <div className="py-2 pb-5 border-b">
            <ReadMore>
              Present a modern, feminine, Highest restaurant in town with
              vibrant atmosphere. The most dramatic widely open kitchen in town
              and modern buffet style with Retail Looks reflect to East Asia
              cuisine touch slight of European dishes, this pan-cultural venue
              celebrates the universally cherished pleasures of good food and
              family “Culinary Theater” station pledges a wellness culinary
              journey and a truly gastronomic experience procuring seasonal,
              freshest ingredients and Nutrient-rich. Distinct experiences:
              Bubbly Sunday Brunch, Seafood on Ice, Boutique Grand Dessert &
              Artisan Bakeries and Cocktail Buffet Corner
            </ReadMore>
          </div>

          <div className="py-2 mt-4">
            <div className="border rounded p-4">
              <div className="flex flex-col space-y-4">
                <div className="flex inline-flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="text-blue-400 font-bold text-lg">
                      <a href="">https://www.eatmazra.com</a>
                    </p>
                  </div>
                  <div>
                    <button>
                      <svg width="24" height="24" class="icon_svg">
                        <path d="M20.47 3.07a.5.5 0 01.53.46v6a.5.5 0 01-.39.49.58.58 0 01-.19 0 .47.47 0 01-.35-.15L17.8 7.6l-5 5a1 1 0 01-1.41 0 1 1 0 010-1.41l5-5-2.27-2.27a.5.5 0 01.35-.85h6zM20 21H4a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 010 2H5v14h14v-5a1 1 0 012 0v6a1 1 0 01-1 1z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex inline-flex items-center justify-between border-b pb-3">
                  <div>
                    <p className="text-gray-500 font-bold text-lg">
                      (650) 491-6019
                    </p>
                  </div>
                  <div>
                    <button>
                      <svg width="24" height="24" class="icon_svg">
                        <path d="M13.59 23.07A7 7 0 018.64 21L3 15.36a7 7 0 010-9.9l1.39-1.41a1 1 0 011.42 0l5 5a1 1 0 010 1.41 2.001 2.001 0 002.83 2.83 1 1 0 011.41 0l4.95 5a1 1 0 010 1.42L18.54 21a7 7 0 01-4.95 2.07zM5.1 6.17l-.71.71a5 5 0 000 7.07l5.66 5.66a5 5 0 007.07 0l.71-.71-3.63-3.63a4 4 0 01-4.86-.61 4 4 0 01-.61-4.86L5.1 6.17zm12.78 5.95a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 6 6 0 016 6 1 1 0 01-1 1zm4.19 0a1 1 0 01-1-1 8.19 8.19 0 00-8.19-8.19 1 1 0 010-2c5.625.006 10.184 4.565 10.19 10.19a1 1 0 01-1 1z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex inline-flex items-center justify-between ">
                  <div>
                    <p className="text-blue-400 font-bold text-lg">
                      <a href="">Get Directions</a>
                    </p>
                    <p className="text-gray-500 font-bold text-md">
                      504 San Bruno Ave W San Bruno, CA 94066
                    </p>
                  </div>
                  <div>
                    <button>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 22 22"
                        class="icon_svg"
                      >
                        <path d="M11 22a3 3 0 01-2.12-.88l-8-8a3 3 0 010-4.24l8-8a3 3 0 014.24 0l8 8a3 3 0 010 4.24l-8 8A3 3 0 0111 22zm0-20a1 1 0 00-.71.29l-8 8a1 1 0 000 1.42l8 8a1 1 0 001.42 0l8-8a1 1 0 000-1.42l-8-8A1 1 0 0011 2zm4.85 8.15a.48.48 0 010 .66l-3 3a.47.47 0 01-.35.15.43.43 0 01-.19 0 .5.5 0 01-.31-.46v-2.05a1 1 0 01-.25.05h-2a1 1 0 00-1 1v1a1 1 0 11-2 0v-1a3 3 0 013-3h2a1 1 0 01.25.05V7.5a.5.5 0 01.31-.5.47.47 0 01.54.15l3 3z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProfile;
