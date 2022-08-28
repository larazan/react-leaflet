import React from "react";

import semarang from "../assets/images/semarang.jpg"

const ModalGallery = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft,
  showModalGallery, 
  closeModalGallery
}) => {

  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
     {showModalGallery ? (
      <div className="z-50 overlay" >
        <div className="absolute text-white top-3 right-3 text-md z-40 cursor-pointer ">
          <button className="dismiss" onClick={() => closeModalGallery(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          </button>
        </div>
        {/* <span className="dismiss" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}
        <div className="">
          <img src={clickedImg} alt="" className="w-full" />
        </div>
        <div
          onClick={handelRotationLeft}
          className="flex justify-between items-center absolute z-90 w-12 h-14 md:w-14 md:h-16 inset-y-1/22 left-0 bg-gray-600 opacity-50 hover:bg-gray-400 cursor-pointer"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 md:h-12 md:w-12 text-white"
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
          </div>
        </div>
        <div
          onClick={handelRotationRight}
          className="flex justify-between items-center absolute z-90 w-12 h-14 md:w-14 md:h-16 inset-y-1/22 right-0 bg-gray-600 opacity-50 hover:bg-gray-400 cursor-pointer"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 md:h-12 md:w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
     ) : null}
    </>
  );
};

export default ModalGallery;
