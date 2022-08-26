import React, { useState, useRef } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

// import Comments from "../Comments";
import DetailComment from "../DetailComment";
import ModalGallery from "../ModalGallery";

import data from "../../assets/data/images.json";
import omah1 from "../../assets/images/omah1.jpg";
import omah2 from "../../assets/images/omah2.jpg";
import omah3 from "../../assets/images/omah3.jpg";
import omah4 from "../../assets/images/omah4.jpg";
import omah5 from "../../assets/images/omah5.jpg";

const getImage = (imgName) => {
  let imgGal = "";
  switch (imgName) {
    case "omah1":
      imgGal = omah1;
      break;
    case "omah2":
      imgGal = omah2;
      break;
    case "omah3":
      imgGal = omah3;
      break;
    case "omah4":
      imgGal = omah4;
      break;
    case "omah5":
      imgGal = omah5;
      break;
  }

  return imgGal;
};

const Modal2 = ({ showModal, closeModal }) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showDrop, setShowDrop] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDrop(false));

  const openDrop = (e) => {
    e.stopPropagation();
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  const handleClick = () => {
    setCurrentIndex(1);
    setClickedImg(omah1);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(getImage(newUrl));
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(getImage(newItem));
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(getImage(newUrl));
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(getImage(newItem));
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {showModal ? (
        <div
          className="main-modal fixed w-full h-screen inset-0 z-30 flex justify-center items-center2 animated fadeIn faster overflow-y-auto"
          // style={{ background: `rgba(12,15,19,.9)` }}
          style={{ background: `rgba(251,251,251,.9)` }}
          id="my-modal2"
        >
          <div className="fixed md:px-2 md:py-2 lg:px-2 lg:py-2 top-2 md:top-3 lg:top-3 xl:top-3 left-2">
            <button className="h-8 w-8" onClick={() => closeModal(false)}>
              <svg
                className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 md:text-gray-800 lg:text-gray-800 font-bold"
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
          <div className="absolute mt-0 md:mt-28 lg:mt-8 xl:mt-12 lg:border lg:border-teal-500 modal-container bg-white w-full md:w-8/12  md:rounded-lg lg:rounded-md md:shadow-lg lg:shadow-lg outline-none">
            {/* <div className="fixed md:absolute sm:mt-0 md:mt-8 lg:mt-8 xl:mt-12 lg:border lg:border-teal-500 modal-container bg-white w-full md:w-8/12  md:rounded lg:rounded md:shadow-lg lg:shadow-lg outline-none z-40"> */}
            <div className="flex justify-end py-2 px-2 md:hidden lg:hidden">
              <button className="h-8 w-8" onClick={() => closeModal(false)}>
                <svg
                  className="h-8 w-8 font-bold"
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
            {/* <div className="flex-auto md:flex lg:flex flex-wrap -mt-8 md:-mt-0 lg:-mt-0 px-5 py-0 ">
              <div className="flex w-full inline-flex py-3 px-2 justify-between md:justify-between "> */}
             <div className="flex md:flex lg:flex flex-wrap  md:-mt-0 lg:-mt-0 px-5 py-0 items-center justify-between border-b">
                  <div className="flex w-full2 inline-flex py-0 xs:justify-between sm:justify-between md:justify-start lg:justify-start">
                    <div className=" py-3 left-0  space-x-1">
                      <div className="flex items-center inline-flex space-x-1">
                        <Avatar
                          name="ratri"
                          size="40"
                          round={true}
                          className="flex items-center justify-center shadow-xl rounded-full w-12 h-12 align-middle border-none sm:w-20 lg:w-60"
                        />

                        <div className="block place-self-center px-2 text-sm text-gray-600 capitalize font-semibold">
                          Ratri
                          <br />
                          <span className="text-xs font-light2 ">
                            12 follower
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full2 space-x-1 md:space-x-2 justify-end md:justify-end lg:justify-end hidden2 md:block">
                    <div
                      className="bg-blue-600 px-2 py-2 font-extralight text-white border border-blue-600 inline-flex items-center rounded-full hover:border-blue-700 hover:bg-blue-700 hover:text-white cursor-pointer"
                      title="facebook"
                    >
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </div>

                    <div
                      className="bg-blue-400 px-2 py-2 font-extralight text-gray-500 border border-blue-400 inline-flex items-center rounded-full hover:border-blue-500 hover:bg-blue-500 hover:text-gray-800 cursor-pointer"
                      title="tweet"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </div>
                    <div className="px-2 py-2 font-extralight text-white border bg-[#fe2c55] border-[#fe2c55] opacity-90 hover:opacity-100 inline-flex items-center rounded-full cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

            <div className="px-5 md:px-7 py-3 pb-5 border-b bg-gradient-to-t from-gray-100 to-white min-h-screen2 md:max-h-fit overflow-y-auto">
              <div className="flex justify-between">
                <div className="flex inline-flex justify-center items-center space-x-2 pb-3">
                  <div className="h-8 w-8">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiMxYzQzN2EiIGN4PSI1MSIgY3k9IjUyIiByPSI0MS41Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OS45OTk1IiB5MT0iOC41IiB4Mj0iNDkuOTk5NSIgeTI9IjkxLjUwMDUiPjxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjZiZDkiLz48c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjI1N2E1Ii8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiBjeD0iNTAiIGN5PSI1MCIgcj0iNDEuNSIvPjxnPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzUuMzY4LDYxLjUxNmMxLjA0NCwwLDEuODkyLTAuODQ3LDEuODkyLTEuODkyVjU1LjMxYzAtMS4wNDQtMC44NDgtMS44OTMtMS44OTItMS44OTMgcy0xLjg5MiwwLjg0OS0xLjg5MiwxLjg5M3Y0LjMxNEMzMy40NzYsNjAuNjY4LDM0LjMyMyw2MS41MTYsMzUuMzY4LDYxLjUxNnoiLz4gPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQzLjU1OSw0NC41NjZjMS4wNDUsMCwxLjg5Mi0wLjg0NywxLjg5Mi0xLjg5MnYtNC4zMTJjMC0xLjA0NS0wLjg0OC0xLjg5Mi0xLjg5Mi0xLjg5MiBzLTEuODkyLDAuODQ3LTEuODkyLDEuODkydjQuMzEyQzQxLjY2Nyw0My43MTgsNDIuNTE0LDQ0LjU2Niw0My41NTksNDQuNTY2eiIvPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzUuMzY4LDQ0LjU2NmMxLjA0NSwwLDEuODkyLTAuODQ3LDEuODkyLTEuODkydi00LjMxMmMwLTEuMDQ1LTAuODQ4LTEuODkyLTEuODkyLTEuODkyIHMtMS44OTIsMC44NDctMS44OTIsMS44OTJ2NC4zMTJDMzMuNDc2LDQzLjcxOCwzNC4zMjMsNDQuNTY2LDM1LjM2OCw0NC41NjZ6Ii8+IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NC40OCw0NC41NjZjMS4wNDUsMCwxLjg5Mi0wLjg0NywxLjg5Mi0xLjg5MnYtNC4zMTJjMC0xLjA0NS0wLjg0Ny0xLjg5Mi0xLjg5Mi0xLjg5MiBzLTEuODkyLDAuODQ3LTEuODkyLDEuODkydjQuMzEyQzUyLjU4OSw0My43MTgsNTMuNDM2LDQ0LjU2Niw1NC40OCw0NC41NjZ6Ii8+IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02My4yMjQsNjEuNTE2YzEuMDQ1LDAsMS44OTMtMC44NDcsMS44OTMtMS44OTJWNTUuMzFjMC0xLjA0NC0wLjg0OC0xLjg5My0xLjg5My0xLjg5MyBzLTEuODkyLDAuODQ5LTEuODkyLDEuODkzdjQuMzE0QzYxLjMzMiw2MC42NjgsNjIuMTc5LDYxLjUxNiw2My4yMjQsNjEuNTE2eiIvPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjMuMjI0LDQ0LjU2NmMxLjA0NSwwLDEuODkzLTAuODQ3LDEuODkzLTEuODkydi00LjMxMmMwLTEuMDQ1LTAuODQ4LTEuODkyLTEuODkzLTEuODkyIHMtMS44OTIsMC44NDctMS44OTIsMS44OTJ2NC4zMTJDNjEuMzMyLDQzLjcxOCw2Mi4xNzksNDQuNTY2LDYzLjIyNCw0NC41NjZ6Ii8+IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik03MS41NTQsMjcuNDE5SDI3LjQ0N2MtMS4wNDUsMC0xLjg5MiwwLjg0Ny0xLjg5MiwxLjg5MnY0MC43OThjMCwxLjA0NSwwLjg0NywxLjg5MywxLjg5MiwxLjg5M2g0NC4xMDcgYzEuMDQ1LDAsMS44OTItMC44NDgsMS44OTItMS44OTNWMjkuMzEyQzczLjQ0NSwyOC4yNjcsNzIuNTk5LDI3LjQxOSw3MS41NTQsMjcuNDE5eiBNNTQuNzM4LDY3Ljc4N0g0NC4wMTVWNTQuNzYzaDEwLjcyNFY2Ny43ODd6IE02OS42NjEsNjguMjE4SDU4LjUyMlY1Mi44N2MwLTEuMDQ0LTAuODQ4LTEuODkyLTEuODkzLTEuODkySDQyLjEyM2MtMS4wNDQsMC0xLjg5MiwwLjg0OC0xLjg5MiwxLjg5MnYxNS4zNDhIMjkuMzM5VjMxLjIwMyBoNDAuMzIyVjY4LjIxOHoiLz4gPC9nPjwvc3ZnPg=="
                      alt=""
                    />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    15 minutes ago
                  </div>
                </div>
                <div>
                  <div
                    className="flex inline-flex justify-center items-center space-x-1"
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
                    {showDrop && (
                      <div
                        ref={ref}
                        className={`sm:w-72 md:w-72 ${
                          showDrop === false ? "hidden" : ""
                        }  right-4 mt-24 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
                      >
                        <div className="py-2">
                          <ul className="flex-col font-sans items-center justify-center text-sm">
                            <Link to="">
                              <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                                <div className="flex items-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
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
                              <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                                <div className="flex items-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
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
                              <li className="sm:py-1 md:py-2 px-6 hover:bg-gray-200">
                                <div className="flex items-center space-x-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
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
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/* <a href="#">
                  <div className="flex inline-flex justify-center items-center space-x-1">
                    <div className="text-sm font-semibold text-gray-800">
                      Source
                    </div>
                    <div className="h-5 w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </div>
                  </div>
                </a> */}
              </div>
              <div className="py-2 pb-2">
                <p className="text-lg font-semibold text-gray-700 text-justify2 pb-2">
                  Graha Family minimalis siap huni dkt Citraland Pakuwon Indah
                  Dian Istana
                </p>
                <p>
                  *Dijual/ disewakan Graha Family minimalis siap huni*
                  <br />
                  Lt 360 (15x24), lb 450m
                  <br />
                  kt 4+1, Km 4+1
                  <br />
                  ada 1 ruang kantor
                  <br />
                  Utara
                  <br />
                  SHM
                  <br />
                  kosongan ( perabot yang nempel saja )<br />
                  • jual 10.975 M nego tipis
                  <br />
                  • sewa 225jt nego tipis
                  <br />
                  ( minim 2 thn )<br />
                </p>
              </div>
              <div className="py-2">
                <div className="absolute p-4 z-20 h-full2 w-full">
                  <button
                    className="p-3 bg-gray-800 h-8 justify-center items-center flex self-end2 rounded-2xl opacity-80 hover:opacity-100"
                    onClick={() => handleClick()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs text-white pl-1"> 1 / 5</span>
                  </button>
                </div>
                <img className="w-full" src={omah1} alt="image" />
              </div>

              <div className="flex justify-between mt-2">
                <a href="#">
                  <div className="flex inline-flex justify-center items-center space-x-1">
                    <div className="h-5 w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      777x disukai
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="flex inline-flex justify-center items-center space-x-1">
                    <div className="text-xs font-semibold text-gray-600">
                      666x dilihat
                    </div>
                    <div className="h-5 w-5 rounded-full border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="px-8 py-2">
              <div className="py-3 text-bold text-md">Related Tags</div>
              <div className="flex items-center justify-between pb-4 ">
                <div className="top-0 py-2 flex">
                  <div className="flex inline-flex space-x-2">
                    <button className="items-center text-blue-700 justify-center px-3 py-1 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 hover:text-blue-800 font-normal">
                      <span className="text-sm">#Rumah</span>
                    </button>
                    <button className="items-center text-blue-700 justify-center px-3 py-1 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 hover:text-blue-800 font-normal">
                      <span className="text-sm">#Jual</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <DetailComment />
          </div>
        </div>
      ) : null}

      {clickedImg && (
        <ModalGallery
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </>
  );
};

export default Modal2;
