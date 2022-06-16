import React from 'react'
import { Link } from 'react-router-dom'

import cities from '../../assets/data/kota.json'

const RegionalOption = ({ regOpen, regToggle }) => {
  return (
    <>
            <aside
                className={`px-0 transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
                    regOpen ? "translate-y-0" : "translate-y-full"
                }`}
            >
                <header className="z-10 sticky top-0 px-5 py-3 flex items-center justify-between bg-white border-b">
                    <div className="flex inline-flex space-x-4">
                        <button className="h-8 w-8 md:hidden" onClick={regToggle}>
                            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                    </div>
                    <div className="flex">
                        <span className='text-lg font-bold'>
                            Pilih Daerah
                        </span>
                    </div>
                    
                </header>
                <div>
                    <div className="flex-none">
                        <div className="">
                            <div className="text-center">
                                {
                                    cities.map((city, id) => (
                                        <Link to={'/'} className="block text-sm font-semibold text-gray-800 uppercase whitespace-nowrap px-8 py-4 border-b hover:bg-gray-100" key={id}>
                                            {city.city}
                                        </Link>
                                    ))
                                }
                            
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
  )
}

export default RegionalOption