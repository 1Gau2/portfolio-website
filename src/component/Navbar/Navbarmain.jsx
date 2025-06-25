import React, { useState } from 'react'
import Navbarbtn from './Navbarbtn'
import Navbarlinks from './Navbarlinks'
import Navbarlogo from './Navbarlogo'
import { GiHamburgerMenu } from "react-icons/gi";



const Navbarmain = () => {

 const[menuopen,setMenuopen]=useState(false)

 const togglemenuopen=()=>(
  setMenuopen(!menuopen)
)

  return (
    <nav className='max-w-[1300px] mx-auto px-4  w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2'>
        <div className='flex justify-between w-full max-w-[1200] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
         <Navbarlogo/> 
         <div className={`${menuopen ? "sm:block" : "sm:hidden"} lg:block`}>  
           <Navbarlinks/>
           
           </div>
     
        <Navbarbtn/>
        </div>
        <div className='flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange'>
          <button className='text-2xl p-3 border border-orange rounded-full text-white' onClick={togglemenuopen}>
             <GiHamburgerMenu />
          </button>
        
        </div>
    </nav>
  )
}

export default Navbarmain