import React, { useState } from 'react'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text-justify">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide  font-semibold cursor-pointer">
          {isReadMore ? (<span className=''>... <br /><span className='text-blue-400'>read more</span></span>) : (<span className=''><br /><span className='text-blue-400'>show less</span></span>)}
        </span>
      </p>
    );
}

export default ReadMore;