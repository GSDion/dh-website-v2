import './Contact.css';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef(); // Reference to the form element
  const [contactNumber, setContactNumber] = useState(''); // State to manage contact number

   // Retrieve the last contact number from localStorage (or default to 0)
   useEffect(() => {
    const lastNumber = localStorage.getItem('lastContactNumber') || '0';
    setContactNumber(lastNumber);
  }, []);

  const generateSequentialNumber = () => {
    const newNumber = (parseInt(contactNumber) + 1).toString().padStart(5, '0'); // Pad with leading zeros
    setContactNumber(newNumber); // Update the state
    localStorage.setItem('lastContactNumber', newNumber); // Save to localStorage
    form.current.contact_number.value = newNumber; // Assign to hidden input field
  };

  const sendEmail = (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    generateSequentialNumber(); // Generate the new contact number

    emailjs
      .sendForm(
        'service_t0i6qb9', // EmailJS Service ID
        'contact_form',    // EmailJS Template ID
        form.current,
        '3hzWCccxEfEswFzVo'  // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Clear the form after submission
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
        <div className='card custom-contact-card'>
        <form ref={form} onSubmit={sendEmail}>
          
            <div className='form row'>
              <input type="hidden" name="contact_number" />
              <div className='form-group col-md-6 mb-3'>
                <label for="name">Full Name</label>
                <input type="text" id="name" className='form-control' name="fullname" placeholder="*Your name..." required ></input>
              </div>
              <div className='form-group col-md-6 mb-3'>
                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" className='form-control'  placeholder="*Write something..." required></textarea>
              </div>
            </div>

            <div className='form row'>
              <div className='form-group col-md-6 mb-3'>
                <label for="phone_number">Phone Number</label>
                <input type="text" id="phone_number" className='form-control' name="phone_number" placeholder="Your Phone number..."></input>
              </div>
              <div className='form-group col-md-6 mb-3'>
                <label for="email">Email</label>
                <input type="text" id="email" className='form-control' name="email" placeholder="*Your email..." required ></input>
            </div>
              
            <div className="form-group col-md-6">
                <input 
                  type="submit" 
                  value="Submit" 
                  className="btn custom-contact-btn d-block mx-auto" 
                />
              </div>
              
            </div>
          </form>
        </div>
      </div>
    );
} 
  
  export default Contact;
