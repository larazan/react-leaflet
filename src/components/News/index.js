import React, { useState, useRef } from "react";

import Modal from "../Modal";

import news from "../../assets/data/news.json";
import imgCar from "../../assets/icons/download.svg";
import imgExplode from "../../assets/icons/exploison.svg";
import imgRifle from "../../assets/icons/rifle.svg";
import imgKilled from "../../assets/icons/killed.svg";

import imag from "../../assets/images/22399054_0.jpg";
import imag2 from "../../assets/images/22399259_0.jpg";
import imag3 from "../../assets/images/22399192_0.jpg";
import { map } from "leaflet";

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

const News = () => {
  const [map, setMap] = useState(null)
  const [newsId, setNewsId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("modal open!");
    setShowModal((prev) => !prev);
  };

  const clickHandler = (e) => {
    console.log("click");
    const id = e.currentTarget.dataset.id;
    if (newsId === parseInt(id)) {
      console.log('sama');
      openModal()
    } else {
      console.log('beda');
      // fly to locate in map
      // map.flyTo([lat, lng], 13)
    }
    setNewsId(parseInt(id));
    console.log(id);
  };

  const shareHandler = () => {
    console.log('share');
  }

  const sourceHandler = () => {
    console.log('source');
  }

  const commentHandler = () => {
    console.log('comment');
  }

  console.log(newsId);


  const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.9190];

  const mapRef = useRef();

  /**
   * handleOnSetView
   */

  function handleOnSetView() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.setView(disneyWorldLatLng, 14);
  }

  /**
   * handleOnFlyTo
   */

   function handleOnFlyTo() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.flyTo(disneyLandLatLng, 14, {
      duration: 2
    });
  }

  return (
    <>
    
      {/* <div className="w-full max-w-md h-screen overflow-auto flex-none px-0 hidden md:block"> */}
        <div className="bg-white mt-4">
        <div className="flex justify-between space-x-2 pb-2 px-3 border-b">
            <div className="flex flex-wrap w-2/3 items-center hidden md:flex">
              <div className="flex w-full">
                <a
                  className="text-md font-bold text-gray-800 uppercase "
                  href="#"
                >
                  News Live
                </a>
              </div>
              <div className="text-xs text-gray-800">
              Updated on 01/03/2022 14:21:32
              </div>
            </div>
            <div className="flex flex-row-reverse w-1/3">
              <div className="flex flex-wrap pl-2 items-center hidden md:flex">
                <a
                  className="text-xs font-extrabold text-blue-500 uppercase "
                  href="#"
                >
                  About
                </a>
              </div>
              <div className="flex flex-wrap  items-center hidden md:flex">
                <a
                  className="text-xs font-extrabold text-blue-500 uppercase "
                  href="#"
                >
                  Api
                </a>
              </div>
            </div>
          </div>
          {news.map((article, idx) => (
          <div className="border-b cursor-pointer" key={idx}>
            <div
              className={`py-3 border-l-4 ${
                newsId === article.id ? "border-red-500" : "border-white"
              } px-3`}
              data-id={article.id}
              onClick={clickHandler}
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
                <a href="#" onClick={sourceHandler}>
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
                <a href="#" onClick={commentHandler}>
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
                <a href="#" onClick={shareHandler}>
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
          <div className="border-b cursor-pointer">
            <div
              className={`py-3 border-l-4 ${
                newsId === 30 ? "border-red-500" : "border-white"
              } px-3`}
              data-id="30"
              onClick={clickHandler}
            >
              <div className="flex justify-between">
                <div className="flex inline-flex justify-center items-center space-x-2">
                  <div className="h-8 w-8">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiMxYzQzN2EiIGN4PSI1MSIgY3k9IjUyIiByPSI0MS41Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OS45OTk1IiB5MT0iOC41IiB4Mj0iNDkuOTk5NSIgeTI9IjkxLjUwMDUiPjxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjZiZDkiLz48c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjI1N2E1Ii8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiBjeD0iNTAiIGN5PSI1MCIgcj0iNDEuNSIvPjxnPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjIuOTIyLDU2Ljk3OWM0Ljg0NSwwLDguNzg0LTMuODcxLDguNzg0LTguNjI5YzAtMi4zNzctMC45OTctNC42MzktMi43NDktNi4yNjUgYzAuMjctMC45MzgsMC40MDctMS45MiwwLjQwNy0yLjkyNWMwLTYuMDI0LTQuOTkxLTEwLjkyNS0xMS4xMjYtMTAuOTI1Yy0wLjcyNCwwLTEuNDU1LDAuMDg0LTIuMjMyLDAuMjU1IGMtMS45NDktMS42LTQuNDY4LTIuNDc4LTcuMTI3LTIuNDc4Yy0yLjQ5LDAtNC44OTIsMC43OTEtNi43OSwyLjIzMWMtMC4wODEtMC4wMDUtMC4xNjQtMC4wMDktMC4yNDgtMC4wMDkgYy02LjEzNSwwLTExLjEyNiw0LjkwMS0xMS4xMjYsMTAuOTI1YzAsMC45OTMsMC4xMzcsMS45NzUsMC40MDgsMi45MjVjLTEuNzUzLDEuNjMtMi43NSwzLjg5Mi0yLjc1LDYuMjY1IGMwLDQuNzU4LDMuOTQsOC42MjksOC43ODQsOC42MjljMS40NDUsMCwyLjg0My0wLjM0Myw0LjA5OS0wLjk5N3YxOS45NDJjMCwyLjIxLTEuODM5LDQuMDEtNC4wOTksNC4wMSBjLTAuOTY5LDAtMS43NTcsMC43NzctMS43NTcsMS43MzJjMCwwLjk1NiwwLjc4OCwxLjczNCwxLjc1NywxLjczNGM0LjE5OCwwLDcuNjEzLTMuMzU1LDcuNjEzLTcuNDc3di0yMy43OCBjMC0wLjc2Mi0wLjUxNi0xLjQ0Ni0xLjI0My0xLjY2Yy0wLjcyNS0wLjIyNy0xLjU0OCwwLjA2My0xLjk3NiwwLjY5NmMtMC45NzksMS40NTItMi42MjIsMi4zMTktNC4zOTQsMi4zMTkgYy0yLjkwNiwwLTUuMjctMi4zMTMtNS4yNy01LjE1N2MwLTEuNjk2LDAuODU2LTMuMjg1LDIuMjktNC4yNWMwLjY4My0wLjQ1OSwwLjk0OS0xLjM0MSwwLjYzMi0yLjEgYy0wLjM4NC0wLjkxMi0wLjU4LTEuODY5LTAuNTgtMi44NDRjMC00LjExLDMuNDE1LTcuNDU1LDcuNjEzLTcuNDU1YzAuMDYyLDAsMC4xMjEsMC4wMDksMC4xOCwwLjAxNmwwLjQ4NCwwLjA2MWwwLjEwMiwwLjAwMyBjMC40NjEsMCwwLjg3Ni0wLjE1NCwxLjE5Ny0wLjQ0YzEuMzY2LTEuMjAxLDMuMTY4LTEuODYyLDUuMDczLTEuODYyYzIuMDU3LDAsNC4wMjcsMC43ODMsNS40MDYsMi4xNDkgYzAuNDUzLDAuNDQ5LDEuMTc3LDAuNjE4LDEuNzUsMC40MzljMC44NDEtMC4yNDgsMS41NDItMC4zNjMsMi4yMDctMC4zNjNjNC4xOTcsMCw3LjYxMiwzLjM0NSw3LjYxMiw3LjQ1NiBjMCwwLjk3OC0wLjE5NSwxLjkzNS0wLjU4NCwyLjg0N2MtMC4zMTUsMC43NS0wLjA0OCwxLjYzMywwLjYzNywyLjA5OWMxLjQzNCwwLjk2NywyLjI5LDIuNTU2LDIuMjksNC4yNTEgYzAsMi44NDYtMi4zNjQsNS4xNi01LjI3MSw1LjE2Yy0xLjc3MSwwLTMuNDE0LTAuODY3LTQuMzk3LTIuMzI2Yy0wLjQyNy0wLjYxNy0xLjIzNC0wLjkwOS0xLjk2NC0wLjY5MiBjLTAuNzQ4LDAuMjI1LTEuMjUxLDAuODk0LTEuMjUxLDEuNjYzdjIzLjc3MmMwLDQuMTIxLDMuNDE1LDcuNDc3LDcuNjEyLDcuNDc3YzAuOTY4LDAsMS43NTQtMC43NzgsMS43NTQtMS43MzQgYzAtMC45NTUtMC43ODctMS43MzItMS43NTctMS43MzJjLTIuMjU5LDAtNC4wOTgtMS44LTQuMDk4LTQuMDFWNTUuOThDNjAuMDgxLDU2LjYzNyw2MS40OCw1Ni45NzksNjIuOTIyLDU2Ljk3OXoiLz4gPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUyLjM4NSw3NC43NzRjLTAuNjQ3LDAtMS4xNzItMC41MjEtMS4xNzItMS4xNTF2LTE4LjM4YzAtMC42MzIsMC41MjQtMS4xNDcsMS4xNzItMS4xNDcgYzAuNjQ2LDAsMS4xNzEsMC41MTgsMS4xNzEsMS4xNDd2MTguMzhDNTMuNTU2LDc0LjI1OCw1My4wMzEsNzQuNzc0LDUyLjM4NSw3NC43NzR6Ii8+IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNy4xNTksNDAuMzA5Yy0wLjY0NiwwLTEuMTcxLTAuNTE4LTEuMTcxLTEuMTQ3YzAtMy4xNjksMi42MjgtNS43NDMsNS44NTUtNS43NDMgYzAuNjQ2LDAsMS4xNzEsMC41MTcsMS4xNzEsMS4xNDdjMCwwLjYzMi0wLjUyNSwxLjE1MS0xLjE3MSwxLjE1MWMtMS45MzgsMC0zLjUxNCwxLjU0NS0zLjUxNCwzLjQ0NSBDMzguMzMsMzkuNzkxLDM3LjgwNiw0MC4zMDksMzcuMTU5LDQwLjMwOXoiLz4gPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYyLjkyNSw1MS43OTljLTAuNjQyLDAtMS4xNzEtMC41MTktMS4xNzEtMS4xNTFzMC41MjktMS4xNDgsMS4xNzEtMS4xNDhzMS4xNzEtMC41MTcsMS4xNzEtMS4xNDkgYzAtMC42MzMsMC41My0xLjE0OSwxLjE3Mi0xLjE0OXMxLjE3MSwwLjUxOCwxLjE3MSwxLjE0OUM2Ni40MzgsNTAuMjUyLDY0Ljg2Miw1MS43OTksNjIuOTI1LDUxLjc5OXoiLz4gPC9nPjwvc3ZnPg=="
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
                  Russian tanks destroyed near Priluky
                </p>
                <div className="py-2">
                  <img className="w-full" src={imag2} alt="image" />
                </div>
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
          <div className="border-b cursor-pointer">
            <div
              className={`py-3 border-l-4 ${
                newsId === 31 ? "border-red-500" : "border-white"
              } px-3`}
              data-id="31"
              onClick={clickHandler}
            >
              <div className="flex justify-between">
                <div className="flex inline-flex justify-center items-center space-x-2">
                  <div className="h-8 w-8">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiM4MDE2MTUiIGN4PSI1MSIgY3k9IjUyIiByPSI0MS41Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OS45OTk1IiB5MT0iOC41IiB4Mj0iNDkuOTk5NSIgeTI9IjkxLjUwMDUiPjxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNkNjU0MzEiLz48c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojYjUxYzFjIi8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiBjeD0iNTAiIGN5PSI1MCIgcj0iNDEuNSIvPjxnPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTAuMDAyLDI4LjI1OGMtMTQuMjEsMC0yMy4yMDksOC41MTktMjMuMjA5LDE4Ljk2MmMwLjEzNCw0LjI1NywxLjI0OSw4LjQyOSwzLjI1OSwxMi4xODRoNS44MjhjMCwwLDQuMTM1LDAsNS4xNzMsMTIuMzQ2aDQuMjcxdi0xLjY2N2MwLTAuNjgxLDAuNTUzLTEuMjM0LDEuMjM1LTEuMjM0YzAuNjgyLDAsMS4yMzQsMC41NTQsMS4yMzQsMS4yMzR2MS42NjdoNC41ODF2LTEuNjY3YzAtMC42ODEsMC41NTMtMS4yMzQsMS4yMzQtMS4yMzRjMC42ODEsMCwxLjIzNSwwLjU1NCwxLjIzNSwxLjIzNHYxLjY2N2g0LjA5N2MxLjAzOC0xMi4zNDYsNS4xNzQtMTIuMzQ2LDUuMTc0LTEyLjM0Nmg1LjgyN2MyLjAxLTMuNzU1LDMuMTI1LTcuOTI3LDMuMjU5LTEyLjE4NEM3My4yMTIsMzYuNzY0LDY0LjIxMiwyOC4yNTgsNTAuMDAyLDI4LjI1OHogTTM5Ljk0MSw1MS43MTNjLTIuNzY5LDAtNS4wMTItMi4yNDItNS4wMTItNS4wMTFzMi4yNDQtNS4wMTIsNS4wMTItNS4wMTJjMi43NjgsMCw1LjAxMiwyLjI0NCw1LjAxMiw1LjAxMlM0Mi43MDksNTEuNzEzLDM5Ljk0MSw1MS43MTNMMzkuOTQxLDUxLjcxM3ogTTUzLjAxNSw1OS43NzVjLTAuNjMsMS4wMDEtNS4zMDksMC45MzgtNi4wNDksMGMtMC43NDItMC45MzgsMi02Ljk2MywzLjAyNC02Ljk2M0M1MS4wMTYsNTIuODEzLDUzLjcwNyw1OC43ODcsNTMuMDE1LDU5Ljc3NXogTTYwLjI1LDUxLjcxM2MtMi43NzEsMC01LjAxMy0yLjI0Mi01LjAxMy01LjAxMXMyLjI0Mi01LjAxMiw1LjAxMy01LjAxMmMyLjc2NywwLDUuMDEyLDIuMjQ0LDUuMDEyLDUuMDEyUzYzLjAxNyw1MS43MTMsNjAuMjUsNTEuNzEzTDYwLjI1LDUxLjcxM3oiLz48L2c+PC9zdmc+"
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
                  A group of Chechen saboteurs who were moving around Kyiv in
                  the ambulance has just been shot by the Ukrainian military
                  intelligence officers (GUR MOU) in Kyiv, partly shot, partly
                  detained
                </p>
                <div className="py-2">
                  <img className="w-full" src={imag3} alt="image" />
                </div>
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
        </div>
      {/* </div> */}

      <Modal showModal={showModal} closeModal={setShowModal} />
    </>
  );
};

export default News;
