import React from "react";

const MessageBox = () => {
  return (
    <>
      <main>
        <header className="flex md:hidden z-20 md:z-20 h-10 md:h-14 w-full  top-0 md:m-0 px-4 md:px-5 py-6 md:py-3  items-center justify-between bg-gray-100 border-b shadow">
          <div className="flex inline-flex w-full justify-center items_center space-x-3">
            <div className="flex w-1/4 w-full">
              <button className="p-1 rounded-full bg-gray-300">
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
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex w-3/4 items-center justify-center2 space-x-2">
              <div className="no-flex2 ">
                <img
                  className="w-8 h-8 md:w-40 md:h-40 object-cover rounded-full border p-0"
                  src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  alt="profile"
                />
              </div>
              <div>
                <span className="text-lg inline-block font-semibold sm:mb-0">
                  mrtravlerrr_
                </span>
              </div>
            </div>
          </div>
        </header>
        <div className="flex items-center justify-center min-h-screen2">
          <div className="w-full max-w-2xl2 px-0 pt-8 bg-white">
            <div className="flex mx-auto pt-2">
              <div className="hidden sm:block w-2/6 bg-gray-100">
                <div className="mt-7">
                  <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-200 px-3 py-3">
                    <img
                      src="https://images.unsplash.com/photo-1521676129211-b7a9e7592e65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      alt="My profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-1 flex-col leading-tight">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-600">
                          Branda Frost
                        </span>
                        <span className="text-xs text-gray-400">10:34 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Nice to meet you!
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 cursor-pointer hover:bg-gray-200 px-3 py-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      alt="My profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-1 flex-col leading-tight">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-gray-600">
                          Paul Irish
                        </span>
                        <span className="text-xs text-gray-400">10:34 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          That's Great, then star working from tomorrow
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col">
                <div className="flex flex-col hidden md:block sm:flex-row items-center justify-between py-3 border-b-2 border-gray-200">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      alt=""
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full"
                    />
                    <div className="flex flex-col leading-tight">
                      <div className="text-lg mt-1 flex items-center">
                        <span className="text-gray-700 mr-3 font-semibold">
                          {" "}
                          mrtravlerrr_
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div className="flex flex-col space-y-1">
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Can be verified on any platform using docker
                          </span>
                          <span className="grid text-xs font-light text-gray-500 justify-items-start">
                            30/08/2022, 30:00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div className="flex flex-col space-y-1">
                          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            Your error message says permission denied, npm
                            global installs must be given root privileges.
                          </span>
                          <span className="grid text-xs font-light text-gray-500 justify-items-end">
                            30/08/2022, 30:00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            Command was run with root privileges. I'm sure about
                            that.
                          </span>
                        </div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            I've update the description so it's more obviously
                            now
                          </span>
                        </div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            FYI https://askubuntu.com/a/700266/510172
                          </span>
                        </div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Check the line above (it ends with a # so, I'm
                            running it as root )
                            <pre># npm install -g @vue/devtools</pre>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            Any updates on this issue? I'm getting the same
                            error when trying to install devtools. Thanks
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Thanks for your message David. I thought I'm alone
                            with this issue. Please, 👍 the issue to support it
                            :)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white">
                            Are you using sudo?
                          </span>
                        </div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            Run this command sudo chown -R `whoami`
                            /Users/your_user_profile/.npm-global/ then install
                            the package globally without using sudo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            It seems like you are from Mac OS world. There is no
                            /Users/ folder on linux 😄
                          </span>
                        </div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            I have no issue with any other packages installed
                            with root permission globally.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            yes, I have a mac. I never had issues with root
                            permission as well, but this helped me to solve the
                            problem
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            I get the same error on Arch Linux (also with sudo)
                          </span>
                        </div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            I also have this issue, Here is what I was doing
                            until now: #1076
                          </span>
                        </div>
                        <div>
                          <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            even i am facing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky absolute bg-gray-100 border-t shadow w-full bottom-0">
              <div className="max-w-2xl mx-auto">
                <form>
                  <label for="chat" className="sr-only">
                    Your message
                  </label>
                  <div className="flex items-center py-2 px-3 bg-gray-50 ">
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <textarea
                      id="chat"
                      rows="1"
                      className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your message..."
                    ></textarea>
                    <button
                      type="submit"
                      className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                    >
                      <svg
                        className="w-6 h-6 rotate-90"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MessageBox;
