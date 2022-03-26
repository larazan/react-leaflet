import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="z-20 h-14 w-screen absolute  top-0 px-5 py-3 flex items-center justify-between bg-white border-b">
        <div className="flex w-3/5">
          <div className="flex inline-flex">
            <button className="h-8 w-8 md:hidden">
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
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <div className="flex">
              <img
                className="h-9"
                src="https://liveuamap.com/images/logo_luam.svg"
                alt="liveuamap"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 px-4">
          <div className="flex justify-between pl-4">
            <Link to="/">
              <div className="flex flex-col items-center hidden md:flex">
                <button className="h-5 w-5 hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </button>
                <span className="text-xs font-semibold text-gray-800">
                  News Live
                </span>
              </div>
            </Link>
            <Link to="/regions">
              <div className="flex flex-col items-center hidden md:flex">
                <button className="h-5 w-5 hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <span className="text-xs font-semibold text-gray-800">
                  Regions
                </span>
              </div>
            </Link>
            <Link to="">
              <div className="flex flex-col items-center hidden md:flex">
                <button className="h-5 w-5 hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <span className="text-xs font-semibold text-gray-800">
                  Time
                </span>
              </div>
            </Link>
            <Link to="/keys">
              <div className="flex flex-col items-center hidden md:flex">
                <button className="h-5 w-5 hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                    />
                  </svg>
                </button>
                <span className="text-xs font-semibold text-gray-800">Key</span>
              </div>
            </Link>
            <Link to="">
              <div className="flex flex-col items-center hidden md:flex">
                <button className="h-5 w-5 hidden md:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
                <span className="text-xs font-semibold text-gray-800">
                  Login
                </span>
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
