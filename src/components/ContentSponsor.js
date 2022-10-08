import React from "react";
import { Link } from "react-router-dom";

import bakery from "../assets/images/bakery.jpg";

const ContentSponsor = () => {
  return (
    <>
      <Link
        to=""
      >
        <div className="border-b border-t cursor-pointer hover:bg-gray-100">
          <div
            className={`py-2 border-l-4 border-white hover:border-gray-100 px-2`}
          >
            
              <div className="py-2">
                <img className="w-full" src={bakery} alt="image" />
              </div>
            
          </div>
        </div>
      </Link>
    </>
  );
};

export default ContentSponsor;
