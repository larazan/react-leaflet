import React from 'react'

import Nav from '../components/Nav'

const Cabinet = () => {
  return (
    <>
      <main>
        <div className="md:flex md:flex-no-wrap">
          <div className='flex z-0 outline-0 relative mt-20'>
            <Nav />
          </div>
        </div>
      </main>
    </>
  )
}

export default Cabinet