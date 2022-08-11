import React, { useEffect, useRef, useState } from "react";

const Autocomplete = ({ options, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const ref = useRef();

  const select = (option) => {
    onChange(option);
    setShowOptions(false);
  };

  const handleChange = (text) => {
    onChange(text);
    setCursor(-1);
    if (!showOptions) {
      setShowOptions(true);
    }
  };

  const filteredOptions = options.filter((option) => option.includes(value));

  const moveCursorDown = () => {
    if (cursor < filteredOptions.length - 1) {
      setCursor((c) => c + 1);
    }
  };

  const moveCursorUp = () => {
    if (cursor > 0) {
      setCursor((c) => c - 1);
    }
  };

  const handleNav = (e) => {
    switch (e.key) {
      case "ArrowUp":
        moveCursorUp();
        break;
      case "ArrowDown":
        moveCursorDown();
        break;
      case "Enter":
        if (cursor >= 0 && cursor < filteredOptions.length) {
          select(filteredOptions[cursor]);
        }
        break;
    }
  };

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowOptions(false);
        setCursor(-1);
      }
    };

    document.addEventListener("click", listener);
    document.addEventListener("focusin", listener);
    return () => {
      document.removeEventListener("click", listener);
      document.removeEventListener("focusin", listener);
    };
  }, []);

  return (
    <>
      <div className="relative w-80 flex" ref={ref}>
        <input
          type="text"
          className="w-full border-2 px-4 py-1 outline-none bg-[#f1f1f2] rounded-full"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setShowOptions(true)}
          onKeyDown={handleNav}
          placeholder="search something"
        />

        <ul
          className={`absolute w-full top-12 rounded-lg bg-white shadow-lg drop-shadow-lg py-2 ${
            !showOptions && "hidden"
          } select-none`}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, i, arr) => {
              let className = "px-4 py-2 hover:bg-gray-100 flex flex-inline items-center justify-center2";

              if (i === 0) className += "";
              else if (i === arr.length) className += "pt-1 pb-2 rounded-b-lg";
              else if (i === 0 && arr.length === 1)
                className += "py-2 rounded-lg";
              else className += "py-1";

              if (cursor === i) {
                className += " bg-gray-100";
              }

              return (
                <li
                  className={`${className} cursor-pointer`}
                  key={option}
                  onClick={() => select(option)}
                >
                  <span className="mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
                  </span>
                  <span className="text-sm font-semibold">
                  {option}
                  </span>
                </li>
              );
            })
          ) : (
            <li className="px-4 py-2 text-gray-500">No results</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Autocomplete;
