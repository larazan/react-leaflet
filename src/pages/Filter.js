import React from "react";

import SearchFilter from "../components/SearchFilter";
import IconsContainer from "../components/IconsContainer";

const Filter = () => {
  return (
    <>
      <header className="flex md:hiddenz-20 md:z-20 h-10 md:h-14 w-full  top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between bg-gray-100 border-b shadow">
        <div className="flex inline-flex justify-center items_center space-x-3">
          <button className="p-1 rounded-full bg-gray-300">
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
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
          <span className="text-lg font-semibold">Posting Something</span>
        </div>
      </header>
      <main>
        <div className="flex items-center justify-center min-h-screen2">
          <div className="w-full max-w-3xl px-6 md:px-10 py-1 md:py-8  bg-white">
            <div className="mx-auto pt-0 md:pt-0">
              <SearchFilter />
              <IconsContainer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Filter;
