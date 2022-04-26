import React, { useState } from "react";

import SideMenu from "../SideMenu";

import bmc from '../../assets/images/bmc.svg'
import fox from '../../assets/images/fox-hub.png'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
   
    const openDrawer = () => {
      console.log('klik');
        setIsOpen(!isOpen)
    }

  return (
    <>
      <nav className="flex fixed w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
        <div className="flex items-center">
          <button aria-label="Open Menu" className="mr-2" onClick={openDrawer}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>{" "}
          <img src={fox} alt="Logo" className="h-auto w-24" />
        </div>{" "}
        <div className="flex items-center">
          <div className="hidden md:block md:flex md:justify-between md:bg-transparent">
            <button
              title="Wishlist"
              className="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>{" "}
              <span>Wishlist</span>
            </button>{" "}
            <button className="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>{" "}
            <button className="flex items-cente p-3 font-medium mr-2 text-center bg-gray-300 rounded  hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>{" "}
            <a
              rel="noopener"
              href="https://www.buymeacoffee.com/fayazahmed"
              target="_blank"
              title="Help me keep this site alive"
              className="flex items-center px-3 py-3 font-medium mr-2 text-center bg-orange-600 rounded text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-400"
            >
              <img
                src={bmc}
                alt="Buy Me Coffee"
                className="mr-2 h-6 w-auto"
              />{" "}
              <p className="font-bold">Buy me a Coffee</p>
            </a>
          </div>
        </div>{" "}
        { isOpen && (
        <div className="z-10 fixed inset-0 transition-opacity" >
          <div tabIndex="0" className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        )}
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      </nav>
    </>
  );
};

export default Nav;
