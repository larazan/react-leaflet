import React, { useState, useEffect, useRef, } from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import { AnimatePresence, motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { useDebounce } from "../../hooks/debounceHook";
import { SearchIcon, XIcon } from "@heroicons/react/outline";
import axios from "axios";

const containerVariants = {
  expanded: {
    height: "30em",
  },
  collapsed: {
    height: "3.8em",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

const Search = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const isEmpty = !results || results.length === 0;

  const changeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.trim() === "") setNoResults(false);

    setSearchQuery(e.target.value);
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setNoResults(false);
    setResults([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const prepareSearchQuery = (query) => {
    const url = `http://api.tvmaze.com/search/shows?q=${query}`;

    return encodeURI(url);
  };

  const searchData = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);
    setNoResults(false);

    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      console.log("Response: ", response.data);
      if (response.data && response.data.length === 0) setNoResults(true);

      setResults(response.data);
    }

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchData);

  return (
    <motion.div
      className="flex flex-col items-center w-96 h-full bg-white rounded-sm shadow-lg"
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    > 
      <div className="flex relative w-full items-center w-full h-full  px-4 py-1"> 
        <span className=" align-middle text-sm text-[#bebebe] mt-2 mr-2">
          <SearchIcon className='w-6 h-6' />
        </span>
        <input
          type="text"
          className="w-full h-full border-none text-lg text-[#12112e] outline-none font-medium rounded-md bg-transparent focus:outline-none placeholder:text-[$bebebe] placeholder:transition-all placehoder:ease-in-out placeholder:delay-150"
          placeholder="Search for Series/Shows"
          onFocus={expandContainer}
          ref={inputRef}
          value={searchQuery}
          onChange={changeHandler}
        /> 
        <AnimatePresence>
          {isExpanded && (
            <motion.span 
              className="align-middle text-sm text-[#bebebe] transition-all ease-in-out delay-200 cursor-pointer hover:text-[#dfdfdf]"
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <XIcon className='w-6 h-6' />
            </motion.span> // CloseIcon
          )}
        </AnimatePresence>
      </div>
      {isExpanded &&  <span className="flex w-full h-px bg-[#d8d8d878]"></span>} 
      {isExpanded && (
        <div className="flex flex-col w-full h-full p-1 overflow-y-auto"> 
            {isLoading && (
                <div className="flex items-center justify-center w-full h-full"> 
                    <MoonLoader loading color="#000" size={20} />
                </div>
            )}
            {!isLoading && isEmpty && !noResults && (
                <div className="flex items-center justify-center w-full h-full"> 
                    <span className="flex text-sm text-[#a1a1a1] self-center justify-self-center">Start typing to Search</span> 
                </div>
            )}
             {!isLoading && noResults && (
                 <div className="flex items-center justify-center w-full h-full"> 
                    <span className="flex text-sm text-[#a1a1a1] self-center justify-self-center">No Tv Shows or Series found!</span> 
                </div>
             )}
             {!isLoading && !isEmpty && (
                <>
                  {results.map(({ show }) => (
                    <div key={show.id} className='flex w-full items-center px-2 py-2 h-2 border-1 border-b-[#d8d8d852]'>
                      <div className='flex flex-0.4 w-auto h-full'>
                        <img className='w-auto h-full' src={show.image && show.image.medium} alt={show.name} />
                      </div>
                      <h3 className='flex flex-1 ml-2 text-sm text-[#000]'>{show.name}</h3>
                      <span className='flex flex-0.2 text-sm text-[#a1a1a1]'>{show.rating && show.rating.average || "N/A"}</span>
                    </div>
                  ))}
                </>
             )}
        </div>
      )}
    </motion.div>
  );
};

export default Search;
