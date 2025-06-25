import React from 'react'
import Aboutmetext from './Aboutmetext'
import Aboutmeimg from './Aboutmeimg'
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'

const Aboutmemain = () => {
  return (
    <div id='about' className='flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'>
        <motion.div
         variants={FadeIn("right",0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{once:false,amount:0.7}}> 
            <Aboutmetext/>
        </motion.div>
       
        <motion.div
         variants={FadeIn("left",0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{once:false,amount:0.7}}>
            <Aboutmeimg/>
            </motion.div>
    </div>
  )
}

export default Aboutmemain