import React from 'react'

import AutoCompleteText from '../components/AutoCompleteText'
import AutoCompleteHook from '../components/AutoCompleteHook'
import SearchBar from '../components/SearchBar'
import Search from '../components/Search'

import countries from '../assets/data/countries'

const Coba = () => {
  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className="flex z-0 outline-0 relative mt-20">

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

            <div>
              <AutoCompleteHook suggestions={countries} />
            </div>


          </div>
        </div>
      </main>
    </>
    
  )
}

export default Coba