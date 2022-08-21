import React, { useState } from "react";
import Avatar from "react-avatar";

const Followers = () => {
  const [img, setImg] = useState(false);

  const MAX_LENGTH = 100;

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum";

  return (
    <>
      <div className="">
        <div className="relative w-full font-normal bg-white shadow2 overflow-hidden border">
          <div className="flex flex-col p-4 space-y-3">
            <div className="flex flex-row justify-center items-center space-x-6 md:space-x-0">
              <div className="h-13 w-13 w-1/6">
                <Avatar name="berlliana lovell" size="52" round={true} />
              </div>
              <div className="w=5/6">
                <div className="flex justify-between">
                  <span>
                    <h1 className="font-semibold capitalize">berlliana lovell</h1>
                  </span>
                  <div>
                    <a
                      href="#"
                      className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block block"
                    >
                      ikuti
                    </a>
                  </div>
                </div>
                <span className="text-gray-500">
                  <p>{`${text.substring(0, MAX_LENGTH)}...`}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Followers;
