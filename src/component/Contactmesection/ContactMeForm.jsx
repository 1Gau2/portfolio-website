
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactMeForm = () => {
 const[name,setName]=useState("");
 const[email,setEmail]=useState("");
 const[message,setMessage]=useState("");
 const[success,setSuccess]=useState("");

 const handleName=(e)=>{
  setName(e.target.value)
 };

const handleEmail=(e)=>{
   setEmail(e.target.value) 
 };
 
 const handleMessage=(e)=>{
    setMessage(e.target.value)
 };

 
 

















     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ylx3cwc', 'template_rq449p8', form.current, {
        publicKey: 'dFxoDiKRJYVLMr7iC',
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent !");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
    <p className='text-cyan'>{success}</p>
    <form className='flex flex-col gap-4' ref={form} onSubmit={sendEmail}>
        <input 
        name="from_name"
        type='text'
         placeholder='Your Name'
        required
        className='h-12 rounded-lg bg-light-brown px-2  text-white'
        value={name}
        onChange={handleName}
        />

        <input
        name="from_email"
         type='email'
         placeholder='Your Email'
         required
         className='h-12 rounded-lg bg-light-brown px-2  text-white'
         value={email}
         onChange={handleEmail}
        />

        <textarea 
        name="message"
         type='text'
        placeholder='Message '
        rows="9"
        cols="50"
        required 
        className=' w-full rounded-lg bg-light-brown p-2  text-white'
        value={message}
        onChange={handleMessage}
             />

        <button type='text' className='rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-dark-cyan bg-cyan transition-all duration-500'>Send</button>
    </form>
    </div>
  )
}

export default ContactMeForm