import React from 'react'
import News from '../components/News'
import Region from '../components/Region'
import Key from '../components/Key'
import MapCanvas from '../components/MapCanvas'
import Tabs from '../components/Tabs'

const Home = () => {
  return (
    <>
      <main>
        <div className="px-8 z-9 md:container2 md:mx-auto md:px-8">
          <div className="md:flex md:flex-no-wrap md:-mx-6">
            <div className="flex z-0 w-3/5">
                <Tabs />
            </div>
            <div className="w-2/5">
                <News />
                {/* <Region /> */}
                {/* <Key /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home