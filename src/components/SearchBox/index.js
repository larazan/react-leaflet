import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchBox = ({ position }) => {
  let navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div className={`${position == 'navbar' ? 'hidden md:flex' : 'flex'} items-center relative w-full md:w-1/3 mx-auto text-gray-600 `}>
        <form onSubmit={submitHandler} className="w-full">
          <input
            className="bg-purple-white border border-gray-400 shadow2 md:rounded-full p-3 px-5 text-xs md:text-sm focus:outline-none w-full"
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            name="q"
            placeholder="Search for quotes and many more.."
          />
          <button type="submit" className="absolute right-0 top-0 mt-4 mr-3">
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBox;