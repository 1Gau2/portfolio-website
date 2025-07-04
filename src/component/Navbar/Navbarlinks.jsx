import React from 'react'
import{Link} from "react-scroll"
const links=[
    {link:"About", session:"about"},
    {link:"Skills", session:"skills"},
    {link:"Experience ", session:"experience"},
    {link:"Projects", session:"projects"},
    {link:"Contact", session:"contact"},
]
const Navbarlinks = () => {
  return (
    <ul className='flex text-center text-white gap-6 font-bold py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full'>
      {
        links.map((link,indx)=>(
        
          <li key={indx} className='group'>
            <Link 
            to={link.session}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
             className='cursor-pointer text-white hover:text-cyan transition-all duration-500'>
              {link.link}
            </Link>
            <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'>

            </div>
          </li>
        )

        )
      }
    </ul>
  )
}

export default Navbarlinks