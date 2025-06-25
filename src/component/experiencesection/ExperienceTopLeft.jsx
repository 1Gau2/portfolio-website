import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange text-3xl font-bold uppercase font-special text-center'>Since 2025</p>
        <div className='flex justify-center items-center gap-4 '>
            <ExperienceInfo number="3" text="Months"/>
            <p className='font-bold text-6xl text-light-brown'>-</p>
            <ExperienceInfo number="2" text="WebSites"/>
        </div>
        <p className='text-center text-white '>With 3 months of experience building dynamic and user-friendly web applications.</p>
        <ExperienceInfo number="$100k" text="Max Budget"/>
    </div>
  )
}

export default ExperienceTopLeft