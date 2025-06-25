import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FaGithub } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4 '>
        <SingleContactSocial link='#' Icon={ FaGithub}/>
        <SingleContactSocial link='#' Icon={RiVercelLine}/>
        <SingleContactSocial link='#' Icon={ FaInstagram}/>
    </div>
  )
}

export default ContactSocial