import React, { useState } from "react";

import InputReply from "./InputReply";

const DetailComment = () => {
 const [openReply, setOpenReply] = useState(false)

const openReplyHandler = () => {
    setOpenReply((prev) => !prev)
} 

  return (
    <>
      <div className="px-8 pb-4">
        <div className="py-3 text-bold text-md">Comment</div>
        <div className="flex items-center justify-between pb-4 ">
          <div className="top-0 py-2 space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-1">
                <img
                  className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
                  src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 px-3 py-2 md:px-3 md:py-2 leading-relaxed">
                <div className="flex inline-flex items-center space-x-2">
                  <div>
                    <strong>Sarah</strong>{" "}
                  </div>
                  <span className="text-xs text-gray-400">3:34 PM</span>
                </div>

                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
                <div className="mt-2 flex inline-flex items-center space-x-2">
                  <div className="flex ">
                    <button className="flex space-x-1 inline-flex items-center text-gray-500">
                      <span className="text-sm font-semibold">1</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </button>
                    <div className="rotate-90">
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
                          d="M18 12H6"
                        />
                      </svg>
                    </div>
                    <button className="flex space-x-1 inline-flex items-center text-gray-500">
                      {/* <span className="text-sm font-semibold">1</span> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-gray-400">{"•"}</div>
                  <div>
                    <button className="text-sm font-bold text-blue-500 hover:text-blue-600" onClick={openReplyHandler}>
                      Reply
                    </button>
                  </div>
                  {/* <div className="text-gray-400">{"•"}</div> */}
                  {/* <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      <img
                        className="rounded-full w-6 h-6 border border-white"
                        src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                        alt=""
                      />
                      <img
                        className="rounded-full w-6 h-6 border border-white"
                        src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-sm text-gray-500 font-semibold">
                      5 Replies
                    </div>
                  </div> */}
                </div>
                <div className="mt-4 space-y-4">

                    <InputReply openReply={openReply} />
                 
                  <div className="flex">
                    <div className="flex-shrink-0 mr-1">
                      <img
                        className="mt-2 rounded-full w-6 h-6 md:w-8 md:h-8"
                        src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                        alt=""
                      />
                    </div>
                    <div className="flex-1 px-3 py-2 md:px-3 md:py-2 leading-relaxed">
                      <div className="flex inline-flex items-center space-x-2">
                        <div>
                          <strong>Sarah</strong>{" "}
                        </div>
                        <span className="text-xs text-gray-400">3:34 PM</span>
                      </div>

                      <p className="text-xs sm:text-sm">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailComment;
