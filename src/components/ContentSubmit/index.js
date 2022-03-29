import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

const ContentSubmit = ({ position, showMyLocation }) => {
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

  console.log(position);
  console.log(lat);
  console.log(lng);

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
              <div className="my-2">
                <label
                  htmlFor="category"
                  className="text-gray-400 font-semibold"
                >
                  Category
                </label>
                <select
                  name="category"
                  className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
                >
                  <option>Berita</option>
                  <option>Diskon</option>
                  <option>Promosi</option>
                  <option>Event</option>
                </select>
              </div>

              <div className="my-2">
                <label
                  htmlFor="latitude"
                  className="text-gray-400 font-semibold"
                >
                  Latitude
                </label>
                <input
                  id="latitude"
                  className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
                  name="latitude"
                  type="text"
                  placeholder="Latitude"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={lat}
                />
              </div>
              <div className="my-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="longitude"
                    className="text-gray-400 font-semibold"
                  >
                    Longitude
                  </label>
                </div>
                <input
                  id="longitude"
                  className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
                  type="text"
                  name="longitude"
                  placeholder="Password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={lng}
                />
              </div>

              <div className="my-2">
                <div className="flex justify-between">
                  <label htmlFor="body" className="text-gray-400 font-semibold">
                    Body
                  </label>
                </div>
                <textarea
                  id="body"
                  className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
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

              <div className="flex2 items-center">
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
                    <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                  </div>

                  <div
                    className="icon"
                    //   onClick={() => setShowEmojis(!showEmojis)}
                  >
                    <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
                  </div>

                  <div className="icon">
                    <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                  </div>

                  {/* {showEmojis && (
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
              )} */}
                </div>
              </div>

              <div className="my-2">
                <label htmlFor="link" className="text-gray-400 font-semibold">
                  Image
                </label>
                <div className="border-dashed border-2 w-64 h-32 mt-2 rounded flex justify-center items-center text-gray-400 font-semibold">
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

                  <span className="block text-grey">Drop your files here</span>
                </div>
              </div>

              <div className="my-2">
                <label htmlFor="link" className="text-gray-400 font-semibold">
                  Link
                </label>
                <input
                  id="link"
                  className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
                  name="latitude"
                  type="text"
                  placeholder="Link"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.link}
                />
              </div>

              <div className="my-2">
                <label htmlFor="tags" className="text-gray-400 font-semibold">
                  Tags
                </label>
                <input
                  id="tags"
                  className="bg-white mt-2 px-4 py-3 rounded w-full border border-gray-300"
                  name="latitude"
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

              <div className="my-2 flex justify-end">
                <button
                  type="submit"
                  className="mt-4 w-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white px-10 py-3 rounded-md text-lg font-bold tracking-wide"
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
