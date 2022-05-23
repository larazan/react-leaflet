import React, { useRef, useState, useEffect } from "react";

import useStore from "../../store";

const SearchFilter = () => {
  const searchInputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const search = useStore((state) => state.search);
  const iconCount = useStore((state) => state.iconCount);

  useEffect(() => {
    setSearchQuery(searchInputRef.current.value);
    function onKeyDown(e) {
      if (
        e.key !== "/" ||
        e.target.tagName === "INPUT" ||
        e.target.tagName === "SELECT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }
      e.preventDefault();
      searchInputRef.current.focus();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    const handler = window.setTimeout(() => {
      search(searchQuery);
    }, 100);
    return () => {
      window.clearTimeout(handler);
    };
  }, [searchQuery]);

  return (
    <>
      <form
        className="group sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-16 shadow"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="max-w-10xl mx-auto flex">
          <label
            htmlFor="search-input"
            className="flex-none pr-3 flex items-center"
          >
            <span className="sr-only">Search all {iconCount} icons</span>
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-gray-400 group-focus-within:text-gray-500 transition-colors duration-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </label>
          <input
            type="text"
            id="search-input"
            ref={searchInputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search all ${iconCount} icons (Press “/” to focus)`}
            className="flex-auto py-6 text-base leading-6 text-gray-500 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400"
          />
        </div>
      </form>
    </>
  );
};

export default SearchFilter;
