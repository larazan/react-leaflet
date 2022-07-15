import React from "react";

import SearchFilter from "../components/SearchFilter";
import IconsContainer from "../components/IconsContainer";

const Filter = () => {
  return (
    <>
      <main>
        <div className="flex items-center justify-center min-h-screen2">
          <div className="w-full max-w-2xl px-10  py-8  bg-white">
            <div className="mx-auto pt-10">
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
