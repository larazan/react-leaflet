import React, { memo, useState } from 'react'

import symbolIdList from '../icon'

import AutoCompleteText from '../components/AutoCompleteText'
import AutoCompleteHook from '../components/AutoCompleteHook'
import SearchBar from '../components/SearchBar'
import Search from '../components/Search'
import RenderSvg from '../components/RenderSvg'
import SearchFilter from '../components/SearchFilter'
import IconsContainer from '../components/IconsContainer'

import countries from '../assets/data/countries'

const BaseIcon = memo((props) => {
  const { className = '', name } = props;
  return (
    <svg className={`icon-wrapper ${className}`} aria-hidden="true">
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
});

const Coba = memo(() => {
  const [color, setColor] = useState('#46bd87');
  const onChange = (event) => {
    setColor(event.target.value);
  };

  console.log(symbolIdList);

  return (
    <>
      <main>
        {/* <div className="md:flex md:flex-no-wrap"> */}
          {/* <div className="flex z-0 outline-0 relative mt-20"> */}
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

            {/* <div>
              <AutoCompleteHook suggestions={countries} />
            </div> */}

            {/* <div className="color-picker">
              <div className="color-picker-label">change color:</div>
              <input type="color" value={color} onChange={onChange} />
            </div>
            <div className="icons-container" style={{ color }}>
              {symbolIdList.map((icon) => (
                <div key={icon} className="icon-item">
                  <BaseIcon name={icon} />
                  <div>{`<BaseIcon name="${icon}" />`}</div>
                </div>
              ))}
            </div> */}
            <div class='flex items-center justify-center min-h-screen2'>
                <div class='w-full max-w-2xl px-10  py-8  bg-white'>
                    <div class='mx-auto pt-10'>
                        
                      <SearchFilter />
                      <IconsContainer />

                    </div>
                </div>
            </div>
          {/* </div>
        </div> */}
      </main>
    </>
  );
})

export default Coba