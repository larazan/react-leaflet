import React, { useState, memo, useRef, useEffect } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import { useLocation, Outlet, Link, NavLink } from "react-router-dom";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import ContentSelected from "../components/ContentSelected";


const createGuid = () => {
  let d = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  const reg = /[xy]/g
  let r = (Math.random() * 16 | 0)
  // let m = (r && 0x3 || 0x8)
  // let n = m.toString(16)
  // let v = c === 'x' ? r : (r && 0x3 || 0x8)
  // const v = (c) => {
  //   c === 'x' ? r : (r && 0x3 || 0x8)
  // } 
  // return d.replace(reg, 2)
  // return r
  // return m
  // return n
  let q = d.replace(reg, r)
  return q
}

console.log(createGuid());

const recipes = [
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "<https://spoonacular.com/recipeImages/716429-312x231.jpg>",
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    recipe: {
      // recipe data
    },
    tickets: [
      {
        title:
          "Stop it, stop it. It's fine. I will 'destroy' you! I can explain. It's very valuable. ",
        author: "Bender Bending Rodriguez",
        created_at: "16 hours ago",
        level: "Low Level",
        comments_count: 12,
      },
      {
        title:
          "Hey, whatcha watching? Hey! I'm a porno-dealing monster, what do I care what you think? It must be wonderful.",
        author: "Professor Farnsworth",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 0,
      },
      {
        title:
          "We don't have a brig. Meh. Calculon is gonna kill us and it's all everybody else's fault!",
        author: "Philip J. Fry",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 12,
      },
      {
        title:
          "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel.",
        author: "Turanga Leela",
        created_at: "16 hours ago",
        level: "High Level",
        comments_count: 1,
      },
    ],
  },
  {
    id: 716429,
    title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    image: "<https://spoonacular.com/recipeImages/716429-312x231.jpg>",
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    recipe: {
      // recipe data
    },
    tickets: [
      {
        title:
          "Stop it, stop it. It's fine. I will 'destroy' you! I can explain. It's very valuable. ",
        author: "Bender Bending Rodriguez",
        created_at: "16 hours ago",
        level: "Low Level",
        comments_count: 12,
      },
      {
        title:
          "Hey, whatcha watching? Hey! I'm a porno-dealing monster, what do I care what you think? It must be wonderful.",
        author: "Professor Farnsworth",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 0,
      },
      {
        title:
          "We don't have a brig. Meh. Calculon is gonna kill us and it's all everybody else's fault!",
        author: "Philip J. Fry",
        created_at: "16 hours ago",
        level: "Medium Level",
        comments_count: 12,
      },
      {
        title:
          "This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel.",
        author: "Turanga Leela",
        created_at: "16 hours ago",
        level: "High Level",
        comments_count: 1,
      },
    ],
  },
];

const Coba = memo(() => {
  const [showDrop, setShowDrop] = useState(false);

  const ref = useRef();
  useOnClickOutside(ref, () => setShowDrop(false));

  const openDrop = (e) => {
    e.stopPropagation();
    console.log("open drop");
    setShowDrop((prev) => !prev);
  };

  const location = useLocation();

  console.log(location.pathname);

  let urls = location.pathname.split("/");
  let lastUrl = urls[urls.length - 1];

  const url = `https://hargapangan.id/index.php?option=com_gtpihps&task=json.commodityPrices&province_id=0&price_type_id=1&_=1659174441179`;

  const getData = async () => {
    const response = await axios.get(url).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      console.log("Response: ", response.data);
    }
  };

  useEffect(() => {
    // getData();
  }, []);

  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
          {/* <div className="flex flex-col translate-x-0 mt-0 md:mt-14 translate-x-0">

            <div className="relative w-full">
              <img
                className="w-full md:w-full h-full  md:object-cover"
                src="https://preview.cruip.com/mosaic/images/profile-bg.jpg"
                width="979"
                height="420"
                alt="Profile background"
              />
              <button
                className="absolute left-2 block md:hidden text-white top-2 cursor-pointer"
                aria-controls="profile-sidebar"
                aria-expanded="false"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
</svg>
              </button>
            </div>

            <div className="p-2 relative">
              <div className="mb-1 -mt-14 md:-mt-16">
                <div className="flex flex-row px-2 md:px-4 items-center justify-between flex-end">
                  <div className="inline-flex -mt-[0.25rem] ">
                    <img
                      className="rounded-full border-4 border-white"
                      src="https://preview.cruip.com/mosaic/images/user-128-01.jpg"
                      width="128"
                      height="128"
                      alt="Avatar"
                    />
                  </div>

                  <div className="w-9/12 md:w-7/12 mt-10 md:mt-16">
                    <div className="flex items-center space-x-2 justify-end">
                      <a
                        href="#"
                        className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded block text-center sm:inline-block block"
                      >
                        ikuti
                      </a>
                      <Link to="/messages/3">
                        <button className="flex justify-center items-center h-10 w-10 p-2 border rounded-full hover:bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </Link>
                      <div
                        className="flex inline-flex justify-center items-center space-x-1 cursor-pointer rounded-full border"
                        onClick={openDrop}
                      >
                        <div className="flex h-10 w-10 p-2 hover:bg-[#e8f5fd] hover:text-cyan-400 rounded-full items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg>
                        </div>

                        <div
                          ref={ref}
                          className={`sm:w-72 md:w-72 ${
                            showDrop === false ? "hidden" : ""
                          }  right-2 mt-24 md:mt-32 absolute z-20 font-normal bg-white shadow-md rounded-sm overflow-hidden border`}
                        >
                          <div className="py-2">
                            <ul className="flex-col font-sans items-center justify-center text-sm">
                              <Link to="">
                                <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={1}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                    <span>Tidak tertarik dengan tweet ini</span>
                                  </div>
                                </li>
                              </Link>
                              <Link to="">
                                <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={1}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                      />
                                    </svg>
                                    <span>Laporkan tweet ini</span>
                                  </div>
                                </li>
                              </Link>
                              <Link to="">
                                <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={1}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                      />
                                    </svg>
                                    <span>Tambahkan/hapus dari daftar</span>
                                  </div>
                                </li>
                              </Link>
                              <Link to="">
                                <li className="py-1 md:py-2 px-3 md:px-6 hover:bg-gray-200">
                                  <div className="flex items-center space-x-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={1}
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                    <span>Source</span>
                                  </div>
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <header className="flex flex-col px-2 md:px-5 mb-1 md:mb-10 w-full text-left">
                <div className="flex flex-row py-2 space-x-2 inline-flex items-start">
                  <h1 className="text-2xl text-slate-800 font-bold">
                    Carolyn McNeail
                  </h1>
                  <svg className="h-4 w-4" viewBox="0 0 16 16">
                    <path d="M13 6a.75.75 0 0 1-.75-.75 1.5 1.5 0 0 0-1.5-1.5.75.75 0 1 1 0-1.5 1.5 1.5 0 0 0 1.5-1.5.75.75 0 1 1 1.5 0 1.5 1.5 0 0 0 1.5 1.5.75.75 0 1 1 0 1.5 1.5 1.5 0 0 0-1.5 1.5A.75.75 0 0 1 13 6ZM6 16a1 1 0 0 1-1-1 4 4 0 0 0-4-4 1 1 0 0 1 0-2 4 4 0 0 0 4-4 1 1 0 1 1 2 0 4 4 0 0 0 4 4 1 1 0 0 1 0 2 4 4 0 0 0-4 4 1 1 0 0 1-1 1Z"></path>
                  </svg>
                </div>

                <ul className="hidden md:flex space-x-8 mb-4">
                  <li>
                    <span className="font-semibold">136</span> posts
                  </li>

                  <li>
                    <Link
                      to="followers"
                      className="hover:underline underline-offset-4"
                    >
                      <span className="font-semibold">40.5k</span> followers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="following"
                      className="hover:underline underline-offset-4"
                    >
                      <span className="font-semibold">302</span> following
                    </Link>
                  </li>
                </ul>

                <div className="hidden md:block">
                  <h1 className="font-semibold">Mr Travlerrr...</h1> 
                  <span>Travel, Nature and Music</span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>

                <div className="md:hidden text-sm">
                   <h1 className="font-semibold">Mr Travlerrr...</h1> 
                  <span>Travel, Nature and Music</span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>

                <div className="text-sm font-semibold leading-normal py-2 text-gray-500 flex items-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="mr-1"
                    width="16"
                    height="16"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Los Angeles, California
                </div>
              </header>

              <div className=" md:px-3">
                <ul className="flex md:hidden justify-around space-x-8 text-center p-2 text-gray-600 leading-snug text-sm">
                  <li className="capitalize">
                    <span className="font-bold text-gray-800 block">136</span>
                    posts
                  </li>

                  <li className="capitalize">
                    <Link to="followers">
                      <span className="font-bold text-gray-800 block">
                        40.5K
                      </span>
                      Followers
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link to="following">
                      <span className="font-bold text-gray-800 block">302</span>
                      Following
                    </Link>
                  </li>
                </ul>

                <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-b">
                  <li
                    className={` ${
                      lastUrl === "profile"
                        ? "border-b-2 border-indigo-500 md:border-indigo-500 md:-mt-px md:text-gray-700"
                        : ""
                    } `}
                  >
                    <NavLink
                      className={` ${
                        lastUrl === "profile"
                          ? "inline-block p-3 text-indigo-500 md:text-indigo-500 font-bold"
                          : "inline-block p-3"
                      }`}
                      to="/profile"
                    >
                      <span className="hidden2 md:inline">post</span>
                    </NavLink>
                  </li>
                  <li
                    className={` ${
                      lastUrl === "detail"
                        ? "border-b-2 border-indigo-500 md:border-indigo-500 md:-mt-px md:text-gray-700"
                        : ""
                    } `}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "inline-block p-3 text-indigo-500 md:text-indigo-500 font-bold"
                          : "inline-block p-3"
                      }
                      to="detail"
                    >
                      <span className="hidden2 md:inline">detail</span>
                    </NavLink>
                  </li>
                  <li
                    className={` ${
                      lastUrl === "more"
                        ? "border-b-2 border-indigo-500 md:border-indigo-500 md:-mt-px md:text-gray-700"
                        : ""
                    } `}
                  >
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "inline-block p-3 text-indigo-500 md:text-indigo-500 font-bold"
                          : "inline-block p-3"
                      }
                      to="more"
                    >
                      <span className="hidden2 md:inline">more</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <div className="mt-20">
          <ContentSelected />
        </div>

        <div>
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id}>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt="recipe image" />
                <div>
                  <ul>
                {recipe.dishTypes.map((type, index) => {
                  return <li key={index}>{type}</li>;
                })}
                </ul>
                </div>
                <div>
                  <ul>
                {recipe.tickets.map((ticket, id) => {
                  return <li key={id}>{ticket.title}</li>;
                })}
                </ul>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
});

export default Coba;
