import React, { useState, useRef } from 'react'
import {Link } from 'react-router-dom'
import { useOnClickOutside } from '../hooks/useOnClickOutside'


const UserDrop = ({ showUserDrop, setShowUserDrop }) => {
    
    const ref = useRef();
    useOnClickOutside(ref, () => setShowUserDrop(false));

  return (
    <>
    {showUserDrop && (
                <div
                  ref={ref}
                  className={`sm:w-72 md:w-72 ${
                    showUserDrop === false ? "hidden" : ""
                  }  right-2 mt-2 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
                >
                  <div className="py-2">
                    <ul className="flex-col font-sans items-center justify-center text-sm">
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Atur Profil</span>
                          </div>
                        </li>
                      </Link>
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1}
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
                            <span>Pengaturan & privasi</span>
                          </div>
                        </li>
                      </Link>
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>Informasi</span>
                          </div>
                        </li>
                      </Link>
                      <Link to="">
                        <li className="py-1 md:py-2 px-2 hover:bg-gray-200">
                          <div className="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>Pusat Bantuan</span>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              )}
    </>
  )
}

export default UserDrop