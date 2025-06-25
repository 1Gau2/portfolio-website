import React from 'react'
import Skillstext from './Skillstext'
import AllSkills from './AllSkills'
import AllSkillsSM from './AllSkillsSM'
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'

const MainSkill = () => {
  return (
    <div id='skills'>
      <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden '>
        <motion.div
           variants={FadeIn("down",0.2)}
           initial="hidden"
           whileInView="show"
          viewport={{once:false,amount:0}}> 
           <Skillstext/>
           </motion.div>
      
      
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
          <AllSkills/>
        </div>
        <div className='sm:block lg:hidden '>
          <AllSkillsSM/>
        </div>
        
    </div>

    </div>
  )
}

export default MainSkill