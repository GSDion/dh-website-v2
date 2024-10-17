import './Contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef(); // Reference to the form element

  const sendEmail = (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    emailjs
      .sendForm(
        'service_t0i6qb9', // Replace with your EmailJS Service ID
        'contact_form',    // Replace with your EmailJS Template ID
        form.current,
        '3hzWCccxEfEswFzVo'  // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Message failed to send.');
        }
      );
  };

    return (
      <div className = 'Contact'>
      
        <div className='Contact_title'>
            <h1>Contact</h1>
        </div>

        <p className='Contact_email'>Email: humphreydion@yahoo.com</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='Contact_form_container'>

          <div className='Contact_form_container_left'>
            <label for="name">Full Name</label>
            <input type="text" id="name" name="fullname" placeholder="*Your name..." required ></input>

            <label for="phone_number">Phone Number</label>
            <input type="text" id="phone_number" name="phone_number" placeholder="Your Phone number..."></input>

            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="*Your email..." required ></input>
          </div>


          <div className='Contact_form_container_right'>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="*Write something..." required></textarea>
          </div>

          <input type="submit" value="Submit"></input>
          </div>
        </form>
                  
      

      </div>
    );
} 
  
  export default Contact;
