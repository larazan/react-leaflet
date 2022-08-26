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

import RenderSvg from "../RenderSvg";
import TagsInput from "../TagsInput";
import Datepick from "../Datepick";
import FilterModal from "../FilterModal";
import ModalDropzone from "../ModalDropzone";

const ContentSubmit = ({ position, showMyLocation, catName }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [showFile, setShowFile] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [dropzoneModalOpen, setDropzoneModalOpen] = useState(false)

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

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

  const clickOpenFile = () => {
    setShowFile((prev) => !prev)
  }

  const clickOpenLink = () => {
    setShowLink((prev) => !prev)
  }

  const clickOpenDate = () => {
    setShowDate((prev) => !prev)
  }

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
      <div className="w-full max-w-md  h-screen md:overflow-auto flex-none px-0 hidden2 block custom-scrollbar2">
        <div className="bg-white mt-10 md:mt-20">
          <div className="flex justify-between space-x-2 pb-2 px-3 border-b">
            <div className="flex flex-wrap w-2/3 items-center ">
              <div className="flex w-full">
                <span className="text-md font-bold text-gray-800 uppercase ">
                  Create Event
                </span>
              </div>
            </div>
            <div className="flex flex-row-reverse w-1/3">
              <div className="flex flex-wrap pl-2 items-center ">
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
              {lat !== 0 && (
                <div className="w-full ">
                  <div className="flex justify-between ">
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
                      className="text-right text-xs text-[#1d9bf0] bg-white px-1 py-1 right-0 w-full focus-within:outline-none"
                      type="text"
                      name="longitude"
                      placeholder="Longitude"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={lng}
                    />
                  </div>
                </div>
              )}

              {/* <div className=" mb-2">
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
              </div> */}

              <div className="mb-2">
                <div className="mt-3 flex justify-between space-x-2 pb-2 px-0">
                  <div className="flex flex-wrap w-2/3 items-center">
                    <div className="flex items-center w-full space-x-2">
                      <div className="h-7 w-7">
                        <RenderSvg c={`${catName}-2`} f={1} g={0} />
                      </div>
                      <span className="text-sm font-semibold text-gray-600 capitalize">
                        {catName}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse w-1/3">
                    <button onClick={(e) => {
                    e.stopPropagation();
                    setFilterModalOpen(true);
                  }}>
                    <div className="flex flex-wrap pl-2 items-center ">
                      <span className="text-sm font-extrabold text-blue-500  cursor-pointer underline-offset-4 border-gray-800 border-b">
                        Ubah
                      </span>
                    </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-1 mb-0 divide-y divide-gray-700 w-full">
                <div
                  className={`${selectedFile && "pb-7"} ${
                    input && "space-y-2.5"
                  }`}
                >
                  <textarea
                    id="body"
                    // className="text-sm text-[#1d9bf0] bg-white mt-2 px-2 py-2 rounded w-full border border-gray-300 focus-within:outline-blue-400"
                    className="bg-transparent bg-gray-1002 bg-opacity-502 px-2 py-2 focus-within:outline-blue-200 outline-none  text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
                    type="text"
                    name="body"
                    rows="2"
                    placeholder="What's happening?"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.body}
                  ></textarea>
                  {selectedFile && (
                    <div className="relative">
                      <div
                        className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                        onClick={() => setSelectedFile(null)}
                      >
                        <XIcon className="text-white h-5" />
                      </div>
                      <img
                        src={selectedFile}
                        alt=""
                        className="rounded-2xl max-h-80 object-contain"
                      />
                    </div>
                  )}

                  {formik.touched.body && formik.errors.body ? (
                    <div className="py-1 text-xs text-red-400 font-semibold italic">
                      {formik.errors.body}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex2 items-center px-1 p-1">
                <div className="flex items-center justify-between">
                  <div
                    className="icon flex h-10 w-10 p-2 hover:bg-[#e8f5fd] hover:text-cyan-400 rounded-full items-center justify-center cursor-pointer"
                    onClick={() => filePickerRef.current.click()}
                  >
                    <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
                    <input
                      type="file"
                      ref={filePickerRef}
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>

                  <div
                    className="icon rotate-90 flex h-10 w-10 p-2 hover:bg-[#e8f5fd] hover:text-cyan-400 rounded-full items-center justify-center cursor-pointer"
                    onClick={clickOpenLink}
                  >
                    <LinkIcon className="text-[#1d9bf0] h-[22px]" />
                  </div>

                  <div
                    className="icon flex h-10 w-10 p-2 hover:bg-[#e8f5fd] hover:text-cyan-400 rounded-full items-center justify-center cursor-pointer"
                    onClick={() => setShowEmojis(!showEmojis)}
                  >
                    <EmojiHappyIcon className="text-[#1d9bf0] h-[22px] " />
                  </div>

                  <button onClick={(e) => {
                    e.stopPropagation();
                    setDropzoneModalOpen(true);
                  }}>    
                  <div
                    className="icon flex h-10 w-10 p-2 hover:bg-[#e8f5fd] hover:text-cyan-400 rounded-full items-center justify-center cursor-pointer"
                    // onClick={clickOpenDate}
                  >
                    <CalendarIcon className="text-[#1d9bf0] h-[22px] " />
                  </div>
                  </button>

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
              {showFile ? (
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
              ) : null}

              {showLink ? (
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
              ) : null}
              {/* <div className="my-2">
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
              </div> */}

              {/* <div className="px-2 pt-2 pb-11 mb-3 flex flex-wrap rounded-lg bg-purple-200 dark:bg-gray-400">
                <span className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-purple-500 text-gray-200 hover:bg-purple-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                  UI/UX
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-3 hover:text-gray-300"
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
              {showDate ? (
                <div className="my-2 z-10">
                  <Datepick />
                </div>
              ) : null}

              <div className="my-2">
                <TagsInput selectedTags={selectedTags} tagsI={["Nodejs"]} />
              </div>

              
                <FilterModal
                  id="search-modal"
                  searchId="search"
                  modalOpen={filterModalOpen}
                  setModalOpen={setFilterModalOpen}
                />

                <ModalDropzone 
                  modalOpen={dropzoneModalOpen}
                  setModalOpen={setDropzoneModalOpen}
                />
             

              <div className="my-2 flex justify-end mb-3">
                <button
                  type="submit"
                  className="mt-4 w-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white px-10 py-2 rounded-md text-lg font-bold tracking-wide"
                >
                  Post
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
