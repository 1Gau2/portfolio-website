import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopRight from './ExperienceTopRight'
import ExperienceMiddle from './ExperienceMiddle'

const ExperienceTop = () => {
  return (
    <div className='flex lg:flex-row sm:flex-col gap-4 items-center justify-center'>
        <ExperienceTopLeft/>
        <ExperienceMiddle/>
        <ExperienceTopRight/>
    </div>
  )
}

export default ExperienceTop