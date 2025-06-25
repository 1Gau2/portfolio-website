import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import SingleSkill from './SingleSkill';
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'

const skills=[
    {skill:'HTML', icon:FaHtml5 },
    {skill:'CSS', icon:FaCss3},
    {skill:'JavaScript', icon:TbBrandJavascript},
    {skill:'ReactJs', icon:RiReactjsFill},
    {skill:'TailwindCSS', icon:RiTailwindCssFill }
]
const AllSkills = () => {
  return (
    <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
        {
            skills.map((item,indx)=>(
              <motion.div
                 variants={FadeIn("up",`0.${indx}`)}
                  initial="hidden"
                  whileInView="show"
                   viewport={{once:false,amount:0}}
              >  
                 <SingleSkill key={indx} text={item.skill} imgSvg={<item.icon className="w-10 h-10 text-cyan-500"/>}/>
                 </motion.div>
             
            ))
        }
    </div>
  )
}

export default AllSkills