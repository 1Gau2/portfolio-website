import React from 'react'
import ProjectText from './ProjectText'
import ProjectSingle from './ProjectSingle'
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'
const projects=[{
    name:"ChatGPT Clone",
    year:"Mar-2025",
    align:"right",
    image: `${import.meta.env.BASE_URL}images/chatgpt-clone.png`,
    link:"#"
},
{
    name:"Weather Widget",
    year:"Feb-2025",
    align:"left",
    image:"images/weather-widget.png",
    link:"#"
}



]

const ProjectMain = () => {
  return (
    <div id='projects' className="max-w-[1200px] mx-auto px-4">
      <motion.div 
         variants={FadeIn("up",0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{once:false,amount:0}}>
        <ProjectText/>
      </motion.div>
        
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12 '> 
            {
                projects.map((item,indx)=>(
                  <ProjectSingle key={indx} name={item.name} year={item.year} align={item.align} image={item.image} link={item.link}/>

                ) )
            }
              </div>
     
    </div>
  )
}

export default ProjectMain