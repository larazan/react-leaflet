import React from "react";

const Empat04 = () => {
  return (
    <>
      <main>
        <div className="flex h-screen items-center justify-center bg-[#f5f5f5]">
          <div className="w-full max-w-3xl px-0 md:px-10 py-1 md:py-8 ">
            <div className="mx-auto px-3 ">
              <div className="container flex flex-col items-center px-6 mx-auto">
                <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
                  404
                </h1>
                <p className="mt-5 text-gray-700 dark:text-gray-300">
                  Page not found. Check the address or{" "}
                  <a
                    className="text-purple-600 hover:underline dark:text-purple-300"
                    href="../index.html"
                  >
                    go back
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Empat04;
