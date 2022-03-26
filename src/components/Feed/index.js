import React from 'react'
// import { SparklesIcon } from "@heroicons/react/outline";

import Trending from '../Trending';

const Feed = () => {
  return (
    <>
    <div className="flex flex-col xl:w-2/4 sm:w-3/6 sm:ml-40 h-screen">
      <div className="border px-0 z-50 bg-white mt-16">
        <Trending />
      </div>
      
      </div>
    </>
  )
}

export default Feed