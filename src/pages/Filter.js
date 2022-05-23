import React from 'react'

import SearchFilter from '../components/SearchFilter'
import IconsContainer from '../components/IconsContainer'

const Filter = () => {
  return (
    <>
    <main>
        <div className="md:flex md:flex-no-wrap">
          <div className="flex z-0 outline-0 relative mt-20">

            <div>
                <SearchFilter />
                <div className="px-4 sm:px-6 lg:px-16">
                <IconsContainer />
                </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Filter