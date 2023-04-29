import React from 'react'
import '../components/Contact.css'

const Contact = () => {
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
            <form>
              <h2>Send Message</h2>
              <div className='inputBox'>
                <input type='text' name='' required></input>
                <span>Full Name</span>
              </div>
              <div className='inputBox'>
                <input type='text' name='' required></input>
                <span>Email</span>
              </div>
              <div className='inputBox'>
                <textarea required></textarea>
                <span>Type your Message...</span>
              </div>
              <div className='inputBox'>
                <input type='' name='' defaultValue="Send"></input>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
};

export default Contact
