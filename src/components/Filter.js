import React from "react";

const Filter = ({ filOpen, filToggle }) => {
  return (
    <>
      <aside
        className={`px-0 transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          filOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white border-b">
          <div className="flex inline-flex space-x-4">
            <button className="h-8 w-8 md:hidden" onClick={filToggle}>
              <svg
                className="h-8 w-8"
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
          <div className="flex">
            <span className="text-lg font-bold">Penyaring pencarian</span>
          </div>
          <div className="flex inline-flex space-x-4">
            <button
              type="submit"
              className=" flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-sky-500 hover:bg-sky-600 rounded-2xl py-2 px-3 w-full transition duration-150 ease-in"
            >
              <span className="font-semibold">Terapkan</span>
            </button>
          </div>
        </header>
        <div>
          <div className="flex-none">
            <div className="">
              <div className="">
                {/* <div className="flex justify-between px-8 py-4 border-b">
                                    <div className="flex">
                                        <a href="/" className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap ">
                                            Men
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <button className="h-5 w-5">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between px-8 py-4 border-b">
                                    <div className="flex">
                                        <a href="/" className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap ">
                                            Women
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <button className="h-5 w-5">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div> */}

                <a
                  href="/"
                  className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap px-8 py-4 border-b hover:bg-gray-100"
                >
                  Terbaru
                </a>
                <a
                  href="/"
                  className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap px-8 py-4 border-b hover:bg-gray-100"
                >
                  Terpopuler
                </a>
                {/* <a href="/" className="block text-sm font-light whitespace-nowrap px-8 py-4 border-b">
                                    Account
                                </a>
                                <a href="/" className="block text-sm font-light whitespace-nowrap px-8 py-4 border-b">
                                    Help
                                </a> */}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Filter;
