import React from "react";

const ModalGallery = ({
  clickedImg,
  setClickedImg,
  handelRotationRight,
  handelRotationLeft
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="z-50 overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <div
          onClick={handelRotationLeft}
          className="flex justify-between items-center absolute z-90 w-14 h-16 inset-y-1/2 left-0 bg-gray-600 opacity-50 hover:bg-gray-400 cursor-pointer"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
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
          className="flex justify-between items-center absolute z-90 w-14 h-16 inset-y-1/2 right-0 bg-gray-600 opacity-50 hover:bg-gray-400 cursor-pointer"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
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
    </>
  );
};

export default ModalGallery;
