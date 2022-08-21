import React, { useState } from "react";


import MessageList from "../components/MessageList";

const Message = () => {
  const [img, setImg] = useState(false);

  const MAX_LENGTH = 100;

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum";

  return (
    <>
      <main className="md:mt-10 bg-gray-100 bg-opacity-25">
        <div className="lg:w-8/12 md:pt-4 lg:mx-auto mb-8">
          <div className="px-0 md:px-0">
            <header className="flex md:hidden z-20 md:z-20 h-10 md:h-14 w-full  top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between bg-gray-1002 border-b shadow">
              <div className="flex inline-flex w-full justify-between items_center space-x-3">
                <div className="flex w-1/6">
                  <button className="p-1 rounded-full bg-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
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
                <div className="flex w-4/6 items-center justify-center2 space-x-2">
                  <div
                    className="relative w-full flex"
                    // ref={ref}
                  >
                    <input
                      type="text"
                      className="w-full border-1 px-4 py-2 outline-none bg-[#f1f1f2] rounded-full text-sm text-gray-700 placeholder-gray-600 focus:placeholder-gray-500 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple"
                      // value={value}
                      // onChange={(e) => handleChange(e.target.value)}
                      // onFocus={() => setShowOptions(true)}
                      // onKeyDown={handleNav}
                      placeholder="Cari orang dan group"
                    />
                    <div class="absolute inset-y-0 right-4 flex items-center pl-2 cursor-pointer">
                      <svg
                        class="w-4 h-4"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="fill-current text-slate-500"
                          d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                        ></path>
                        <path
                          class="fill-current text-slate-400"
                          d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/6 w-full justify-end">
                  <button className="p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </header>
            <div className="">
              
              <MessageList />  
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Message;
