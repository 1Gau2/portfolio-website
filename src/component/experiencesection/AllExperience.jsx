import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'


const experiences=[
  {job:"Front-end Developer",
   company: "",
   date:"2025-Present",
   responsibilities:[
    "Implementing Reusable components.",
    "participating large scale applications",
    "Working on the performance of web applications. ",
    "Genrating new ideas for better user experiences ",
   ],
  },
 
  {
    job:"Learner",
    company:"Bootcamps",
    date:2024,
    responsibilities:[
      "Actively learning modern frontend technologies like HTML,CSS,JavaScript,React.",
      " Built small projects and UI components based on course challenges.",
      "Explored best practices in responsive design and component-based architecture."
    ],

  },
  {
    job:"Community Learning",
    company:"Self Learning + Peer Learning",
    date:2025,
    responsibilities:[
      "Focused on strengthening frontend skills using React and TailwindCSS.",
       "Practicing building responsive, real-world UIs through personal projects.",
        "Engaging in Online coding communities and Contributing." 
      


    ],
  }
]


const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience,indx)=>{
        return(
        <>
        <SingleExperience key={indx} experiences={experience}/>
        {indx < 2?(
          <motion.div
          variants={FadeIn("right",0.2)}
          initial="hidden"
           whileInView="show"
           viewport={{once:false,amount:0}}>
            <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
          </motion.div>
        
        ):""}
      </>
        )
        })}
    </div>
  )
}

export default AllExperience