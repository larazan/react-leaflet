import React from "react";

import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Pricing = () => {
  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap2">
          <div className="w-full h-full flex flex-col z-0 outline-0 relative2">
            <div className="w-full h-full md:h-screen bg-cyan-300 px-5 py-20 text-gray-600 mt-10 mb-0">
              <div className="text-center max-w-xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-5">Pricing</h1>
                <h3 className="text-xl font-medium mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  repellat dignissimos laboriosam odit accusamus porro
                </h3>
              </div>
              <div className="max-w-4xl mx-auto md:flex">
                <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">
                      PERSONAL
                    </h2>
                    <h3 className="text-center font-bold text-4xl mb-5">$5/mo</h3>
                    <ul className="text-sm px-5 mb-8">
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Dolor sit
                        amet
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                  <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">TEAM</h2>
                    <h3 className="text-center font-bold text-4xl md:text-5xl mb-5">
                      $15/mo
                    </h3>
                    <ul className="text-sm px-5 mb-8">
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Dolor sit
                        amet
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Consectetur
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Adipisicing
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Elit repellat
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">PRO</h2>
                    <h3 className="text-center font-bold text-4xl mb-5">$35/mo</h3>
                    <ul className="text-sm px-5 mb-8">
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Lorem ipsum
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Dolor sit
                        amet
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Consectetur
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Adipisicing
                      </li>
                      <li className="leading-tight">
                        <i className="mdi mdi-check-bold text-lg"></i> Much more...
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              
            </div>

            <Faq />

            {/* <section
              className="
   bg-white
   px-10
   pt-20
   lg:pt-[120px]
   pb-12
   lg:pb-[90px]
   overflow-hidden
   "
            >
                <div className="flex flex-wrap2 -mx-4">
                  <div className="w-full px-4">
                    <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                      
                      <h2
                        className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                      >
                        Our Pricing Plan
                      </h2>
                      <p className="text-base text-body-color">
                        There are many variations of passages of Lorem Ipsum
                        available but the majority have suffered alteration in
                        some form.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center -mx-4">
                  <div className="w-full2 md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border-2 border-blue-600 border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
                    >
                      <span className="text-primary font-semibold text-lg block mb-4">
                        Personal
                      </span>
                      <h2 className="font-bold text-dark mb-5 text-[42px]">
                        $59
                        <span className="text-base text-body-color font-medium">
                          / year
                        </span>
                      </h2>
                      <p
                        className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                      >
                        Perfect for using in a personal website or a client
                        project.
                      </p>
                      <div className="mb-7">
                        <p className="text-base text-body-color leading-loose mb-1">
                          1 User
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          All UI components
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Lifetime access
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Free updates
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Use on 1 (one) project
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          3 Months support
                        </p>
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-blue-700 hover:border-blue-600
                  transition
                  "
                      >
                        Choose Personal
                      </a>
                      <div>
                        <span className="absolute right-0 top-7 z-[-1]">
                          <svg
                            width="77"
                            height="172"
                            viewBox="0 0 77 172"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="86"
                              cy="86"
                              r="86"
                              fill="url(#paint0_linear)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear"
                                x1="86"
                                y1="0"
                                x2="86"
                                y2="172"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stop-color="#3056D3"
                                  stop-opacity="0.09"
                                />
                                <stop
                                  offset="1"
                                  stop-color="#C4C4C4"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute right-4 top-4 z-[-1]">
                          <svg
                            width="41"
                            height="89"
                            viewBox="0 0 41 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="38.9138"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 38.9138 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 38.9138 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 38.9138 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 38.9138 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 38.9138 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 38.9138 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 38.9138 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="1.42021"
                              r="1.42021"
                              transform="rotate(180 38.9138 1.42021)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 26.4157 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 26.4157 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 26.4157 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 26.4157 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 26.4157 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 26.4157 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 26.4157 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="1.4202"
                              r="1.42021"
                              transform="rotate(180 26.4157 1.4202)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 13.9177 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 13.9177 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 13.9177 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 13.9177 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 13.9177 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 13.9177 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 13.9177 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="1.42019"
                              r="1.42021"
                              transform="rotate(180 13.9177 1.42019)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 1.41963 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 1.41963 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 1.41963 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 1.41963 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 1.41963 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 1.41963 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 1.41963 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="1.4202"
                              r="1.42021"
                              transform="rotate(180 1.41963 1.4202)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border-2 border-blue-600 border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
                    >
                      <span className="text-primary font-semibold text-lg block mb-4">
                        Business
                      </span>
                      <h2 className="font-bold text-dark mb-5 text-[42px]">
                        $199
                        <span className="text-base text-body-color font-medium">
                          / year
                        </span>
                      </h2>
                      <p
                        className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                      >
                        Perfect for using in a Business website or a client
                        project.
                      </p>
                      <div className="mb-7">
                        <p className="text-base text-body-color leading-loose mb-1">
                          5 Users
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          All UI components
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Lifetime access
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Free updates
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Use on 3 (Three) project
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          4 Months support
                        </p>
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-white
                  bg-blue-500
                  border-2 border-blue-600
                  rounded-md
                  text-center
                  p-4
                  hover:bg-opacity-90
                  transition
                  "
                      >
                        Choose Business
                      </a>
                      <div>
                        <span className="absolute right-0 top-7 z-[-1]">
                          <svg
                            width="77"
                            height="172"
                            viewBox="0 0 77 172"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="86"
                              cy="86"
                              r="86"
                              fill="url(#paint0_linear)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear"
                                x1="86"
                                y1="0"
                                x2="86"
                                y2="172"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stop-color="#3056D3"
                                  stop-opacity="0.09"
                                />
                                <stop
                                  offset="1"
                                  stop-color="#C4C4C4"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute right-4 top-4 z-[-1]">
                          <svg
                            width="41"
                            height="89"
                            viewBox="0 0 41 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="38.9138"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 38.9138 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 38.9138 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 38.9138 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 38.9138 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 38.9138 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 38.9138 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 38.9138 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="1.42021"
                              r="1.42021"
                              transform="rotate(180 38.9138 1.42021)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 26.4157 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 26.4157 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 26.4157 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 26.4157 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 26.4157 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 26.4157 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 26.4157 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="1.4202"
                              r="1.42021"
                              transform="rotate(180 26.4157 1.4202)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 13.9177 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 13.9177 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 13.9177 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 13.9177 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 13.9177 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 13.9177 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 13.9177 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="1.42019"
                              r="1.42021"
                              transform="rotate(180 13.9177 1.42019)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 1.41963 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 1.41963 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 1.41963 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 1.41963 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 1.41963 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 1.41963 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 1.41963 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="1.4202"
                              r="1.42021"
                              transform="rotate(180 1.41963 1.4202)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div
                      className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border-2 border-blue-600 border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
                    >
                      <span className="text-primary font-semibold text-lg block mb-4">
                        Professional
                      </span>
                      <h2 className="font-bold text-dark mb-5 text-[42px]">
                        $256
                        <span className="text-base text-body-color font-medium">
                          / year
                        </span>
                      </h2>
                      <p
                        className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                      >
                        Perfect for using in a Professional website or a client
                        project.
                      </p>
                      <div className="mb-7">
                        <p className="text-base text-body-color leading-loose mb-1">
                          Unlimited Users
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          All UI components
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Lifetime access
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Free updates
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          Use on Unlimited project
                        </p>
                        <p className="text-base text-body-color leading-loose mb-1">
                          12 Months support
                        </p>
                      </div>
                      <a
                        href="javascript:void(0)"
                        className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-blue-700 hover:border-blue-600
                  transition
                  "
                      >
                        Choose Professional
                      </a>
                      <div>
                        <span className="absolute right-0 top-7 z-[-1]">
                          <svg
                            width="77"
                            height="172"
                            viewBox="0 0 77 172"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="86"
                              cy="86"
                              r="86"
                              fill="url(#paint0_linear)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear"
                                x1="86"
                                y1="0"
                                x2="86"
                                y2="172"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop
                                  stop-color="#3056D3"
                                  stop-opacity="0.09"
                                />
                                <stop
                                  offset="1"
                                  stop-color="#C4C4C4"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="absolute right-4 top-4 z-[-1]">
                          <svg
                            width="41"
                            height="89"
                            viewBox="0 0 41 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="38.9138"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 38.9138 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 38.9138 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 38.9138 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 38.9138 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 38.9138 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 38.9138 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 38.9138 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="38.9138"
                              cy="1.42021"
                              r="1.42021"
                              transform="rotate(180 38.9138 1.42021)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 26.4157 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 26.4157 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 26.4157 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 26.4157 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 26.4157 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 26.4157 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 26.4157 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="26.4157"
                              cy="1.4202"
                              r="1.42021"
                              transform="rotate(180 26.4157 1.4202)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 13.9177 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 13.9177 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 13.9177 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 13.9177 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 13.9177 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 13.9177 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 13.9177 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="13.9177"
                              cy="1.42019"
                              r="1.42021"
                              transform="rotate(180 13.9177 1.42019)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="87.4849"
                              r="1.42021"
                              transform="rotate(180 1.41963 87.4849)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="74.9871"
                              r="1.42021"
                              transform="rotate(180 1.41963 74.9871)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="62.4892"
                              r="1.42021"
                              transform="rotate(180 1.41963 62.4892)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="38.3457"
                              r="1.42021"
                              transform="rotate(180 1.41963 38.3457)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="13.634"
                              r="1.42021"
                              transform="rotate(180 1.41963 13.634)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="50.2754"
                              r="1.42021"
                              transform="rotate(180 1.41963 50.2754)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="26.1319"
                              r="1.42021"
                              transform="rotate(180 1.41963 26.1319)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="1.41963"
                              cy="1.4202"
                              r="1.42021"
                              transform="rotate(180 1.41963 1.4202)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
            </section> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
