import React, { useRef, useState } from 'react'
import useAutoComplete from '../hooks/useAutoComplete'

const Options = [
    { value: "1", label: "John" },
    { value: "2", label: "Jack" },
    { value: "3", label: "Jane" },
    { value: "4", label: "Mike" },
]

const InputSearch = ({ showSearchDrop, filToggle, openSearchDrop }) => {
    const { bindInput, bindOptions,  bindOption, isBusy, suggestions, selectedIndex} = useAutoComplete({
        onChange: value => console.log(value),
        source: (search) => Options.filter(option => new RegExp(`^${search}`, "i").test(option.label))
    })

  return (
    <>
    {showSearchDrop && (
              <div
                className={`w-full md:w-72 ${
                  showSearchDrop === false ? "hidden" : ""
                }  right-0 mt-9 absolute z-20 font-normal bg-[#f1f1f2] shadow-md rounded-sm overflow-hidden border`}
              >
                <div className="flex py-1.5 px-2 space-x-3">
                  <div className="w-full relative text-gray-600 border-2 border-gray-400/100">
                    <input
                      type="search"
                      name="serch"
                      placeholder="Search"
                      className="w-full bg-white h-8 px-2 pr-10 text-sm "
                      {...bindInput}
                    />
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-2 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
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
                    </button>
                    {/* {isBusy && <div className="w-4 h-4 border-2 border-dashed rounded-full border-slate-500 animate-spin"></div>} */}
                  </div>
                  
                  <button onClick={filToggle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 transform rotate-90"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                  </button>
                  <button onClick={openSearchDrop}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className={` ${suggestions.length > 0 ? 'pt-2 pb-4' : 'pt-0 pb-0'}`}>
                {isBusy && 
                    <div className='flex items-center justify-center'>
                        <div className=" w-4 h-4 border-2 border-dashed rounded-full border-slate-500 animate-spin"></div>
                    </div>
                }
                  <ul {...bindOptions} className="px-4">
                  {
                    suggestions.map((_, index) => (
                        <li 
                        className={`` + (selectedIndex === index && "bg-slate-300")}
                        key={index}
                        {...bindOption}
                    >
                      <a
                        href="#"
                        className="flex justify-between block text-sm text-gray-600 whitespace-nowrap capitalize px-2 py-3 border-b hover:bg-gray-100"
                      >
                        <span className="pl-2">{suggestions[index].label}</span>
                        <button className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-gray-500 transform rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                    ))
                }
                    
                   
                  </ul>
                </div>
              </div>
            )}
    </>
  )
}

export default InputSearch