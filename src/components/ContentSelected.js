import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "./../hooks/useOnClickOutside";

import RenderSvg from "./RenderSvg";
import DetailComment from "./DetailComment";
import UserAvatar from "./UserAvatar";

import twitter from "./../assets/images/twitter.svg";
import facebook from "./../assets/images/facebook.svg";

import bbm from "./../assets/images/bbm.jpg";

const ContentSelected = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showModalGallery, setShowModalGallery] = useState(false);
  const [komen, setKomen] = useState(12);
  const [suka, setSuka] = useState(230);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDrop(false));

  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  const shareHandler = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    // setShareId(parseInt(id));
    // console.log(id);
    setOpenShare((prev) => !prev);
  };

  const commentHandler = (e) => {
    e.stopPropagation();
    setKomen(8);
    // console.log('comment click');
    // console.log("comment");
  };

  const addFav = (props) => {
    // e.stopPropagation()
    // console.log("tambah favorit");
    let array = favorites;
    let addArray = true;
    array.map((item, key) => {
      if (item === props.idx) {
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray) {
      array.push(props.idx);
    }
    setFavorites([...array]);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    var storage = localStorage.getItem("favItem" + props.idx || "0");
    if (storage == null) {
      localStorage.setItem(
        "favItem" + props.idx,
        JSON.stringify(props.article)
      );
    } else {
      localStorage.removeItem("favItem" + props.idx);
    }
  };

  const replaceWithBr = (title) => {
    return title.replace(/\n/g, "<br />");
  };

  const openDrop = (e) => {
    e.stopPropagation();
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  return (
    <>
      <div className="absolute bottom-0 w-[50vh] bg-white border rounded-t-lg z-10">
        <div className="mt-1 py-1">
          <div className="mx-auto w-10 h-2 bg-gray-300 rounded"></div>
        </div>

        <div className="w-full max-w-3xl px-0 py-1 md:py-2 ">
          <div className="mx-auto pt-0 md:pt-0">
            <div className="relative mt-0 w-full outline-none">
              <div className="flex md:flex lg:flex flex-wrap  md:-mt-0 lg:-mt-0 px-5 py-0 items-center justify-between border-b">
                <div className="flex w-full2 inline-flex py-0 xs:justify-between sm:justify-between md:justify-start lg:justify-start">
                  <div className="py-2 left-0 space-x-1">
                    <div className="flex items-center inline-flex space-x-1">
                      <UserAvatar
                        name="berliana lovell"
                        size="40"
                        round={true}
                        className="flex items-center justify-center shadow-xl rounded-full w-12 h-12 align-middle border-none sm:w-20 lg:w-60"
                      />

                      <div className="block place-self-center px-2 text-sm text-gray-600 capitalize font-semibold">
                        berliana lovell
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

              <div className="px-5 md:px-7 py-1.5 pb-5 border-b ">
                <div className="flex justify-between">
                  <div className="flex inline-flex justify-center items-center space-x-2 pb-2">
                    <div className="h-8 w-8">
                      <RenderSvg c="rumah-2" f={1} g={0} />
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      15 minutes ago
                    </div>
                  </div>
                  <div>
                    <div
                      className="flex inline-flex justify-center items-center space-x-1 cursor-pointer"
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
                <div className="py-2 pb-1">
                  <p className="font-light text-gray-700 text-justify2 pb-2">
                  PT Pertamina (Persero) resmi menaikkan hargaproduk BBM non subsidi. Harga produk yang naik adalah Pertamax Turbo, Dexlite, dan Pertamina Dex.
                  </p>
                  
                </div>
                <div className="py-1">
                  <img className="w-full" src={bbm} alt="image" />
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

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSelected;
