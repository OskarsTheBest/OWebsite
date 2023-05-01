import { useRef } from 'react'
import React from 'react'
import '../components/Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_djjwwtm', 'template_b8a46lz', form.current, 'MF0xyZfVDkZVEeSfM')
      .then((result) => {
          console.log(result.text);
          console.log("message sent!")
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
            <section className='contact'>
        <div className='content'>
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className='container'>
          <div className='contactInfo'>
            <div className='box'>
              <div className='icon'><i className="fa-sharp fa-solid fa-map"></i></div>
              <div className='text'>
                <h3>Address</h3>
                <p>1337 Cool Road, <br /> Germany,Example <br /> 55030</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><i className="fa-solid fa-phone-volume"></i></div>
              <div className='text'>
                <h3>Phone</h3>
                <p>123-456-789</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon'><i className="fa-solid fa-envelope-open"></i></div>
              <div className='text'>
                <h3>Email</h3>
                <p>oskarsbest@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='contactForm'>
            <form ref={form} onSubmit={sendEmail}>
              <h2>Send Message</h2>
              <div className='inputBox'>
              <input type="text" name="user_name"/>
              <span>Name</span>
              </div>
              <div className='inputBox'>
              <input type="email" name="user_email"/>
              <span>Email</span>
              </div>
              <div className='inputBox'>
              <textarea name="message"/>
              <span>Message</span>
              </div>
              <input className='btn' type="submit" value="Send"/>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
};

export default Contact
