import React from 'react'
const links=[
    {link:"About", session:"about"},
    {link:"Skills", session:"skills"},
    {link:"Experience ", session:"experience"},
    {link:"Projects", session:"projects"},
    {link:"Contact", session:"contact"},
]

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[1px] bg-light-grey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
            <p className='text-3xl text-light-grey'>Gaurav Chaudhari</p>
            <ul className='flex gap-4 text-light-grey text-xl'>
                {links.map((item,indx)=>(
                    <li key={indx}><a href='#' className='hover:text-white transition-all duration-500 cursor-pointer'>{item.link}</a></li>
                ))}
            </ul>
        </div>
        <p className='max-w-[1200px] mx-auto  text-right mt-2  mb-12 text-sm text-light-brown'>© 2025 Gaurav Chaudhari | All Rights Reserved.</p>
    </div>
  )
}

export default FooterMain