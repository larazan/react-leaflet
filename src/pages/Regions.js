import React from 'react'
import Region from '../components/Region'
import MapCanvas from '../components/MapCanvas'

const Regions = () => {
  return (
    <>
    <main>
        <div className="px-8 z-9 md:container2 md:mx-auto md:px-8">
          <div className="md:flex md:flex-no-wrap md:-mx-6">
            <div className="flex z-0 w-3/5">
                <MapCanvas />
            </div>
            <div className="w-2/5">
                <Region />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Regions