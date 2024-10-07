import './Contact.css';

function Contact() {
    return (
      <div className = 'Contact'>
      
        <div className='Contact_title'>
            <h1>Contact</h1>
        </div>

        <p className='Contact_email'>Email: humphreydion@yahoo.com</p>

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

      </div>
    );
} 
  
  export default Contact;
