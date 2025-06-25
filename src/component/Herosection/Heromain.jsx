import React from 'react'
import Herotext from "../Herosection/Herotext"
import Heropic from "../Herosection/Heropic"

const Heromain = () => {
  return (
    <div className='pt-40 pb-16  '>
        <div className='flex md:flex-row sm:flex-col max-w-[1200px] justify-between items-center relative px-4' >
       <Herotext/>
      <Heropic/>
      </div>

      
    </div>
  )
}

export default Heromain