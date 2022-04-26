import React from 'react'

import SearchBar from '../components/SearchBar'
import Search from '../components/Search'

const Coba = () => {
  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className="flex z-0 outline-0 relative mt-20">

            <div>
            <SearchBar />
            </div>
            

            <div className='mt-6'>
              <Search />
            </div>


          </div>
        </div>
      </main>
    </>
    
  )
}

export default Coba