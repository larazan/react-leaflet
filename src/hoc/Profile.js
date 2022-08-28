import React, { useState, useRef, useEffect } from "react";
import Avatar from "react-avatar";
import { useLocation, Outlet, Link, NavLink } from "react-router-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import Header from "../components/Header";

function Profile(props) {
  const [showDrop, setShowDrop] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDrop(false));

  const openDrop = (e) => {
    e.stopPropagation();
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  const location = useLocation();

  console.log(location.pathname);

  let urls = location.pathname.split("/");
  let lastUrl = urls[urls.length - 1];

  console.log(lastUrl);

  const renderHeader = () => {
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/forgot"
    ) {
      return <Header />;
    }
  };

  const renderContent = () => {
    if (lastUrl === "followers" || lastUrl === "following") {
      return (
        <main className="md:mt-10 bg-gray-100 bg-opacity-25">
          <div className="lg:w-8/12 md:pt-10 lg:mx-auto mb-8">
          <header className="flex md:hidden z-20 md:z-20 h-10 md:h-14 w-full  top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between bg-gray-100 border-b shadow">
        <div className="flex inline-flex w-full justify-center items_center space-x-3">
            <div className="flex w-1/4 w-full">
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
            </div>
            <div className="flex w-3/4 items-center justify-center2 space-x-2">
                <div className="no-flex2 ">
                    <img
                        className="w-8 h-8 md:w-40 md:h-40 object-cover rounded-full border p-0"
                        src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                        alt="profile"
                        />
                </div>
                <div>
                    <span className="text-lg inline-block font-semibold sm:mb-0">
                    mrtravlerrr_
                    </span>
                </div>
            </div>
        </div>
      </header>
            <div className="px-0 md:px-0 py-3">
            <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold  text-gray-600 border-b">
              <li className={` ${lastUrl === 'followers' ? 'md:border-b-4 md:border-blue-400 md:-mt-px md:text-gray-700' : ''} `}>
                <NavLink 
                  className={({ isActive }) =>
                  isActive ? "inline-block p-3 text-blue-400 font-bold" : "inline-block p-3"
                }
                  to="followers"
                >
                  <span className="hidden2 md:inline">pengikut</span>
                </NavLink>
              </li>
             
              <li className={` ${lastUrl === 'following' ? 'md:border-b-4 md:border-blue-400 md:-mt-px md:text-gray-700' : ''} `}>
                <NavLink 
                className={({ isActive }) =>
                  isActive ? "inline-block p-3 text-blue-400 font-bold" : "inline-block p-3"
                }
                  to="following"
                >
                  <span className="hidden2 md:inline">mengikuti</span>
                </NavLink>
              </li>
            </ul>
            <Outlet />
              </div>
          </div>
        </main>
      ) 
    } else {
      return (
        <main className="md:mt-10 bg-gray-100 bg-opacity-25">
          <header className="flex md:hidden z-20 md:z-20 h-10 md:h-14 w-full  top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between2">
          <div className="flex inline-flex w-full justify-center items_center space-x-3">
            <div className="flex  w-full">
              <button className="p-1 rounded-full2 hover:bg-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
            </div>
            
          </div>
        </header>
        <div className="lg:w-8/12 md:pt-10 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border p-0"
                src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                alt="profile"
              />
            </div>

            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  mrtravlerrr_
                </h2>

                <span
                  className="inline-block fas fa-certificate fa-lg text-blue-500 relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i className="fas fa-check text-white text-xs absolute inset-x-0 ml-1 mt-px"></i>
                </span>
                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block block"
                  >
                    ikuti
                  </a>
                  <Link to="/messages/3">
                  <button className="flex justify-center items-center h-10 w-10 p-2 border rounded-full hover:bg-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  </Link>
                  <div
                    className="flex inline-flex justify-center items-center space-x-1 cursor-pointer rounded-full border"
                    onClick={openDrop}
                  >
                    <div className="flex h-10 w-10 p-2 hover:bg-[#e8f5fd] hover:text-cyan-400 rounded-full items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>

                    <div
                      ref={ref}
                      className={`sm:w-72 md:w-72 ${
                        showDrop === false ? "hidden" : ""
                      }  right-2 mt-24 md:mt-32 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
                    >
                      <div className="py-2">
                        <ul className="flex-col font-sans items-center justify-center text-sm">
                          <Link to="">
                            <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span>Tidak tertarik dengan tweet ini</span>
                              </div>
                            </li>
                          </Link>
                          <Link to="">
                            <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                  />
                                </svg>
                                <span>Laporkan tweet ini</span>
                              </div>
                            </li>
                          </Link>
                          <Link to="">
                            <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                                <span>Tambahkan/hapus dari daftar</span>
                              </div>
                            </li>
                          </Link>
                          <Link to="">
                            <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                              <div className="flex items-center space-x-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={1}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                                <span>Source</span>
                              </div>
                            </li>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold">136</span> posts
                </li>

                <li>
                  <Link to="followers" className="hover:underline underline-offset-4">
                  <span className="font-semibold">40.5k</span> followers
                  </Link>
                </li>
                <li>
                  <Link to="following" className="hover:underline underline-offset-4">
                  <span className="font-semibold">302</span> following
                  </Link>
                </li>
              </ul>

              <div className="hidden md:block">
                <h1 className="font-semibold">Mr Travlerrr...</h1>
                <span>Travel, Nature and Music</span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>

            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">Mr Travlerrr...</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </header>

          <div className="px-px md:px-3">
            <ul className="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm">
              <li>
                <span className="font-semibold text-gray-800 block">
                  136{" "}
                </span>{" "}
                posts
              </li>

              <li>
                <Link to="followers">
                <span className="font-semibold text-gray-800 block">
                  40.5k{" "}
                </span>{" "}
                followers
                </Link>
              </li>
              <li>
              <Link to="following">
                <span className="font-semibold text-gray-800 block">
                  302{" "}
                </span>{" "}
                following
                </Link>
              </li>
            </ul>

            <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
              <li className={` ${lastUrl === 'profile' ? 'md:border-t md:border-gray-700 md:-mt-px md:text-gray-700' : ''} `}>
                <NavLink 
                  className={` ${lastUrl === 'profile' ? 'inline-block p-3 text-blue-400 font-bold' : 'inline-block p-3'}`} 
                  to="/profile"
                >
                  <span className="hidden2 md:inline">post</span>
                </NavLink>
              </li>
              <li className={` ${lastUrl === 'detail' ? 'md:border-t md:border-gray-700 md:-mt-px md:text-gray-700' : ''} `}>
                <NavLink 
                  className={({ isActive }) =>
                    isActive ? "inline-block p-3 text-blue-400 font-bold" : "inline-block p-3"
                  }
                  to="detail"
                >
                  <span className="hidden2 md:inline">detail</span>
                </NavLink>
              </li>
              <li className={` ${lastUrl === 'more' ? 'md:border-t md:border-gray-700 md:-mt-px md:text-gray-700' : ''} `}>
                <NavLink 
                className={({ isActive }) =>
                  isActive ? "inline-block p-3 text-blue-400 font-bold" : "inline-block p-3"
                }
                  to="more"
                >
                  <span className="hidden2 md:inline">more</span>
                </NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      </main>
      )
    }
  }

  return (
    <>
      <div className="flex flex-col h-screen max-h-screen">
        {renderHeader()}
        {renderContent()}
        
        {/* <main className="md:mt-10 bg-gray-100 bg-opacity-25">
          <div className="lg:w-8/12 pt-10 lg:mx-auto mb-8">
            <header className="flex flex-wrap items-center p-4 md:py-8">
              <div className="md:w-3/12 md:ml-16">
                <img
                  className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border p-0"
                  src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  alt="profile"
                />
              </div>

              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    mrtravlerrr_
                  </h2>

                  <span
                    className="inline-block fas fa-certificate fa-lg text-blue-500 relative mr-6 text-xl transform -translate-y-2"
                    aria-hidden="true"
                  >
                    <i className="fas fa-check text-white text-xs absolute inset-x-0 ml-1 mt-px"></i>
                  </span>
                  <div className="flex items-center space-x-2">
                    <a
                      href="#"
                      className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block block"
                    >
                      ikuti
                    </a>
                    <Link to="/messages">
                    <button className="flex justify-center items-center h-10 w-10 p-2 border rounded-full hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                    </Link>
                    <div
                      className="flex inline-flex justify-center items-center space-x-1 cursor-pointer rounded-full border"
                      onClick={openDrop}
                    >
                      <div className="flex h-10 w-10 p-2 hover:bg-[#e8f5fd] hover:text-cyan-400 rounded-full items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </div>

                      <div
                        ref={ref}
                        className={`sm:w-72 md:w-72 ${
                          showDrop === false ? "hidden" : ""
                        }  right-2 mt-24 md:mt-32 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
                      >
                        <div className="py-2">
                          <ul className="flex-col font-sans items-center justify-center text-sm">
                            <Link to="">
                              <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                <div className="flex items-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span>Tidak tertarik dengan tweet ini</span>
                                </div>
                              </li>
                            </Link>
                            <Link to="">
                              <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                <div className="flex items-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    />
                                  </svg>
                                  <span>Laporkan tweet ini</span>
                                </div>
                              </li>
                            </Link>
                            <Link to="">
                              <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                <div className="flex items-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                  <span>Tambahkan/hapus dari daftar</span>
                                </div>
                              </li>
                            </Link>
                            <Link to="">
                              <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                <div className="flex items-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                  </svg>
                                  <span>Source</span>
                                </div>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="hidden md:flex space-x-8 mb-4">
                  <li>
                    <span className="font-semibold">136</span> posts
                  </li>

                  <li>
                    <span className="font-semibold">40.5k</span> followers
                  </li>
                  <li>
                    <span className="font-semibold">302</span> following
                  </li>
                </ul>

                <div className="hidden md:block">
                  <h1 className="font-semibold">Mr Travlerrr...</h1>
                  <span>Travel, Nature and Music</span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>

              <div className="md:hidden text-sm my-2">
                <h1 className="font-semibold">Mr Travlerrr...</h1>
                <span>Travel, Nature and Music</span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </header>

            <div className="px-px md:px-3">
              <ul className="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm">
                <li>
                  <span className="font-semibold text-gray-800 block">
                    136{" "}
                  </span>{" "}
                  posts
                </li>

                <li>
                  <span className="font-semibold text-gray-800 block">
                    40.5k{" "}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="font-semibold text-gray-800 block">
                    302{" "}
                  </span>{" "}
                  following
                </li>
              </ul>

              <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
                <li className={` ${lastUrl === 'profile' ? 'md:border-t md:border-gray-700 md:-mt-px md:text-gray-700' : ''} `}>
                  <NavLink 
                    className={` ${lastUrl === 'profile' ? 'inline-block p-3 text-blue-400 font-bold' : 'inline-block p-3'}`} 
                    to="/profile"
                  >
                    <span className="hidden2 md:inline">post</span>
                  </NavLink>
                </li>
                <li className={` ${lastUrl === 'with_comments' ? 'md:border-t md:border-gray-700 md:-mt-px md:text-gray-700' : ''} `}>
                  <NavLink 
                    className={({ isActive }) =>
                      isActive ? "inline-block p-3 text-blue-400 font-bold" : "inline-block p-3"
                    }
                    to="with_comments"
                  >
                    <span className="hidden2 md:inline">post & comment</span>
                  </NavLink>
                </li>
                <li className={` ${lastUrl === 'likes' ? 'md:border-t md:border-gray-700 md:-mt-px md:text-gray-700' : ''} `}>
                  <NavLink 
                  className={({ isActive }) =>
                    isActive ? "inline-block p-3 text-blue-400 font-bold" : "inline-block p-3"
                  }
                    to="likes"
                  >
                    <span className="hidden2 md:inline">like</span>
                  </NavLink>
                </li>
              </ul>
              <Outlet />
            </div>
          </div>
        </main> */}
      </div>
    </>
  );
}

export default Profile;
