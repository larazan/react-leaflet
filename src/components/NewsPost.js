import React, { useState, useRef, useEffect } from "react";
import Avatar from "react-avatar";
import { Link, useLocation } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import RenderSvg from "./RenderSvg";
import UserAvatar from "./UserAvatar";

import bbm from "../assets/images/bbm.jpg";

import twitter from "../assets/images/twitter.svg";
import facebook from "../assets/images/facebook.svg";

const NewsPost = () => {
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
    // const id = e.currentTarget.dataset.id;
    // setMenuId(parseInt(id));
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  const commentHandler = (e) => {
    e.stopPropagation();
    setKomen(8)
    // console.log('comment click');
    // console.log("comment");
  };

  const shareHandler = (e) => {
    e.stopPropagation();
    // const id = e.currentTarget.dataset.id;
    // setShareId(parseInt(id));
    // console.log(id);
    // setOpenShare((prev) => !prev);
  };

  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray]);
    }
  }, []);

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
      <div className="flex flex-wrap -mx-px md:-mx-3">
        <div className=" p-0 md:px-3 md:w-8/12 pt-5 md:mx-auto mb-8">
        <Link
            // key={article.id}
            to={`d`}
            // to=""
            // state={{ background: location }}
          >
          <div 
            className="border-b cursor-pointer hover:bg-gray-100" 
            // key={idx} 
            // id={article.id}
          >
            <div
              className={`py-3  hover:border-gray-100 px-3`}
            >
              <div className="flex justify-between mb-2 w-full pb-0 border-b2">
                <div className="flex inline-flex justify-center items-center space-x-3">
                  
                    <>
                      <div className="h-9 w-9">
                        {/* <Avatar name="berliana lovell" size="41" round={true} /> */}
                        <UserAvatar name="berliana lovell" size="41" round={true} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-600 capitalize">
                          berliana lovell
                        </span>
                        <div className="flex inline-flex justify-center items-center space-x-1">
                          <div className="h-6 w-6">
                            <RenderSvg c="ekonomi-2" f={1} g={0} />
                          </div>
                          <div className="text-xs font-semibold text-gray-400">
                            <ReactTimeAgo
                              date="2022-02-26T12:59-0500"
                              locale="en-US"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  
                </div>
                <div>
                  <div
                    className="flex inline-flex justify-center items-center space-x-1"
                    onClick={openDrop}
                    // data-id={idx}
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
                        // ref={ref}
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
                  dangerouslySetInnerHTML={{__html: replaceWithBr('PT Pertamina (Persero) resmi menaikkan hargaproduk BBM non subsidi. Harga produk yang naik adalah Pertamax Turbo, Dexlite, dan Pertamina Dex.')}}
                  className="font-light text-gray-700"
                />
                {bbm ? (
                  <div className="py-2">
                    <img
                      className="w-full"
                      src={bbm}
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
                  <div className="flex inline-flex justify-center relative items-center space-x-1">
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
                      <div className="absolute flex z-[20] right-0 rounded-full border items-center justify-between shadow-md">
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
            </div>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsPost;
