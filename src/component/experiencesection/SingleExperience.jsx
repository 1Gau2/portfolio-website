import React from 'react'
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'


const SingleExperience = ({experiences}) => {
  return (
    <motion.div 
     variants={FadeIn("right",0.2)}
     initial="hidden"
     whileInView="show"
     viewport={{once:false,amount:0}}
    className='md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
      <p className='font-bold text-cyan'>{experiences.job}</p>
      <p className='text-orange'>{experiences.company}</p>
      <p className='text-light-grey'>{experiences.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white'>{experiences.responsibilities.map((resp,indx)=>(
        <li key={indx}>{resp}</li>
      ))}</ul>
    </motion.div>
  )
}

export default SingleExperience