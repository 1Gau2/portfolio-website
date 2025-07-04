import React from 'react'
import { FaSquareArrowUpRight } from "react-icons/fa6";
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'


const ProjectSingle = ({name,year,align,image,link}) => {
  return (
    <motion.div
     variants={FadeIn("up",0.2)}
    initial="hidden"
     whileInView="show"
    viewport={{once:false,amount:0}}
    
    className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align==="left"? "md:flex-row" : "md:flex-row-reverse"
    } justify-end`}>
        <div>
            <h2 className='md:text-3xl  sm:text-2xl text-orange'>{name}</h2>
            <h2 className={` text-xl font-thin text-white  font-special sm:text-center ${align==='left' ? "md:text-right":"md:text-left"}`}>{year}</h2>
            <a href={link} className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${align==="left"? "md:justify-end":"md:justify-start"}`}>
                View
            <FaSquareArrowUpRight />
            </a>
        </div>
        <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-100 transform transition-all duration-500 relative border border-white' >
            <div className='w-full h-full  bg-cyan-500 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
            <img src={image} alt="image"  className='w-full h-full'/>
        </div>
    </motion.div>
  )
}

export default ProjectSingle