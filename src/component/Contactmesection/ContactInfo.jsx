import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';

 const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'> 
 <SingleInfo text="gauravchaudhari2330@gmail.com" Image={HiOutlineMail}/>
 <SingleInfo text="+918788964913" Image={LuPhone}/>
 <SingleInfo text="Jalgaon, India" Image={CiLocationOn}/>
    </div>
  )
}
export default ContactInfo;
