import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";

import SearchFilter from "./SearchFilter";
import IconsContainer from "./IconsContainer";
import useStore from "../store";

function FilterModal({ id, searchId, modalOpen, setModalOpen }) {
  // const searchInputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const search = useStore((state) => state.search);
  const iconCount = useStore((state) => state.iconCount);

  // useEffect(() => {
  //   setSearchQuery(searchInputRef.current.value);
  //   function onKeyDown(e) {
  //     if (
  //       e.key !== "/" ||
  //       e.target.tagName === "INPUT" ||
  //       e.target.tagName === "SELECT" ||
  //       e.target.tagName === "TEXTAREA" ||
  //       e.target.isContentEditable
  //     ) {
  //       return;
  //     }
  //     e.preventDefault();
  //     searchInputRef.current.focus();
  //   }
  //   window.addEventListener("keydown", onKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", onKeyDown);
  //   };
  // }, []);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      search(searchQuery);
    }, 100);
    return () => {
      window.clearTimeout(handler);
    };
  }, [searchQuery]);

  const modalContent = useRef(null);
  const searchInput = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed relative2 inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-start top-5 md:top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
        >
          {/* Search form */}
          <form className="border-b border-slate-200" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <label htmlFor={searchId} className="sr-only">
                Search
              </label>
              <input
                id={searchId}
                className="w-full border-0 focus:ring-transparent focus-within:outline-blue-400 placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Cari semua ${iconCount} kategori ikon`}
                // ref={searchInputRef}
                ref={searchInput}
              />
             
              <button
                className="absolute inset-0 right-auto group"
                type="submit"
                aria-label="Search"
              >
                <svg
                  className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                  <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
              </button>
            </div>
          </form>
          
          <div className="w-full max-w-3xl px-6 md:px-6 py-1 md:py-1  bg-white">
            <div className="mx-auto pt-0 md:pt-0">
              {/* <SearchFilter /> */}
              <IconsContainer />
            </div>
          </div>
        </div>
        
      </Transition>
    </>
  );
}

export default FilterModal;
