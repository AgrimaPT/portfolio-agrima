import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_73qagjp', 'template_p82tvzk', form.current, 'PdImpHCS3e2Fsn9H4')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>agrimapt1999@gmail.com</h5>
            <a href="mailto:agrimapt1999@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9745074043</h5>
            <a href="https://api.whatsapp.com/send?phone=919745074043" target="_blank">Send a message</a>
          </article>     
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='your full name' required/>
          <input type='email' name='email' placeholder='your email' required/>
          <textarea name='message' rows='7' placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
