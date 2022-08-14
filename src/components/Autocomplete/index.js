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
      <div className="relative w-full flex" ref={ref}>
        <input
          type="text"
          className="w-full border-1 px-4 py-2.5 outline-none bg-[#f1f1f2] rounded-full text-sm text-gray-700 placeholder-gray-600 focus:placeholder-gray-500 focus:border-purple-300 focus:outline-none focus:shadow-outline-purple"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setShowOptions(true)}
          onKeyDown={handleNav}
          placeholder="search something"
        />
        <div class="absolute inset-y-0 right-4 flex items-center pl-2 cursor-pointer">
          <svg
            class="w-4 h-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="fill-current text-slate-500"
              d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
            ></path>
            <path
              class="fill-current text-slate-400"
              d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
            ></path>
          </svg>
        </div>

        <ul
          className={`absolute w-full top-12 rounded-lg bg-white shadow-lg drop-shadow-lg py-2 ${
            !showOptions && "hidden"
          } select-none`}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, i, arr) => {
              let className =
                "px-4 py-2 hover:bg-gray-100 flex flex-inline items-center justify-center2";

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">{option}</span>
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
