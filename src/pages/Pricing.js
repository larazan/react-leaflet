import React from "react";

import Footer from "../components/Footer";
import Faq from "../components/Faq";

const Pricing = () => {
  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap2">
          <div className="w-full h-full flex flex-col z-0 outline-0 relative2">
            <div className="w-full h-full md:h-screen bg-cyan-300 px-5 py-10 md:py-20 text-gray-600 mt-10 mb-0">
              <div className="text-center max-w-xl mx-auto">
                <h1 className="text-3xl md:text-6xl font-bold mb-5">Pricing</h1>
                <h3 className="text-lg md:text-xl font-medium mb-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  repellat dignissimos laboriosam odit accusamus porro
                </h3>
              </div>
              <div className="max-w-4xl mx-auto md:flex">
                <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">
                      free
                    </h2>
                    <h3 className="text-center font-bold text-4xl mb-5">
                      Rp. 0
                    </h3>
                    <ul className="text-sm px-5 mb-8">
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 6 posting
                      </li>
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 1 gambar
                        tiap posting
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                      Berlangganan
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
                  <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">
                      bulanan
                    </h2>

                    <h3 className="text-center font-semibold mb-5">
                      <span className="text-4xl font-bold">Rp. 15rb</span>
                      <span className="text-xl">/bln</span>
                    </h3>

                    <ul className="text-sm px-5 mb-8">
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 25
                        posting
                      </li>
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 3 gambar
                        per posting
                      </li>
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 150
                        kredit iklan
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                    Berlangganan
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                  <div className="w-full flex-grow">
                    <h2 className="text-center font-bold uppercase mb-4">
                      tahunan
                    </h2>
                    <h3 className="text-center font-semibold mb-5">
                      <span className="text-4xl font-bold">Rp. 150rb</span>
                      <span className="text-xl">/thn</span>
                    </h3>
                    <ul className="text-sm px-5 mb-8">
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 300
                        posting
                      </li>
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 8 gambar
                        per posting
                      </li>
                      <li className="leading-tight capitalize font-semibold">
                        <i className="mdi mdi-check-bold text-lg"></i> 1500
                        kredit iklan
                      </li>
                    </ul>
                  </div>
                  <div className="w-full">
                    <button className="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">
                    Berlangganan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Faq />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Pricing;
