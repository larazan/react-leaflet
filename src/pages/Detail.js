import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "./../hooks/useOnClickOutside";

import ModalGallery from "../components/ModalGallery";
import RenderSvg from "../components/RenderSvg";
import Footer from "../components/Footer";
import DetailComment from "../components/DetailComment";
import UserAvatar from "../components/UserAvatar";

import twitter from "./../assets/images/twitter.svg";
import facebook from "./../assets/images/facebook.svg";

import data from "./../assets/data/images.json";
import omah1 from "./../assets/images/omah1.jpg";
import omah2 from "./../assets/images/omah2.jpg";
import omah3 from "./../assets/images/omah3.jpg";
import omah4 from "./../assets/images/omah4.jpg";
import omah5 from "./../assets/images/omah5.jpg";

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

const Detail = () => {
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

  const handleClick = () => {
    setCurrentIndex(1);
    setClickedImg(omah1);
    setShowModalGallery(true);
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
      <main>
        <header className="flex md:hidden z-20 md:z-20 h-10 md:h-14 w-full  top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between bg-gray-100 border-b shadow">
          <div className="flex inline-flex w-full justify-center items_center space-x-3">
            <div className="flex w-1/4 w-full">
              <button className="p-1 rounded-full2 hover:bg-gray-300">
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
        <div className="flex items-center justify-center bg-[#f5f5f5]">
          <div className="w-full max-w-3xl px-0 md:px-10 py-1 md:py-8 ">
            <div className="mx-auto pt-0 md:pt-0">
              <div className="relative mt-0 md:mt-12 lg:mt-8 xl:mt-12 w-full  outline-none">
                <div className="flex md:flex lg:flex flex-wrap  md:-mt-0 lg:-mt-0 px-5 py-0 items-center justify-between border-b">
                  <div className="flex w-full2 inline-flex py-0 xs:justify-between sm:justify-between md:justify-start lg:justify-start">
                    <div className=" py-3 left-0  space-x-1">
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

                <div className="px-5 md:px-7 py-3 pb-5 border-b ">
                  <div className="flex justify-between">
                    <div className="flex inline-flex justify-center items-center space-x-2 pb-3">
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
                                        class="icon icon-tabler icon-tabler-mood-sad"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                          fill="none"
                                        ></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <line
                                          x1="9"
                                          y1="10"
                                          x2="9.01"
                                          y2="10"
                                        ></line>
                                        <line
                                          x1="15"
                                          y1="10"
                                          x2="15.01"
                                          y2="10"
                                        ></line>
                                        <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0"></path>
                                      </svg>
                                      <span>
                                        Tidak tertarik dengan tweet ini
                                      </span>
                                    </div>
                                  </li>
                                </Link>
                                <Link to="">
                                  <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                    <div className="flex items-center space-x-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-flag"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                          fill="none"
                                        ></path>
                                        <line
                                          x1="5"
                                          y1="5"
                                          x2="5"
                                          y2="21"
                                        ></line>
                                        <line
                                          x1="19"
                                          y1="5"
                                          x2="19"
                                          y2="14"
                                        ></line>
                                        <path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0"></path>
                                        <path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0"></path>
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
                                        class="icon icon-tabler icon-tabler-bookmark"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                          fill="none"
                                        ></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                      </svg>
                                      <span>Markah tweet ini</span>
                                    </div>
                                  </li>
                                </Link>
                                <Link to="">
                                  <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                    <div className="flex items-center space-x-2">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-file-plus"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                          fill="none"
                                        ></path>
                                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                                        <line
                                          x1="12"
                                          y1="11"
                                          x2="12"
                                          y2="17"
                                        ></line>
                                        <line
                                          x1="9"
                                          y1="14"
                                          x2="15"
                                          y2="14"
                                        ></line>
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
                                        class="icon icon-tabler icon-tabler-external-link"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      >
                                        <path
                                          stroke="none"
                                          d="M0 0h24v24H0z"
                                          fill="none"
                                        ></path>
                                        <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                                        <line
                                          x1="10"
                                          y1="14"
                                          x2="20"
                                          y2="4"
                                        ></line>
                                        <polyline points="15 4 20 4 20 9"></polyline>
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
                  <div className="py-2 pb-2">
                    <p className="text-lg font-semibold text-gray-700 text-justify2 pb-2">
                      Graha Family minimalis siap huni dkt Citraland Pakuwon
                      Indah Dian Istana
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
                    <div className="absolute p-4 z-20 h-full2 w-full2">
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

                <div className="flex justify-between w-full py-4 px-6 border-b">
                  <div
                    className="flex w-1/3 cursor-pointer"
                    onClick={commentHandler}
                  >
                    <div className="flex inline-flex justify-center items-center space-x-1">
                      <div className="h-5 w-5">
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
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <div className="text-xs font-semibold text-gray-600">
                        {komen > 0 ? komen : "Comment"}
                      </div>
                    </div>
                  </div>
                  {favorites.includes() ? (
                    <div
                      onClick={() => addFav({})}
                      data-event="fav"
                      className="flex w-1/3 text-center justify-center cursor-pointer"
                    >
                      <div className="flex inline-flex justify-center items-center space-x-1">
                        <div className="h-5 w-5 text-rose-500">
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
                          {suka}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => addFav({})}
                      data-event="fav"
                      className="flex w-1/3 text-center justify-center cursor-pointer"
                    >
                      <div className="flex inline-flex justify-center items-center space-x-1">
                        <div className="h-5 w-5 ">
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
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                        <div className="text-xs font-semibold text-gray-600">
                          {suka}
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    href="#"
                    onClick={shareHandler}
                    // data-id={idx}
                    data-event="share"
                    className="w-1/3 text-right cursor-pointer"
                  >
                    <div className="flex inline-flex justify-center items-center space-x-1">
                      <div className="text-xs font-semibold text-gray-600">
                        Share
                      </div>
                      <div className="h-5 w-5 rounded-full border">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </div>
                      {/* {shareId === idx ? ( */}
                      <div className="absolute flex z-[20] right-1 rounded-full border items-center justify-between shadow-md">
                        <a
                          data-id="22436481"
                          className="facebook-icon fb w-12 h-10 p-2 px-3 bg-white items-center rounded-l-2xl"
                          href="#"
                        >
                          <button className="h-6 w-6">
                            <img src={facebook} alt="" />
                          </button>
                        </a>
                        <a
                          data-id="22436481"
                          className="twitter-icon twi w-12 h-10 p-2 px-3 bg-white items-center rounded-r-2xl"
                          href="#"
                        >
                          <button className="h-6 w-6">
                            <img src={twitter} alt="" />
                          </button>
                        </a>
                      </div>
                      {/* ) : null} */}
                    </div>
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
          </div>
        </div>
      </main>

      {clickedImg && (
        <ModalGallery
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
          showModalGallery={showModalGallery}
          closeModalGallery={setShowModalGallery}
        />
      )}

      <Footer />
    </>
  );
};

export default Detail;
