import React from 'react'

const Aboutmetext = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
       <p className='text-white '>
  My name is Gaurav, and I’m a passionate frontend developer with a strong focus on crafting seamless and responsive user experiences.<br />
  I specialize in building modern web interfaces using cutting-edge technologies like React, Tailwind CSS, and JavaScript.<br />
  With a deep understanding of design systems and UI/UX principles, I create applications that are both visually appealing and highly functional.<br />
  I continuously strive to write clean, scalable, and maintainable code that brings ideas to life.<br />
  Driven by curiosity and growth, I stay updated with the latest trends in frontend development and web performance.<br />
  My mission is to build intuitive digital products that make a meaningful impact on users.
</p>

        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button>
    </div>
  )
}

export default Aboutmetext