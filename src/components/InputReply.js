import React from "react";

const InputReply = ({ openReply }) => {
  return (
    <>
      {openReply ? (
        <div className="flex">
          <div className="flex-shrink-0 mr-3">
            <img
              className="mt-0 rounded-full w-6 h-6 sm:w-8 sm:h-8"
              src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
            />
          </div>
          <div class="flex flex-col flex-grow">
            <textarea
              class="p-3 bg-white border-x-2 border-t-2 border-gray-200 rounded-sm outline-none"
              name=""
              id=""
              rows="3"
              placeholder="What's happening?"
            ></textarea>
            <div class="p-1 flex justify-between2 border-2 border-gray-200 bg-gray-100">
              <button class="flex items-center  px-1 text-xs text-gray-500 rounded-sm hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bold"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
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
              <button class="flex items-center  px-1 text-xs text-gray-500 rounded-sm hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-italic"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
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
              <button class="flex items-center  px-1 text-xs text-gray-500 rounded-sm hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-underline"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
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
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InputReply;
