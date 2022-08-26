import React, { useState } from "react";

const TagsInput = ({ tagsI, selectedTags }) => {
  const [tags, setTags] = useState(tagsI);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <div className="flex flex-wrap items-start p-2 rounded border border-[#d6d8da] focus-within:border-[#0052cc]">
        {tags.map((tag, index) => (
          <span className="flex flex-wrap pl-3 pr-2 py-1 m-1 justify-between items-center text-xs font-medium rounded-lg cursor-pointer bg-[#1d9bf0] text-white hover:bg-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
            {tag}
            <span onClick={() => removeTags(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </span>
        ))}

        <input
          className="flex-1 border-none focus:outline-none text-sm"
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
      </div>
    </>
  );
};

export default TagsInput;
