import React, { memo, useState, useEffect } from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
} from "react-sparklines";
import axios from "axios";

import symbolIdList from "../icon";

const Coba = memo(() => {
  const [info, setInfo] = useState({});
  const [color, setColor] = useState("#46bd87");
  const onChange = (event) => {
    setColor(event.target.value);
  };

  console.log(symbolIdList);

  const url = `https://hargapangan.id/index.php?option=com_gtpihps&task=json.commodityPrices&province_id=0&price_type_id=1&_=1659174441179`

  const getData = async () => {
		const response = await axios.get(url).catch((err) => {
      console.log("Error: ", err);
    });

    if (response) {
      console.log("Response: ", response.data);
    }
  }

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
          <div className="w-full max-w-2xl2 px-10 py-8 bg-white">
            <div className="mx-auto pt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
                
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
