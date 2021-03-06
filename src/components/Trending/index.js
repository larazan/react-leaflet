import React, { useState, useRef } from "react";

import news from "../../assets/data/news.json";
import imgCar from "../../assets/icons/download.svg";
import imgExplode from "../../assets/icons/exploison.svg";
import imgRifle from "../../assets/icons/rifle.svg";
import imgKilled from "../../assets/icons/killed.svg";

import imag from "../../assets/images/22399054_0.jpg";
import imag2 from "../../assets/images/22399259_0.jpg";
import imag3 from "../../assets/images/22399192_0.jpg";

const getIcon = (iconName) => {
  let mapIcon = ''
  switch (iconName) {
    case 'carIcon':
      mapIcon = imgCar
      break;
    case 'explodeIcon':
      mapIcon = imgExplode
      break;
    case 'rifleIcon':
      mapIcon = imgRifle
      break;
    case 'killedIcon':
      mapIcon = imgKilled
      break;  
  }
  return mapIcon
}

const getImage = (imgName) => {
  let imgNews = ''
  switch (imgName) {
    case 'imag':
      imgNews = imag
      break;
    case 'imag2':
      imgNews = imag2
      break;
    case 'imag3':
      imgNews = imag3
      break;
  }

  return imgNews
}

const Trending = () => {
  const [newsId, setNewsId] = useState(0);

  console.log(newsId);

  return (
    <>
    
      <div className="w-full flex-none hidden md:block">
        <div className="bg-white">
        
          {news.map((article, idx) => (
          <div className="border-b cursor-pointer" key={idx}>
            <div
              className={`py-3 border-l-4 ${
                newsId === article.id ? "border-red-500" : "border-white"
              } px-3`}
              data-id={article.id}
              
            >
              <div className="flex justify-between">
                <div className="flex inline-flex justify-center items-center space-x-2">
                  <div className="h-8 w-8">
                    <img
                      src={getIcon(article.icon)}
                      alt=""
                    />
                  </div>
                  <div className="text-xs font-semibold text-gray-400">
                    15 minutes ago
                  </div>
                </div>
                <a href="#">
                  <div className="flex inline-flex justify-center items-center space-x-1">
                    <div className="text-xs font-semibold text-gray-800">
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
              <div className="py-2">
                <p className="font-light text-gray-700">
                  {article.title}
                </p>
                {article.images ? 
                <div className="py-2">
                  <img className="w-full" src={getImage(article.images)} alt="image" />
                </div>
                : <div className="py-3"></div>}
              </div>
              <div className="flex justify-between">
                <a href="#">
                  <div className="flex inline-flex justify-center items-center space-x-1">
                    <div className="h-5 w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      Comments
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="flex inline-flex justify-center items-center space-x-1">
                    <div className="text-xs font-semibold text-gray-600">
                      Share
                    </div>
                    <div className="h-5 w-5 rounded-full border">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
         </div>
      </div>

    </>
  );
};

export default Trending;
