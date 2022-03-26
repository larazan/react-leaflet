import React from "react";

const Key = () => {
  return (
    <>
      <div className="w-full max-w-md h-screen overflow-auto flex-none px-0 hidden md:block">
        <div className="bg-white mt-4">
          <div className="flex justify-between space-x-2 pb-2 px-3 border-b">
            <div className="flex flex-wrap w-2/3 items-center hidden md:flex">
              <div className="flex w-full">
                <a
                  className="text-md font-bold text-gray-800 uppercase "
                  href="#"
                >
                  Key
                </a>
              </div>
              <div className="text-xs text-gray-800">Key and pattern info</div>
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

          <div className="border-b">
            <div className="py-3 px-3">
              <div className="py-2">
                <div className="flex flex-wrap text-sm font-semibold uppercase">
                  <p>Color of Event</p>
                </div>
                <div className="flex mt-3 pl-2">
                  <div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(140, 140, 140)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Grey</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(105, 113, 94)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Green</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(245, 244, 240)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">White</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(73, 96, 124)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Blue</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(59, 59, 59)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Black</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(177, 71, 84)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Red</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(223, 171, 181)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Pink</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(189, 148, 116)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Brown</span>
                    </div>
                    <div class="flex py-1">
                      <button class="h-6 w-6 flex flex-col border border-gray-300 rounded-full overflow-hidden focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none">
                        <span class="h-full w-full flex flex-col transform">
                          <span
                            class="h-6 w-6"
                            style={{ backgroundColor: "rgb(234, 217, 154)" }}
                          ></span>
                        </span>
                      </button>
                      <span class="flex text-xs px-2 items-center">Yellow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b">
            <div className="py-3 px-3">
              <div className="py-2">
                <div className="flex flex-wrap text-sm font-semibold uppercase">
                  <p>Icons</p>
                </div>
                <div className="flex2 mt-3">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-1/2 p-1">
                      <div className="flex inline-flex justify-center items-center space-x-2">
                        <div className="h-8 w-8">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiMxYzQzN2EiIGN4PSI1MSIgY3k9IjUyIiByPSI0MS41Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OS45OTk1IiB5MT0iOC41IiB4Mj0iNDkuOTk5NSIgeTI9IjkxLjUwMDUiPjxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjZiZDkiLz48c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjI1N2E1Ii8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiBjeD0iNTAiIGN5PSI1MCIgcj0iNDEuNSIvPjxnPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjIuOTIyLDU2Ljk3OWM0Ljg0NSwwLDguNzg0LTMuODcxLDguNzg0LTguNjI5YzAtMi4zNzctMC45OTctNC42MzktMi43NDktNi4yNjUgYzAuMjctMC45MzgsMC40MDctMS45MiwwLjQwNy0yLjkyNWMwLTYuMDI0LTQuOTkxLTEwLjkyNS0xMS4xMjYtMTAuOTI1Yy0wLjcyNCwwLTEuNDU1LDAuMDg0LTIuMjMyLDAuMjU1IGMtMS45NDktMS42LTQuNDY4LTIuNDc4LTcuMTI3LTIuNDc4Yy0yLjQ5LDAtNC44OTIsMC43OTEtNi43OSwyLjIzMWMtMC4wODEtMC4wMDUtMC4xNjQtMC4wMDktMC4yNDgtMC4wMDkgYy02LjEzNSwwLTExLjEyNiw0LjkwMS0xMS4xMjYsMTAuOTI1YzAsMC45OTMsMC4xMzcsMS45NzUsMC40MDgsMi45MjVjLTEuNzUzLDEuNjMtMi43NSwzLjg5Mi0yLjc1LDYuMjY1IGMwLDQuNzU4LDMuOTQsOC42MjksOC43ODQsOC42MjljMS40NDUsMCwyLjg0My0wLjM0Myw0LjA5OS0wLjk5N3YxOS45NDJjMCwyLjIxLTEuODM5LDQuMDEtNC4wOTksNC4wMSBjLTAuOTY5LDAtMS43NTcsMC43NzctMS43NTcsMS43MzJjMCwwLjk1NiwwLjc4OCwxLjczNCwxLjc1NywxLjczNGM0LjE5OCwwLDcuNjEzLTMuMzU1LDcuNjEzLTcuNDc3di0yMy43OCBjMC0wLjc2Mi0wLjUxNi0xLjQ0Ni0xLjI0My0xLjY2Yy0wLjcyNS0wLjIyNy0xLjU0OCwwLjA2My0xLjk3NiwwLjY5NmMtMC45NzksMS40NTItMi42MjIsMi4zMTktNC4zOTQsMi4zMTkgYy0yLjkwNiwwLTUuMjctMi4zMTMtNS4yNy01LjE1N2MwLTEuNjk2LDAuODU2LTMuMjg1LDIuMjktNC4yNWMwLjY4My0wLjQ1OSwwLjk0OS0xLjM0MSwwLjYzMi0yLjEgYy0wLjM4NC0wLjkxMi0wLjU4LTEuODY5LTAuNTgtMi44NDRjMC00LjExLDMuNDE1LTcuNDU1LDcuNjEzLTcuNDU1YzAuMDYyLDAsMC4xMjEsMC4wMDksMC4xOCwwLjAxNmwwLjQ4NCwwLjA2MWwwLjEwMiwwLjAwMyBjMC40NjEsMCwwLjg3Ni0wLjE1NCwxLjE5Ny0wLjQ0YzEuMzY2LTEuMjAxLDMuMTY4LTEuODYyLDUuMDczLTEuODYyYzIuMDU3LDAsNC4wMjcsMC43ODMsNS40MDYsMi4xNDkgYzAuNDUzLDAuNDQ5LDEuMTc3LDAuNjE4LDEuNzUsMC40MzljMC44NDEtMC4yNDgsMS41NDItMC4zNjMsMi4yMDctMC4zNjNjNC4xOTcsMCw3LjYxMiwzLjM0NSw3LjYxMiw3LjQ1NiBjMCwwLjk3OC0wLjE5NSwxLjkzNS0wLjU4NCwyLjg0N2MtMC4zMTUsMC43NS0wLjA0OCwxLjYzMywwLjYzNywyLjA5OWMxLjQzNCwwLjk2NywyLjI5LDIuNTU2LDIuMjksNC4yNTEgYzAsMi44NDYtMi4zNjQsNS4xNi01LjI3MSw1LjE2Yy0xLjc3MSwwLTMuNDE0LTAuODY3LTQuMzk3LTIuMzI2Yy0wLjQyNy0wLjYxNy0xLjIzNC0wLjkwOS0xLjk2NC0wLjY5MiBjLTAuNzQ4LDAuMjI1LTEuMjUxLDAuODk0LTEuMjUxLDEuNjYzdjIzLjc3MmMwLDQuMTIxLDMuNDE1LDcuNDc3LDcuNjEyLDcuNDc3YzAuOTY4LDAsMS43NTQtMC43NzgsMS43NTQtMS43MzQgYzAtMC45NTUtMC43ODctMS43MzItMS43NTctMS43MzJjLTIuMjU5LDAtNC4wOTgtMS44LTQuMDk4LTQuMDFWNTUuOThDNjAuMDgxLDU2LjYzNyw2MS40OCw1Ni45NzksNjIuOTIyLDU2Ljk3OXoiLz4gPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUyLjM4NSw3NC43NzRjLTAuNjQ3LDAtMS4xNzItMC41MjEtMS4xNzItMS4xNTF2LTE4LjM4YzAtMC42MzIsMC41MjQtMS4xNDcsMS4xNzItMS4xNDcgYzAuNjQ2LDAsMS4xNzEsMC41MTgsMS4xNzEsMS4xNDd2MTguMzhDNTMuNTU2LDc0LjI1OCw1My4wMzEsNzQuNzc0LDUyLjM4NSw3NC43NzR6Ii8+IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNy4xNTksNDAuMzA5Yy0wLjY0NiwwLTEuMTcxLTAuNTE4LTEuMTcxLTEuMTQ3YzAtMy4xNjksMi42MjgtNS43NDMsNS44NTUtNS43NDMgYzAuNjQ2LDAsMS4xNzEsMC41MTcsMS4xNzEsMS4xNDdjMCwwLjYzMi0wLjUyNSwxLjE1MS0xLjE3MSwxLjE1MWMtMS45MzgsMC0zLjUxNCwxLjU0NS0zLjUxNCwzLjQ0NSBDMzguMzMsMzkuNzkxLDM3LjgwNiw0MC4zMDksMzcuMTU5LDQwLjMwOXoiLz4gPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYyLjkyNSw1MS43OTljLTAuNjQyLDAtMS4xNzEtMC41MTktMS4xNzEtMS4xNTFzMC41MjktMS4xNDgsMS4xNzEtMS4xNDhzMS4xNzEtMC41MTcsMS4xNzEtMS4xNDkgYzAtMC42MzMsMC41My0xLjE0OSwxLjE3Mi0xLjE0OXMxLjE3MSwwLjUxOCwxLjE3MSwxLjE0OUM2Ni40MzgsNTAuMjUyLDY0Ljg2Miw1MS43OTksNjIuOTI1LDUxLjc5OXoiLz4gPC9nPjwvc3ZnPg=="
                            alt=""
                          />
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                          Road accidents, cars
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 p-1">
                      <div className="flex inline-flex justify-center items-center space-x-2">
                        <div className="h-8 w-8">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiMxYzQzN2EiIGN4PSI1MSIgY3k9IjUyIiByPSI0MS41Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OS45OTk1IiB5MT0iOC41IiB4Mj0iNDkuOTk5NSIgeTI9IjkxLjUwMDUiPjxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjZiZDkiLz48c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjI1N2E1Ii8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiBjeD0iNTAiIGN5PSI1MCIgcj0iNDEuNSIvPjxnPiA8cmVjdCB4PSItNTkuMyIgeT0iNDkuMDA1IiBmaWxsPSIjMDEwMTAxIiB3aWR0aD0iMC4yNDQiIGhlaWdodD0iMC4yMjEiLz4gPHBvbHlnb24gZmlsbD0iIzAxMDEwMSIgcG9pbnRzPSItNTMuNzM4LDUyLjEwOCAtNTMuNzQ2LDUyLjExNSAtNTMuNzQ2LDUyLjEwOCAiLz4gPHBvbHlnb24gZmlsbD0iIzAxMDEwMSIgcG9pbnRzPSItNTMuNzM4LDUyLjEwOCAtNTMuNzQ2LDUyLjExNSAtNTMuNzQ2LDUyLjEwOCAiLz4gPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUwLjk3LDE4Ljk0OGgwLjA0OHYwLjExMmgtMC4wMDFjMC41NzgsMS40MjEsMS42MDQsNC41NzYsMS42MDQsNy40MDhjMCwyLjgzLDAuMTc0LDMuMjc3LDAuMTc0LDMuODk2IHMyLjA1OCwxMi4zOTgsMi4wNTgsMTIuMzk4bDEuNTQ4LDMuOTgydjAuNjY5bDE0LjI5NywxMy4wODloMC4wMTVjLTAuMDAzLTEuNDgsMC4zNyw1LjI5LDAuMzcsNS4yOSBjLTAuMDk3LDAuMDY0LTAuMjc1LDAuMDExLTAuMzY2LTAuMDJsLTAuMDE5LDAuMDExYzAsMC4wMDUsMCwwLjAxLDAsMC4wMWwtMC4wMTktMC4wMTVsLTEzLjg5Ny0zLjU1N3YyLjExMWw3LjUwOSw3LjU2OCBjMCwwLTAuNjMsMS4xMjYtMC45NjUsMS41NTJjLTAuMzM0LDAuNDI2LTAuNzQsMS4xMTYtMC44OTIsMS4xMjdjLTAuMTUyLDAuMDEtMjIuOTYzLDAuMDExLTIzLjExNiwwcy0wLjU1OS0wLjY5OS0wLjg5Mi0xLjEyNiBjLTAuMzM1LTAuNDI2LTAuOTY0LTEuNTUyLTAuOTY0LTEuNTUybDcuNTA3LTcuNTY5di0yLjExTDMxLjA3LDY1Ljc4bC0wLjAxNywwLjAxNGMwLDAsMC0wLjAwNCwwLTAuMDA5bC0wLjAxOS0wLjAxIGMtMC4wOTEsMC4wMjgtMC4yNjksMC4wODMtMC4zNjYsMC4wMTljMCwwLDAuMzcyLTYuNzcxLDAuMzctNS4yOWgwLjAxNUw0NS4zNSw0Ny40MTV2LTAuNjdsMS41NDctMy45ODJjMCwwLDIuMDYtMTEuNzgsMi4wNi0xMi4zOTggczAuMTcyLTEuMDY2LDAuMTcyLTMuODk2YzAtMi44MzIsMS4wMjUtNS45ODcsMS42MDQtNy40MDh2LTAuMTEzaDAuMDQ5Ii8+IDwvZz48L3N2Zz4="
                            alt=""
                          />
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                        Airplanes
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 p-1">
                      <div className="flex inline-flex justify-center items-center space-x-2">
                        <div className="h-8 w-8">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Y2lyY2xlIGZpbGw9IiMxYzQzN2EiIGN4PSI1MSIgY3k9IjUyIiByPSI0MS41Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0OS45OTk1IiB5MT0iOC41IiB4Mj0iNDkuOTk5NSIgeTI9IjkxLjUwMDUiPjxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYjZiZDkiLz48c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMjI1N2E1Ii8+PC9saW5lYXJHcmFkaWVudD48Y2lyY2xlIGZpbGw9InVybCgjU1ZHSURfMV8pIiBjeD0iNTAiIGN5PSI1MCIgcj0iNDEuNSIvPjxnPiA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNzUuNjUxLDY2LjI1OUg2NS41NjFjMC4wMTUtMi40MzgtMS4xMzgtNy4xODgtMC41NDktMTAuNzEzYzAuMjkxLTEuNzQyLDEuNDMxLTMuNzQyLDIuMTUyLTUuMzgyIGMwLjgxNy0xLjg2MiwyLjEzNy0zLjk1OSwyLjE1My01LjM4M2MwLjAwNS0wLjczMi0xLjYxMS0xLjgxOC0zLjkwMS0yLjk4di03Ljc2YzAtMS44MjEtMS40OC0zLjMtMy4zMDEtMy4zaC0xLjEyOXYtMi44MDggYzAtMS44Mi0xLjQ4LTMuMy0zLjMwMS0zLjNoLTMuMzIxdi00LjM0NWgtOC44NDd2NC4zNDVoLTMuMzIxYy0xLjgyLDAtMy4zLDEuNDc5LTMuMywzLjN2Mi44MDloLTEuMTI4IGMtMS44MjEsMC0zLjMwMiwxLjQ3OS0zLjMwMiwzLjNWNDEuOGMtMi4yODgsMS4xNjMtMy45MDYsMi4yNDktMy44OTksMi45OGMwLjAxNSwxLjQyNCwxLjMzNCwzLjUyMSwyLjE1Miw1LjM4MyBjMC43MjEsMS42NCwxLjg2MSwzLjY0LDIuMTUyLDUuMzgyYzAuNTg5LDMuNTI0LTAuNTYzLDguMjc1LTAuNTQ5LDEwLjcxM2gtOS45NzRjLTAuNjc0LDAtMS4yMjEsMC41NDYtMS4yMjEsMS4yMjIgYzAsMC42NzcsMC41NDcsMS4yMjMsMS4yMjEsMS4yMjNoMTIuMWMzLjc4OSwxLjY5OCwxMi4wMjUsNC4zNjgsMTMuNDkzLDQuNjA0YzEuNDY4LTAuMjM1LDkuNzA1LTIuOTA1LDEzLjQ5NC00LjYwNEg3NS42NSBjMC42NzYsMCwxLjIyMi0wLjU0NiwxLjIyMi0xLjIyM0M3Ni44NzIsNjYuODA1LDc2LjMyNyw2Ni4yNTksNzUuNjUxLDY2LjI1OXogTTQxLjMzOSwyNy45MzJjMC0wLjQ3MiwwLjM4NC0wLjg1NiwwLjg1Ni0wLjg1NiBoMTUuNDljMC40NzMsMCwwLjg1NiwwLjM4NCwwLjg1NiwwLjg1NnYyLjgwOUg0MS4zMzlWMjcuOTMyeiBNMzYuOTA5LDM0LjA0YzAtMC40NzMsMC4zODQtMC44NTYsMC44NTgtMC44NTZoMjQuMzQ3IGMwLjQ3NCwwLDAuODU4LDAuMzgzLDAuODU4LDAuODU2djYuNTk3Yy01LjM1NC0yLjQtMTIuMjY2LTQuNzQ4LTEzLjAzMi00LjczOGMtMC43NjYtMC4wMS03LjY3OCwyLjMzOS0xMy4wMzIsNC43MzlWMzQuMDR6Ii8+IDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik02My4zMzgsNzkuNDYzSDM2LjY2MmMtMC42NzUsMC0xLjIyMS0wLjU0Ny0xLjIyMS0xLjIyMmMwLTAuNjc2LDAuNTQ2LTEuMjI0LDEuMjIxLTEuMjI0aDI2LjY3NiBjMC42NzUsMCwxLjIyMiwwLjU0OCwxLjIyMiwxLjIyNEM2NC41Niw3OC45MTYsNjQuMDEzLDc5LjQ2Myw2My4zMzgsNzkuNDYzeiIvPiA8L2c+PC9zdmc+" alt=""
                          />
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                        Ship
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b">
            <div className="py-3 px-3">
              <div className="py-2">
                <div className="flex flex-wrap text-sm font-semibold uppercase">
                  <p>Symbols</p>
                </div>
                <div className="flex2 mt-3">
                  <div className="flex flex-wrap justify-between">
                    <div className="w-1/2 p-1">
                      <div className="flex inline-flex justify-center items-center space-x-2">
                        <div className="h-8 w-8">
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjRkYwMDAwIiBkPSJNNzAuNjIzLDM5LjIxMUw4MS4zMywyNy43MzljNy4yNTYtNy4yNTYsMTYuMzI1LTE4LjEzOSwxMi42OTctMjEuNzY3Uzc5LjUxNiwxMS40MTUsNzIuMjYxLDE4LjY3TDYwLjc4OSwyOS4zNzdMMjUuMSwxOC42NyAgYy05LjA2OS0xLjgxNC0xMC44ODMtMS44MTQtMTQuNTExLDEuODE0bDM0LjQ2NCwyMy41OGMtNS40NDIsNS40NDItMTIuNjk3LDE0LjUxMS0xNi4zMjUsMTkuOTUzbC0xLjk2MSwzLjEzOCAgYy0xOS44MDctNC45NS0xOS44NjItNC44OTUtMjEuNjE5LTMuMTM4TDIxLjU1MSw3NS41bC0xLjg5MywzLjAyOGwxLjgxNCwxLjgxNGwzLjAyOC0xLjg5M2wxMS40ODMsMTYuNDA0ICBjMS43NTgtMS43NTgsMS44MTItMS44MTItMy4xMzgtMjEuNjE5bDMuMTM4LTEuOTYxYzUuNDQyLTMuNjI4LDE0LjUxMS0xMC44ODMsMTkuOTUzLTE2LjMyNWwyMy41OCwzNC40NjQgIGMzLjYyOC0zLjYyOCwzLjYyOC01LjQ0MiwxLjgxNC0xNC41MTFMNzAuNjIzLDM5LjIxMXoiLz48L3N2Zz4="
                            alt=""
                          />
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                          Airport
                        </div>
                      </div>
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

export default Key;
