import React, { memo, useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import axios from "axios";

import symbolIdList from "../icon";
import UserAvatar from "../components/UserAvatar";
import MessageList from "../components/MessageList";

const Coba = memo(() => {
  const [info, setInfo] = useState({});
  const [color, setColor] = useState("#46bd87");
  const onChange = (event) => {
    setColor(event.target.value);
  };

  console.log(symbolIdList);

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
    getData();
  }, []);

  return (
    <>
      <main>
        {/* <div className="md:flex md:flex-no-wrap"> */}
        {/* <div className="flex z-0 outline-0 relative mt-20"> */}
        {/* <div>
            <SearchBar />
            </div> */}

        {/* <div className='AutoCompleteText'>
              <AutoCompleteText items={countries} />
              <AutoCompleteText items={['Adam', 'Peter', 'Sarah']} />
            </div>

            <div className='mt-6'>
              <Search />
            </div> */}

        {/* <div>
              <AutoCompleteHook suggestions={countries} />
            </div> */}

        {/* <div className="color-picker">
              <div className="color-picker-label">change color:</div>
              <input type="color" value={color} onChange={onChange} />
            </div>
            <div className="icons-container" style={{ color }}>
              {symbolIdList.map((icon) => (
                <div key={icon} className="icon-item">
                  <BaseIcon name={icon} />
                  <div>{`<BaseIcon name="${icon}" />`}</div>
                </div>
              ))}
            </div> */}
        <div className="flex items-center justify-center min-h-screen2">
          <div className="w-full max-w-2xl2 px-0 pt-8 bg-white">
            <div className="flex mx-auto pt-2">
              <div class="hidden sm:block w-2/6 bg-gray-100">
                
                <div class="mt-7">
                 
                  <div class="flex items-center space-x-4 cursor-pointer hover:bg-gray-200 px-3 py-3">
                    <img
                      src="https://images.unsplash.com/photo-1521676129211-b7a9e7592e65?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      alt="My profile"
                      class="w-10 h-10 rounded-full"
                    />
                    <div class="flex flex-1 flex-col leading-tight">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-semibold text-gray-600">
                          Branda Frost
                        </span>
                        <span class="text-xs text-gray-400">10:34 PM</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-600">
                          Nice to meet you!
                        </span>
                        
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4 cursor-pointer hover:bg-gray-200 px-3 py-3">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                      alt="My profile"
                      class="w-10 h-10 rounded-full"
                    />
                    <div class="flex flex-1 flex-col leading-tight">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-semibold text-gray-600">
                          Paul Irish
                        </span>
                        <span class="text-xs text-gray-400">10:34 PM</span>
                      </div>
                      <div class="flex items-center justify-between">
                        <span class="text-sm text-gray-600">
                          That's Great, then star working from tomorrow
                        </span>
                        
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col">
                <div class="flex flex-col sm:flex-row items-center justify-between py-3 border-b-2 border-gray-200">
                  <div class="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                      alt=""
                      class="w-8 md:w-10 h-8 md:h-10 rounded-full"
                    />
                    <div class="flex flex-col leading-tight">
                      <div class="text-lg mt-1 flex items-center">
                        <span class="text-gray-700 mr-3 font-semibold"> mrtravlerrr_</span>  
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                  <div class="chat-message">
                    <div class="flex items-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Can be verified on any platform using docker
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end justify-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            Your error message says permission denied, npm
                            global installs must be given root privileges.
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            Command was run with root privileges. I'm sure about
                            that.
                          </span>
                        </div>
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            I've update the description so it's more obviously
                            now
                          </span>
                        </div>
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            FYI https://askubuntu.com/a/700266/510172
                          </span>
                        </div>
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Check the line above (it ends with a # so, I'm
                            running it as root )
                            <pre># npm install -g @vue/devtools</pre>
                          </span>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end justify-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            Any updates on this issue? I'm getting the same
                            error when trying to install devtools. Thanks
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            Thanks for your message David. I thought I'm alone
                            with this issue. Please, 👍 the issue to support it
                            :)
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end justify-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block bg-blue-600 text-white">
                            Are you using sudo?
                          </span>
                        </div>
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            Run this command sudo chown -R `whoami`
                            /Users/your_user_profile/.npm-global/ then install
                            the package globally without using sudo
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            It seems like you are from Mac OS world. There is no
                            /Users/ folder on linux 😄
                          </span>
                        </div>
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            I have no issue with any other packages installed
                            with root permission globally.
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end justify-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-1 items-end">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                            yes, I have a mac. I never had issues with root
                            permission as well, but this helped me to solve the
                            problem
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div class="chat-message">
                    <div class="flex items-end">
                      <div class="flex flex-col space-y-2 text-xs md:text-sm max-w-xs mx-0 order-2 items-start">
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            I get the same error on Arch Linux (also with sudo)
                          </span>
                        </div>
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                            I also have this issue, Here is what I was doing
                            until now: #1076
                          </span>
                        </div>
                        <div>
                          <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            even i am facing
                          </span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
              </div>

              

              {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                
                <div className="relative mx-auto w-full">
                  <a
                    href="#"
                    className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                  >
                    <div className="">
                      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                          <div className="absolute inset-0 bg-[#2f5e83] px-4 ">
                            <div className="grid grid-cols-2 gap-4 place-content-center h-48">
                              <Sparklines
                                data={[5, 10, 5, 20, 8, 15]}
                                type="line"
                                width={80}
                                height={40}  
                              >
                                <SparklinesLine style={{ stroke: "#ffffff", fill: "#000000", strokeWidth: "2" }} />
                                <SparklinesSpots />
                              </Sparklines>
                              <div className="flex-col  text-white ">
                                <div className="flex flex-row-reverse text-2xl font-bold">Rp10.450</div>
                                <div className="flex flex-row-reverse text-base font-semibold w-full text-left">Per kg</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute flex justify-center bottom-0 mb-5">
                          <div className="flex inline-flex space-x-2 mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none shadow">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <span>0.48% - Rp50</span>
                          </div>
                        </div>

                        <div className="flex absolute w-full top-0 left-0 inline-flex px-3 py-2 z-10 bg-[#2c3e50] text-sm font-medium text-white select-none">
                        <h2
                          className="font-medium text-sm md:text-sm"
                          title="New York"
                        >
                          Beras Kualitas Bawah II
                        </h2>
                        </div>
                      </div>

                    </div>
                  </a>
                </div>

                <div className="relative mx-auto w-full">
                  <a
                    href="#"
                    className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                  >
                    <div className="">
                      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                          <div className="absolute inset-0 bg-[#2f5e83] px-4 ">
                            <div className="grid grid-cols-2 gap-4 place-content-center h-48">
                              <Sparklines
                                data={[0,0,50,100,0,-50,50,-50]}
                                type="line"
                                width={80}
                                height={40}  
                              >
                                <SparklinesLine style={{ stroke: "#ffffff", fill: "#000000", strokeWidth: "2" }} />
                                <SparklinesSpots />
                              </Sparklines>
                              <div className="flex flex-col text-white">
                                <div className="flex flex-row-reverse text-2xl font-bold">Rp29.400</div>
                                <div className="flex flex-row-reverse text-base font-semibold w-full">Per kg</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute flex justify-center bottom-0 mb-5">
                          <div className="flex inline-flex space-x-2 mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none shadow">
                          <button>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
</svg>
                          </button>
                          <span>0.17% - Rp50</span>
                          </div>
                        </div>

                        <div className="flex absolute w-full top-0 left-0 inline-flex px-3 py-2 z-10 bg-[#2c3e50] text-sm font-medium text-white select-none">
                        <h2
                          className="font-medium text-sm md:text-sm"
                          title="New York"
                        >
                          Telur Ayam Ras Segar
                        </h2>
                        </div>
                      </div>

                    </div>
                  </a>
                </div>

                <div className="relative mx-auto w-full">
                  <a
                    href="#"
                    className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                  >
                    <div className="">
                      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                          <div className="absolute inset-0 bg-[#2f5e83] px-4 ">
                            <div className="grid grid-cols-2 gap-4 place-content-center h-48">
                              <Sparklines
                                data={[5, 10, 5, 20, 8, 15]}
                                type="line"
                                width={80}
                                height={40}  
                              >
                                <SparklinesLine style={{ stroke: "#ffffff", fill: "#000000", strokeWidth: "2" }} />
                                <SparklinesSpots />
                              </Sparklines>
                              <div className="flex-col  text-white ">
                                <div className="flex flex-row-reverse text-2xl font-bold">Rp10.450</div>
                                <div className="flex flex-row-reverse text-base font-semibold w-full text-left">Per kg</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute flex justify-center bottom-0 mb-5">
                          <div className="flex inline-flex space-x-2 mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none shadow">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <span>0.48% - Rp50</span>
                          </div>
                        </div>

                        <div className="flex absolute w-full top-0 left-0 inline-flex px-3 py-2 z-10 bg-[#2c3e50] text-sm font-medium text-white select-none">
                        <h2
                          className="font-medium text-sm md:text-sm"
                          title="New York"
                        >
                          Beras Kualitas Bawah II
                        </h2>
                        </div>
                      </div>

                    </div>
                  </a>
                </div>

                <div className="relative mx-auto w-full">
                  <a
                    href="#"
                    className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full"
                  >
                    <div className="">
                      <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                        <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                          <div className="absolute inset-0 bg-[#2f5e83] px-4 ">
                            <div className="grid grid-cols-2 gap-4 place-content-center h-48">
                              <Sparklines
                                data={[0,0,50,100,0,-50,50,-50]}
                                type="line"
                                width={80}
                                height={40}  
                              >
                                <SparklinesLine style={{ stroke: "#ffffff", fill: "#000000", strokeWidth: "2" }} />
                                <SparklinesSpots />
                              </Sparklines>
                              <div className="flex flex-col text-white">
                                <div className="flex flex-row-reverse text-2xl font-bold">Rp29.400</div>
                                <div className="flex flex-row-reverse text-base font-semibold w-full">Per kg</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="absolute flex justify-center bottom-0 mb-5">
                          <div className="flex inline-flex space-x-2 mt-3 ml-3 px-3 py-1 rounded-lg z-10 bg-green-500 text-sm font-medium text-white select-none shadow">
                          <button>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
</svg>
                          </button>
                          <span>0.17% - Rp50</span>
                          </div>
                        </div>

                        <div className="flex absolute w-full top-0 left-0 inline-flex px-3 py-2 z-10 bg-[#2c3e50] text-sm font-medium text-white select-none">
                        <h2
                          className="font-medium text-sm md:text-sm"
                          title="New York"
                        >
                          Telur Ayam Ras Segar
                        </h2>
                        </div>
                      </div>

                    </div>
                  </a>
                </div>

              </div> */}
            </div>
            <div className="sticky absolute bg-gray-100 border-t shadow w-full bottom-0">
          <div class="max-w-2xl mx-auto">
            <form>
              <label for="chat" class="sr-only">
                Your message
              </label>
              <div class="flex items-center py-2 px-3 bg-gray-50 ">
                <button
                  type="button"
                  class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-6 h-6"
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
                  class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-6 h-6"
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
                  class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
                <button
                  type="submit"
                  class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    class="w-6 h-6 rotate-90"
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
        {/* </div>
        </div> */}
      </main>
    </>
  );
});

export default Coba;
