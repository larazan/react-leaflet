import React, { useState, useRef } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

import Comments from "./Comments";
import ModalGallery from "./ModalGallery";

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

const NewsModal = ({ showModal, closeModal }) => {
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
          className="main-modal fixed w-full h-full inset-0 z-40 flex justify-center items-center2 animated fadeIn faster overflow-y-auto"
          style={{ background: `rgba(12,15,19,.5)` }}
          // style={{ background: `rgba(251,251,251,.9)` }}
          id="my-modal"
        >
          <div className="fixed md:px-2 md:py-2 lg:px-2 lg:py-2 top-2 md:top-3 lg:top-3 xl:top-3 left-2">
            <button className="h-8 w-8" onClick={() => closeModal(false)}>
              <svg
                className="h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 md:text-white lg:text-white font-bold"
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
          <div className="absolute sm:mt-0 md:mt-28 lg:mt-8 xl:mt-12 lg:border lg:border-teal-500 modal-container bg-white w-full md:w-6/12  md:rounded-lg lg:rounded-md md:shadow-lg lg:shadow-lg outline-none">
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
            <div className="flex-auto md:flex lg:flex flex-wrap -mt-8 md:-mt-0 lg:-mt-0 px-5 py-0 ">
              <div className="flex w-full inline-flex py-3 px-2 justify-between md:justify-between ">
              <div className="flex-col space-y-1">
                  
                  <div>
                    <span className="text-3xl">27&#176;C</span>
                  </div>
                  <div>
                    <span className="text-sm">Tuesday</span>,{" "}
                    <span className="text-sm text-gray-400">11:27 PM</span>
                  </div>
                </div>
              </div>
            </div>
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

export default NewsModal;
