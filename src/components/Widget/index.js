import React from "react";
import { SearchIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import Avatar from "react-avatar";

const Widget = () => {
  return (
    <>
      <div className="hidden2 flex flex-col w-2/6 lg:inline ml-8 py-1 space-y-5 h-screen">
        <div className="sticky2 top-0 py-1.5 bg-white z-50 w-11/12 xl:w-9/12 pt-16">
          <div className="flex items-center  p-3 rounded-full relative">
            <SearchIcon className="text-gray-500 h-5 z-50" />
            <input
              type="text"
              className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-lg w-full focus:border-[#1d9bf0] rounded-full focus:shadow-lg"
              placeholder="Search Twitter"
            />
          </div>
        </div>

        <div className="text-[#15181c] space-y-3 bg-gray-100 pt-2 rounded-xl w-11/12 xl:w-9/12">
          <h4 className="font-bold text-xl px-4">What's happening</h4>
          {/* trending */}
          <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-[#6e767d] text-xs font-medium">
                Lorem ipsum dolor sit amet
              </p>
              <h6 className="font-bold max-w-[250px] text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h6>
              <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
                Trending with{" "}
                <span className="tag" key="">
                  tag
                </span>
              </p>
            </div>

            

            <div className="icon group">
              <DotsHorizontalIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
            </div>
          </div>
          {/* end trending */}
          <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
            Show more
          </button>
        </div>

        <div className="text-[#15181c] space-y-3 bg-gray-100 pt-2 rounded-xl w-11/12 xl:w-9/12">
          <h4 className="font-bold text-xl px-4">Who to follow</h4>

          <div
            className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
            key=""
          >
            <Avatar
                      name="ratri"
                      size="40"
                      round={true}
                      className="flex items-center justify-center shadow-xl rounded-full w-12 h-12 align-middle border-none sm:w-20 lg:w-60"
                    />
            <div className="ml-4 leading-5 group">
              <h4 className="font-bold group-hover:underline">ratri</h4>
              <h5 className="text-gray-500 text-[15px]">tag</h5>
            </div>
            <button className="ml-auto bg-white text-black rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>

          <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default Widget;
