import React, { useState, useRef, useEffect } from "react";
import Avatar from "react-avatar";
import { Link, useLocation } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

// import Modal from "../Modal";
import Modal from "../Modal2";

import RenderIcon from "../RenderIcon";
import RenderSvg from "../RenderSvg";
import UserAvatar from "../UserAvatar";

import imag from "../../assets/images/22399054_0.jpg";
import imag2 from "../../assets/images/22399259_0.jpg";
import imag3 from "../../assets/images/22399192_0.jpg";
import bakery from "../../assets/images/bakery.jpg";
import bmkg from "../../assets/images/bmkg.jpg";
import tenis from "../../assets/images/tenis.jpg";
import even from "../../assets/images/even.jpg";
import ied from "../../assets/images/ied.jpg";
import pln from "../../assets/images/pln.jpg";
import bbm from "../../assets/images/bbm.jpg";

import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";

const getImage = (imgName) => {
  let imgNews = "";
  switch (imgName) {
    case "imag":
      imgNews = imag;
      break;
    case "imag2":
      imgNews = imag2;
      break;
    case "imag3":
      imgNews = imag3;
      break;
    case "bakery":
      imgNews = bakery;
      break;
    case "bmkg":
      imgNews = bmkg;
      break;
    case "tenis":
      imgNews = tenis;
      break;
    case "pln":
      imgNews = pln;
      break;
    case "even":
      imgNews = even;
      break;
    case "ied":
      imgNews = ied;
      break;
    case "bbm":
      imgNews = bbm;
      break;
  }

  return imgNews;
};

const ContentNews = ({
  news,
  handleOnFlyTo,
  selected,
  setSelected,
  setSelectedIndex,
  handleId,
}) => {
  const [newsId, setNewsId] = useState(0);
  const [shareId, setShareId] = useState(0);
  const [menuId, setMenuId] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showDrop, setShowDrop] = useState(false);
  const [komen, setKomen] = useState(12);
  const [suka, setSuka] = useState(230);

  const location = useLocation();

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDrop(false));

  const getArray = JSON.parse(localStorage.getItem("favorites") || "0");

  const openDrop = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    setMenuId(parseInt(id));
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

  const openModal = () => {
    console.log("modal open!");
    setShowModal((prev) => !prev);
  };

  const clickHandler = (e) => {
    console.log("click");
    const id = e.currentTarget.dataset.id;
    const lat = e.currentTarget.dataset.lat;
    const lng = e.currentTarget.dataset.lng;

    setSelected(parseInt(id));
    setSelectedIndex(parseInt(id) - 1);
    handleId(parseInt(id));
    
    if (selected === parseInt(id)) {
      console.log("sama");
      openModal();
    } else {
      console.log("beda");
      if (lat) {
        handleOnFlyTo(lat, lng);
      } else {
        openModal();
      }
    }
    
    console.log(id);
    console.log(selected);
  };

  const shareHandler = (e) => {
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    setShareId(parseInt(id));
    // console.log(id);
    setOpenShare((prev) => !prev);
  };

  const sourceHandler = (e) => {
    e.stopPropagation();
    // console.log("source");
  };

  const commentHandler = (e) => {
    e.stopPropagation();
    setKomen(8)
    // console.log('comment click');
    // console.log("comment");
  };

  console.log(newsId);

  const disneyWorldLatLng = [28.3852, -81.5639];

  const mapRef = useRef();

  /**
   * handleOnSetView
   */

  function handleOnSetView() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.setView(disneyWorldLatLng, 14);
  }

  // console.log(selected);

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
    return title.replace(/\n/g, "<br />")
  }

  return (
    <>
      {/* <div className="w-full max-w-md h-screen overflow-auto flex-none px-0 hidden2 md:block custom-scrollbar"> */}
      <div className="bg-white mt-10 md:mt-4 z-20">
        <div className="flex justify-between space-x-2 pb-2 px-3 border-b">
          <div className="flex flex-wrap w-2/3 items-center hidden md:flex">
            <div className="flex w-full">
              <a
                className="text-md font-bold text-gray-800 uppercase "
                href="#"
              >
                News Live
              </a>
            </div>
            <div className="text-xs text-gray-800">
              Updated on 01/03/2022 14:21:32
            </div>
          </div>
          <div className="flex flex-row-reverse w-1/3">
            <div className="flex flex-wrap pl-2 items-center hidden md:flex">
              <a
                className="text-xs font-extrabold text-blue-500 uppercase "
                href="#"
              >
                About
              </a>
            </div>
            <div className="flex flex-wrap  items-center hidden md:flex">
              <a
                className="text-xs font-extrabold text-blue-500 uppercase "
                href="#"
              >
                Api
              </a>
            </div>
          </div>
        </div>
        {news.map((article, idx) => (
          <Link
            key={article.id}
            to={`d`}
            // to=""
            state={{ background: location }}
          >
          <div className="border-b cursor-pointer hover:bg-gray-100" key={idx} id={article.id}>
            <div
              className={`py-3 border-l-4  ${
                parseInt(selected) === article.id
                  ? "border-red-500 selected"
                  : "border-white hover:border-gray-100"
              } px-3`}
              data-id={article.id}
              data-lat={article.lat ? article.lat : ""}
              data-lng={article.lng ? article.lng : ""}
              onClick={clickHandler}
            >
              <div className="flex justify-between mb-2 w-full pb-0 border-b2">
                <div className="flex inline-flex justify-center items-center space-x-3">
                  {article.name ? (
                    <>
                      <div className="h-9 w-9">
                        <UserAvatar name={article.name} size="41" round={true} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-600 capitalize">
                          {article.name}
                        </span>
                        <div className="flex inline-flex justify-center items-center space-x-1">
                          <div className="h-6 w-6">
                            <RenderSvg c={article.ikon} f={1} g={0} />
                          </div>
                          <div className="text-xs font-semibold text-gray-400">
                            <ReactTimeAgo
                              date={article.created_at}
                              locale="en-US"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="h-9 w-9">
                        <RenderSvg c={article.ikon} f={1} g={0} />
                      </div>
                      <div className="text-xs font-semibold text-gray-400">
                        <ReactTimeAgo
                          date={article.created_at}
                          locale="en-US"
                        />
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <div
                    className="flex inline-flex justify-center items-center space-x-1"
                    onClick={openDrop}
                    data-id={idx}
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
                    {menuId === idx ? (
                      <div
                        ref={ref}
                        className={`sm:w-72 md:w-72 ${
                          showDrop === false ? "hidden" : ""
                        }  right-1 mt-24 md:mt-32 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
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
                    ) : null}
                  </div>
                </div>

                {/* <a href="#" onClick={sourceHandler}>
                    <div className="flex inline-flex justify-center items-center space-x-1">
                      <div className="text-xs font-semibold text-gray-800">
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
              <div className="py-2">
                {/* <div className="font-light text-gray-700">
                  {
                    article.title.split('\n').map(e => <p>{e}</p>)
                  }
                </div> */}
                <div
                  dangerouslySetInnerHTML={{__html: replaceWithBr(article.title)}}
                  className="font-light text-gray-700"
                />
                {article.images ? (
                  <div className="py-2">
                    <img
                      className="w-full"
                      src={getImage(article.images)}
                      alt="image"
                    />
                  </div>
                ) : (
                  <div className="py-3"></div>
                )}
              </div>
              <div className="flex justify-between w-full">
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
                      {komen > 0 ? komen : 'Comment'}
                    </div>
                  </div>
                </div>
                {favorites.includes(idx) ? (
                  <div
                    onClick={() => addFav({ article, idx })}
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
                    onClick={() => addFav({ article, idx })}
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
                  data-id={idx}
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
                    {shareId === idx ? (
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
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))}
        <div className="px-3 py-5 text-center">
          <a href>
            <span className="text-blue-400 font-semibold uppercase cursor-pointer">
              Show Previous
            </span>
          </a>
        </div>
      </div>
      {/* </div> */}

      <Modal showModal={showModal} closeModal={setShowModal} />
    </>
  );
};

export default ContentNews;
