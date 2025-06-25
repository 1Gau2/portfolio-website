import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import{motion} from "framer-motion"
import { FadeIn } from '../Aboutme/Framersection/framer'


const skills=[
    {skill:'HTML', icon:FaHtml5 },
    {skill:'CSS', icon:FaCss3},
    {skill:'JavaScript', icon:TbBrandJavascript},
    {skill:'ReactJs', icon:RiReactjsFill},
    {skill:'TailwindCSS', icon:RiTailwindCssFill }
]

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4  sm:grid-cols-2 gap-12 my-12'>
      {skills.map((item,indx)=>(

        <motion.div
         variants={FadeIn("up",0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{once:false,amount:0.7}}
        key={indx} className='flex flex-col items-center'>
          <item.icon className='text-7xl text-orange'/>
          <p className='text-center mt-4 text-white'>{item.skill}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default AllSkillsSM