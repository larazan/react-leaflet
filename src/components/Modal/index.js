import React from "react";

import imgExplode from "../../assets/icons/exploison.svg";
import imag3 from "../../assets/images/22399192_0.jpg";

const Modal = ({ showModal, closeModal }) => {
  return (
    <>
      {showModal ? (
        <div
          className="main-modal fixed w-full h-full inset-0 z-20 flex justify-center items-center2 animated fadeIn faster overflow-y-auto"
          // style={{ background: `rgba(12,15,19,.9)` }}
          style={{ background: `rgba(251,251,251,.9)` }}
          id="my-modal"
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
          <div className="absolute sm:mt-0 md:mt-8 lg:mt-8 xl:mt-12 lg:border lg:border-teal-500 modal-container bg-white w-8/12 lg:w-8/12  md:rounded lg:rounded md:shadow-lg lg:shadow-lg outline-none">
            <div className="flex justify-end py-2 px-2 md:hidden lg:hidden">
              <button className="h-8 w-8">
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
            <div className="flex-auto md:flex lg:flex flex-wrap -mt-8 md:-mt-0 lg:-mt-0 px-5 py-0 items-center justify-between border-b">
              <div className="flex w-full2 inline-flex py-0 xs:justify-between sm:justify-between md:justify-start lg:justify-start">
                {/* <div className="flex items-center inline-flex space-x-1">
                  <div
                    className="px-2 py-2 text-gray-700 inline-flex items-center hover:text-gray-900 cursor-pointer"
                    title="facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                    <span className="pl-1 font-semibold">Source</span>
                  </div>
                </div> */}

                <div className="relative py-3 left-0  space-x-1">
                  <div
                    className="px-2 py-2 text-blue-500 inline-flex items-center hover:text-blue-700 cursor-pointer"
                    title="facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="pl-1 font-semibold"> On live map</span>
                  </div>
                </div>
              </div>

              <div className="flex w-full2 space-x-2 justify-between md:justify-end lg:justify-end">
                <div
                  className="bg-white px-2 py-2 font-extralight text-gray-500 border border-blue-600 inline-flex items-center rounded-full hover:border-white-100 hover:bg-blue-600 hover:text-white cursor-pointer"
                  title="facebook"
                >
                  <img
                    className="h-4 w-4"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU2LjY5MyA1Ni42OTMiIGhlaWdodD0iNTYuNjkzcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1Ni42OTMgNTYuNjkzIiB3aWR0aD0iNTYuNjkzcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00MC40MywyMS43MzloLTcuNjQ1di01LjAxNGMwLTEuODgzLDEuMjQ4LTIuMzIyLDIuMTI3LTIuMzIyYzAuODc3LDAsNS4zOTUsMCw1LjM5NSwwVjYuMTI1bC03LjQzLTAuMDI5ICBjLTguMjQ4LDAtMTAuMTI1LDYuMTc0LTEwLjEyNSwxMC4xMjV2NS41MThoLTQuNzd2OC41M2g0Ljc3YzAsMTAuOTQ3LDAsMjQuMTM3LDAsMjQuMTM3aDEwLjAzM2MwLDAsMC0xMy4zMiwwLTI0LjEzN2g2Ljc3ICBMNDAuNDMsMjEuNzM5eiIvPjwvc3ZnPg=="
                    alt="facebook"
                  />
                </div>

                <div
                  className="bg-white px-2 py-2 font-extralight text-gray-500 border border-blue-400 inline-flex items-center rounded-full hover:border-blue-400 hover:bg-blue-400 hover:text-gray-800 cursor-pointer"
                  title="tweet"
                >
                  <img
                    className="h-4 w-4"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNNCw0NDAuNWM1NS42LDUsMTA1LjctOSwxNTEuMy00My4yYy00Ny43LTQuMi03OS42LTI4LTk3LjQtNzIuNmMxNS42LDEuOSwzMC4yLDIuNCw0NS43LTEuOCAgIGMtNTEuNC0xNi03OC44LTQ5LjYtODIuNS0xMDMuOGMxNS40LDcuMiwyOS45LDEyLjQsNDcsMTIuNmMtMzAuNS0yMi45LTQ2LjEtNTIuNi00NS41LTkwYzAuMy0xNy4yLDQuOS0zMy40LDE0LTQ4LjcgICBDOTMuMSwxNTkuMSwxNjQsMTk1LjcsMjUxLjMsMjAxLjhjLTAuNS0zLjgtMC44LTYuOC0xLjItOS45Yy03LjItNTUuNCwyOC44LTEwNS44LDgzLjgtMTE2LjNjMzQuNS02LjYsNjUsMi41LDkwLjgsMjYuMyAgIGM0LDMuNiw3LjQsNC40LDEyLjQsMy4xYzIwLjEtNS4xLDM5LjItMTIuNSw1Ny43LTIyLjVjLTcuMSwyMy40LTIxLjcsNDEtNDEuNSw1NS44YzQuNS0wLjgsOS4xLTEuNCwxMy42LTIuMyAgIGM0LjctMSw5LjQtMi4xLDE0LjEtMy40YzQuNS0xLjIsOC45LTIuNiwxMy4zLTQuMWM0LjUtMS41LDktMy4yLDE0LjMtNC4xYy0yLjYsMy42LTUuMSw3LjQtNy45LDEwLjljLTExLjYsMTQuNy0yNSwyNy42LTM5LjcsMzkuMSAgIGMtMS41LDEuMi0yLjgsMy44LTIuNyw1LjZjMC44LDM1LjUtNC4yLDcwLjEtMTUuNywxMDMuN2MtMjIuNiw2Ni4yLTYyLDExOS44LTEyMS4xLDE1OC4xYy0yOS4yLDE4LjktNjEuMSwzMS4zLTk1LjIsMzguNSAgIGMtMzMuOCw3LjEtNjcuOCw4LjQtMTAxLjksNC40Yy0zNC4yLTQtNjYuNy0xNC4xLTk3LjMtMjkuOWMtOC4xLTQuMS0xNS45LTguNy0yMy44LTEzLjFDMy42LDQ0MS4zLDMuOCw0NDAuOSw0LDQ0MC41eiIvPjwvZz48L3N2Zz4="
                    alt="twitter"
                  />
                </div>
              </div>
            </div>

            <div className="px-7 py-3 pb-5 border-b bg-gradient-to-b from-gray-100 to-white">
            <div className="flex justify-between">
                <div className="flex inline-flex justify-center items-center space-x-2 pb-3">
                  <div className="h-8 w-8">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiM4MDE2MTUiIGN4PSI1MSIgY3k9IjUyIiByPSI0MS41Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OS45OTk1IiB5MT0iOC41IiB4Mj0iNDkuOTk5NSIgeTI9IjkxLjUwMDUiPjxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNkNjU0MzEiLz48c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojYjUxYzFjIi8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiBjeD0iNTAiIGN5PSI1MCIgcj0iNDEuNSIvPjxnPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTAuMDAyLDI4LjI1OGMtMTQuMjEsMC0yMy4yMDksOC41MTktMjMuMjA5LDE4Ljk2MmMwLjEzNCw0LjI1NywxLjI0OSw4LjQyOSwzLjI1OSwxMi4xODRoNS44MjhjMCwwLDQuMTM1LDAsNS4xNzMsMTIuMzQ2aDQuMjcxdi0xLjY2N2MwLTAuNjgxLDAuNTUzLTEuMjM0LDEuMjM1LTEuMjM0YzAuNjgyLDAsMS4yMzQsMC41NTQsMS4yMzQsMS4yMzR2MS42NjdoNC41ODF2LTEuNjY3YzAtMC42ODEsMC41NTMtMS4yMzQsMS4yMzQtMS4yMzRjMC42ODEsMCwxLjIzNSwwLjU1NCwxLjIzNSwxLjIzNHYxLjY2N2g0LjA5N2MxLjAzOC0xMi4zNDYsNS4xNzQtMTIuMzQ2LDUuMTc0LTEyLjM0Nmg1LjgyN2MyLjAxLTMuNzU1LDMuMTI1LTcuOTI3LDMuMjU5LTEyLjE4NEM3My4yMTIsMzYuNzY0LDY0LjIxMiwyOC4yNTgsNTAuMDAyLDI4LjI1OHogTTM5Ljk0MSw1MS43MTNjLTIuNzY5LDAtNS4wMTItMi4yNDItNS4wMTItNS4wMTFzMi4yNDQtNS4wMTIsNS4wMTItNS4wMTJjMi43NjgsMCw1LjAxMiwyLjI0NCw1LjAxMiw1LjAxMlM0Mi43MDksNTEuNzEzLDM5Ljk0MSw1MS43MTNMMzkuOTQxLDUxLjcxM3ogTTUzLjAxNSw1OS43NzVjLTAuNjMsMS4wMDEtNS4zMDksMC45MzgtNi4wNDksMGMtMC43NDItMC45MzgsMi02Ljk2MywzLjAyNC02Ljk2M0M1MS4wMTYsNTIuODEzLDUzLjcwNyw1OC43ODcsNTMuMDE1LDU5Ljc3NXogTTYwLjI1LDUxLjcxM2MtMi43NzEsMC01LjAxMy0yLjI0Mi01LjAxMy01LjAxMXMyLjI0Mi01LjAxMiw1LjAxMy01LjAxMmMyLjc2NywwLDUuMDEyLDIuMjQ0LDUuMDEyLDUuMDEyUzYzLjAxNyw1MS43MTMsNjAuMjUsNTEuNzEzTDYwLjI1LDUxLjcxM3oiLz48L2c+PC9zdmc+"
                      alt=""
                    />
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    15 minutes ago
                  </div>
                </div>
                <a href="#" >
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
                </a>
              </div>
              <div className="py-2 pb-2">
                <p className="text-lg font-semibold text-gray-700 text-justify2">
                  A group of Chechen saboteurs who were moving around Kyiv in
                  the ambulance has just been shot by the Ukrainian military
                  intelligence officers (GUR MOU) in Kyiv, partly shot, partly
                  detained
                </p>
              </div>
              <div className="py-2">
                <img className="w-full" src={imag3} alt="image" />
              </div>
              
            </div>

            <div className="px-8 py-2">
              <div className="py-3 text-bold text-md">Related Tags</div>
              <div className="flex items-center justify-between pb-4 ">
                <div className="top-0 py-2 flex">
                  <div className="flex inline-flex space-x-2">
                    <button className="items-center text-blue-700 justify-center px-3 py-1 bg-blue-100 rounded-full cursor-pointer hover:bg-blue-200 hover:text-blue-800 font-normal">
                      <span className="text-sm">#Tag</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
