import React from "react";
import { useLocation, Outlet, Link } from "react-router-dom";

import Header from "../components/Header";

function Profile(props) {
  const location = useLocation();

  console.log(location.pathname);

  const renderHeader = () => {
    if (
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/forgot"
    ) {
      return <Header />;
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen max-h-screen">
        {renderHeader()}
        <main className="mt-10 bg-gray-100 bg-opacity-25">
          <div className="lg:w-8/12 pt-10 lg:mx-auto mb-8">
            <header className="flex flex-wrap items-center p-4 md:py-8">
              <div className="md:w-3/12 md:ml-16">
                <img
                  className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 border-pink-600 p-1"
                  src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  alt="profile"
                />
              </div>

              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    mrtravlerrr_
                  </h2>

                  <span
                    className="inline-block fas fa-certificate fa-lg text-blue-500 
                             relative mr-6 text-xl transform -translate-y-2"
                    aria-hidden="true"
                  >
                    <i
                      className="fas fa-check text-white text-xs absolute inset-x-0
                             ml-1 mt-px"
                    ></i>
                  </span>

                  <a
                    href="#"
                    className="bg-blue-500 px-2 py-1 
                      text-white font-semibold text-sm rounded block text-center 
                      sm:inline-block block"
                  >
                    Follow
                  </a>
                </div>

                <ul className="hidden md:flex space-x-8 mb-4">
                  <li>
                    <span className="font-semibold">136</span> posts
                  </li>

                  <li>
                    <span className="font-semibold">40.5k</span> followers
                  </li>
                  <li>
                    <span className="font-semibold">302</span> following
                  </li>
                </ul>

                <div className="hidden md:block">
                  <h1 className="font-semibold">Mr Travlerrr...</h1>
                  <span>Travel, Nature and Music</span>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
              </div>

              <div className="md:hidden text-sm my-2">
                <h1 className="font-semibold">Mr Travlerrr...</h1>
                <span>Travel, Nature and Music</span>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </header>

            <div className="px-px md:px-3">
              <ul
                className="flex md:hidden justify-around space-x-8 border-t 
              text-center p-2 text-gray-600 leading-snug text-sm"
              >
                <li>
                  <span className="font-semibold text-gray-800 block">
                    136{" "}
                  </span>{" "}
                  posts
                </li>

                <li>
                  <span className="font-semibold text-gray-800 block">
                    40.5k{" "}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="font-semibold text-gray-800 block">
                    302{" "}
                  </span>{" "}
                  following
                </li>
              </ul>

              <ul
                className="flex items-center justify-around md:justify-center space-x-12  
                  uppercase tracking-widest font-semibold text-xs text-gray-600
                  border-t"
              >
                <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                  <Link className="inline-block p-3" to="/profile">
                    <span className="hidden md:inline">post</span>
                  </Link>
                </li>
                <li>
                  <Link className="inline-block p-3" to="with_comments">
                    <span className="hidden md:inline">post & comment</span>
                  </Link>
                </li>
                <li>
                  <Link className="inline-block p-3" to="likes">
                    <span className="hidden md:inline">like</span>
                  </Link>
                </li>
              </ul>
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
