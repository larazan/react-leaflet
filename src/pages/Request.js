import React from "react";

const Request = () => {
  return (
    <>
      <main>
        <div className="flex h-screen items-center justify-center bg-[#f5f5f5]">
          <div className="w-full max-w-3xl px-0 md:px-10 py-1 md:py-8 ">
            <div className="mx-auto px-3 ">
              <form>
                <div className="mb-4 w-full bg-gray-50 rounded border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                  <div className="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                    <div className="flex items-center space-x-1 sm:pr-4">
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bold"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"></path>
                      <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-italic"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="11" y1="5" x2="17" y2="5"></line>
                      <line x1="7" y1="19" x2="13" y2="19"></line>
                      <line x1="14" y1="5" x2="10" y2="19"></line>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-underline"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 5v5a5 5 0 0 0 10 0v-5"></path>
                      <path d="M5 19h14"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-align-justified"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="3"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="4" y1="6" x2="20" y2="6"></line>
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <line x1="4" y1="18" x2="16" y2="18"></line>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                      
                    </div>
                    <button
                      type="button"
                      data-tooltip-target="tooltip-fullscreen"
                      className="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <div
                      id="tooltip-fullscreen"
                      role="tooltip"
                      className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
                    >
                      Show full screen
                      <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                  </div>
                  <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                    <textarea
                      id="editor"
                      rows="8"
                      className="block outline-none px-0 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex inline-flex items-center justify-center rounded border px-6 py-1.5 space-x-2 bg-[#fe2c55] opacity-90 hover:opacity-100 font-semibold text-white"
                >
                  Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Request;
