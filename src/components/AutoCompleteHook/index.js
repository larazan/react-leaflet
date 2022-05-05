import React, { useState } from "react";

// import './style.css'

const AutoCompleteHook = ({ suggestions }) => {
  const [active, setActive] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const input = e.currentTarget.value;
    const newFilteredSuggestions = suggestions.filter(
      (suggestion) => suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setActive(0);
    setFiltered(newFilteredSuggestions);
    setIsShow(true);
    setInput(e.currentTarget.value);
  };
  const onClick = (e) => {
    setActive(0);
    setFiltered([]);
    setIsShow(false);
    setInput(e.currentTarget.innerText);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // enter key
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      // up arrow
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      // down arrow
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };
  const renderAutocomplete = () => {
    if (isShow && input) {
      if (filtered.length) {
        return (
            <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
          <ul className="shadow-xs max-h-56 rounded-md py-1 text-base leading-6 overflow-auto focus:outline-none sm:text-sm sm:leading-5">
            {filtered.map((suggestion, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              return (
                <li
                  className={`text-gray-900 select-none relative py-2 pl-3 pr-9  cursor-pointer hover:text-white hover:bg-indigo-600 focus:outline-none focus:text-white focus:bg-indigo-600 ${className} `}
                  key={suggestion}
                  onClick={onClick}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
          </div>
        );
      } else {
        return (
          <div className="no-autocomplete">
            <em>Not found</em>
          </div>
        );
      }
    }
    return <></>;
  };

  return (
    <>
      <div className="flex flex-wrap w-full py-6">
        <div className="max-w-xs mx-auto">
          <div className="mt-6 ">
            <input
              type="text"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={input}
              className="relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            />
            {renderAutocomplete()}
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoCompleteHook;
