import React, { useState } from "react";
import { Link } from "react-router-dom";

import Region from "../Region";
import Key from "../Key";
import News from "../News";
import ContentNews from "../ContentNews";

const Tabs = ({
  news,
  handleOnFlyTo,
  selected,
  setSelected,
  setSelectedIndex,
  handleId,
  newsActive
}) => {
  const [openTab, setOpenTab] = useState(1);
  const [color, setColor] = useState("green");
  return (
    <>
      <div className={`relative w-full max-w-md z-10 md:z-30 h-screen overflow-auto flex-none px-0 ${newsActive === true ? 'md:block' : 'hidden' } custom-scrollbar`}>
       
          <div className="w-full hidden md:block">
            <ul
              className="fixed flex mb-0 list-none flex-wrap2 flex-row2 border-b bg-white"
              role="tablist"
            >
              <li
                className={
                  "-mb-px mr-2 last:mr-0 flex-auto text-center " +
                  (openTab === 1 ? "border-b-4 border-indigo-400" : "")
                }
              >
                <a
                  className="text-sm font-bold px-5 py-2 block leading-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
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
                      News
                    </span>
                  </div>
                </a>
              </li>
              <li
                className={
                  "-mb-px mr-2 last:mr-0 flex-auto text-center " +
                  (openTab === 2 ? "border-b-4 border-indigo-400" : "")
                }
              >
                <a
                  className="text-sm font-bold px-5 py-2 block leading-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
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
                </a>
              </li>
              <li
                className={
                  "-mb-px mr-2 last:mr-0 flex-auto text-center " +
                  (openTab === 3 ? "border-b-4 border-indigo-400" : "")
                }
              >
                <a
                  className="text-sm font-bold px-5 py-2 block leading-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
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
                </a>
              </li>
              <li
                className={
                  "-mb-px mr-2 last:mr-0 flex-auto text-center " +
                  (openTab === 4 ? "border-b-4 border-indigo-400" : "")
                }
              >
                <a
                  className="text-sm font-bold px-5 py-2 block leading-normal"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
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
                    <span className="text-xs font-semibold text-gray-800">
                      Key
                    </span>
                  </div>
                </a>
              </li>
              <li className={"-mb-px mr-2 last:mr-0 flex-auto text-center"}>
              <Link to="/login">
                <a
                  className="text-sm font-bold px-5 py-2 block leading-normal"
                  data-toggle="tab"
                  // href="#"
                  role="tablist"
                >
                  <div className="flex flex-col items-center hidden md:flex">
                    <button className="h-5 w-5 hidden md:flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                    </button>
                    <span className="text-xs font-semibold text-gray-800">
                      Login
                    </span>
                  </div>
                </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="static flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg  h-screen">
            <div className="px-41 py-51 flex-auto mt-0 md:mt-12">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ContentNews 
                    news={news} 
                    handleOnFlyTo={handleOnFlyTo} 
                    selected={selected} 
                    setSelected={setSelected} 
                    setSelectedIndex={setSelectedIndex} 
                    handleId={handleId}
                  />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Region />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <Key />
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </>
  );
};

export default Tabs;
