import React, { useState, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  LinkIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import TagsInput from "../TagsInput";

const ContentSubmit = ({ position, showMyLocation }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [showEmojis, setShowEmojis] = useState(false);

  useEffect(() => {
    if (position != null) {
      setLat(position.lat);
      setLng(position.lng);
    }
  }, [position]);

  const formik = useFormik({
    initialValues: {
      latitude: "",
      longitude: "",
      body: "",
      link: "",
      tags: "",
    },
    validationSchema: Yup.object({
      body: Yup.string().required("This field is required"),
      tags: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  console.log(position);
  console.log(lat);
  console.log(lng);

  const selectedTags = (tags) => {
    console.log(tags);
  };

  return (
    <>
      <div className="w-full max-w-md  h-screen overflow-auto flex-none px-0 hidden md:block custom-scrollbar">
        <div className="bg-white mt-20">
          <div className="flex justify-between space-x-2 pb-2 px-3 border-b">
            <div className="flex flex-wrap w-2/3 items-center hidden md:flex">
              <div className="flex w-full">
                <span className="text-md font-bold text-gray-800 uppercase ">
                  Create Event
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse w-1/3">
              <div className="flex flex-wrap pl-2 items-center hidden md:flex">
                <span
                  className="text-xs font-extrabold text-blue-500  cursor-pointer"
                  onClick={showMyLocation}
                >
                  My Location
                </span>
              </div>
            </div>
          </div>
          <div className="px-6 mt-2 w-full mb-16">
            <form className="flex flex-col" onSubmit={formik.handleSubmit}>
              
              { lat !== 0 && 
              <div className="">
                <div className="flex justify-between">
                  <input
                    id="latitude"
                    className="text-xs text-[#1d9bf0] bg-white px-1 py-1 w-full focus-within:outline-none"
                    name="latitude"
                    type="text"
                    placeholder="Latitude"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={lat}
                  />
                  <input
                    id="longitude"
                    className="text-xs text-[#1d9bf0] bg-white px-1 py-1 w-full focus-within:outline-none"
                    type="text"
                    name="longitude"
                    placeholder="Password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={lng}
                  />
                </div>
              </div>
              }

              <div className=" mb-2">
                <select
                  name="category"
                  className="text-sm bg-white mt-2 px-2 py-2 rounded w-full border border-gray-300 focus-within:outline-blue-400"
                >
                  <option>-- choose category --</option>
                  <option>Berita</option>
                  <option>Diskon</option>
                  <option>Promosi</option>
                  <option>Event</option>
                </select>
              </div>

              <div className="mt-1 mb-0">
                <textarea
                  id="body"
                  className="text-sm text-[#1d9bf0] bg-white mt-2 px-2 py-2 rounded w-full border border-gray-300 focus-within:outline-blue-400"
                  type="text"
                  name="body"
                  rows="4"
                  placeholder="Text Anything"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.body}
                ></textarea>
                {formik.touched.body && formik.errors.body ? (
                  <div className="py-1 text-xs text-red-400 font-semibold italic">
                    {formik.errors.body}
                  </div>
                ) : null}
              </div>

              <div className="flex2 items-center px-1">
                <div className="flex items-center justify-between">
                  <div
                    className="icon"
                    // onClick={() => filePickerRef.current.click()}
                  >
                    <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
                    <input
                      type="file"
                      //   ref={filePickerRef}
                      hidden
                      //   onChange={addImageToPost}
                    />
                  </div>

                  <div className="icon rotate-90">
                    <LinkIcon className="text-[#1d9bf0] h-[22px]" />
                  </div>

                  <div
                    className="icon"
                      onClick={() => setShowEmojis(!showEmojis)}
                  >
                    <EmojiHappyIcon className="text-[#1d9bf0] h-[22px] cursor-pointer" />
                  </div>

                  <div className="icon">
                    <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                  </div>

                  {showEmojis && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "465px",
                    marginLeft: -40,
                    maxWidth: "320px",
                    borderRadius: "20px",
                  }}
                  theme="dark"
                />
              )}
                </div>
              </div>

              <div className="my-2">
                <div className="flex border-dashed border-2 w-full h-32 mt-2 rounded  justify-center items-center text-gray-400 font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>

                  <span className="text-sm block text-grey">
                    Drop your files here
                  </span>
                </div>
              </div>

              <div className="my-2">
                <input
                  id="link"
                  className="text-sm text-[#1d9bf0] bg-white mt-2 px-2 py-2 rounded w-full border border-gray-300 focus-within:outline-blue-400"
                  name="link"
                  type="text"
                  placeholder="Link"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.link}
                />
              </div>

              <div className="my-2">
                <input
                  id="tags2"
                  className="text-sm text-[#1d9bf0] bg-white mt-2 px-2 py-2 rounded w-full border border-gray-300 focus-within:outline-blue-400"
                  name="tags"
                  type="text"
                  placeholder="Tags"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tags}
                />
                {formik.touched.tags && formik.errors.tags ? (
                  <div className="py-1 text-xs text-red-400 font-semibold italic">
                    {formik.errors.tags}
                  </div>
                ) : null}
              </div>

              {/* <div class="px-2 pt-2 pb-11 mb-3 flex flex-wrap rounded-lg bg-purple-200 dark:bg-gray-400">
                <span class="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                  UI/UX
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 ml-3 hover:text-gray-300"
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
              </div> */}

              <div className="my-2">
                <TagsInput
                  selectedTags={selectedTags}
                  tagsI={["Nodejs"]}
                />
              </div>

              <div className="my-2 flex justify-end">
                <button
                  type="submit"
                  className="mt-4 w-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white px-10 py-2 rounded-md text-lg font-bold tracking-wide"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSubmit;
