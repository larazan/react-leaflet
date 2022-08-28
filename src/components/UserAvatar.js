import React, { useState } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

const UserAvatar = ({ name, size, round }) => {
  const [img, setImg] = useState(false);
  return (
    <>
      <div className="group relative2 w-fit h-fit">
        <div className="z-0 h-10 w-10 group cursor-pointer">
          {img ? (
            <img
              className="w-10 h-10 md:w-10 md:h-10 object-cover rounded-full border p-0"
              src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              alt="profile"
            />
          ) : (
            <Avatar name={name} size={size} round={round} />
          )}
        </div>
        {/*  */}
        <div
          className={`w-64 md:w-72 hidden group-hover:block mt-0.5 absolute z-10 font-normal bg-white shadow-md rounded-lg overflow-hidden border`}
        >
          <div className="flex flex-col p-4 space-y-3">
            <div className="flex flex-row justify-between">
              <div className="h-13 w-13">
                <Avatar name={name} size="52" round={true} />
              </div>
              <div>
                <a
                  href="#"
                  className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block block"
                >
                  ikuti
                </a>
              </div>
            </div>
            {/* <div>
              <h2 className="text-lg inline-block font-semibold md:mr-2 mb-0 md:mb-0">
                mrtravlerrr_
              </h2>
            </div> */}
            <div className="pb-2">
              <h1 className="font-semibold">Mr Travlerrr...</h1>
              <span className="font-light text-md text-gray-700">Travel, Nature and Music Lorem ipsum dolor sit amet consectetur</span>
            </div>
            <div>
              <ul className="flex justify-around space-x-8 text-center p-0 text-gray-600 leading-snug text-sm">
                <li>
                  <span className="font-semibold text-gray-800 block">
                    40.5k{" "}
                  </span>{" "}
                  Mengikuti
                </li>
                <li>
                  <span className="font-semibold text-gray-800 block">
                    302{" "}
                  </span>{" "}
                  Pengikut
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
