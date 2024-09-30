import React from 'react'

function Contact() {
  return (
    <div id='contact-section'>
        <div className="contact-rows">
        <div className="cont-row right">
                <div className="contact-img">
                <img src="contactimg.jpg" alt="" id='contact-img'/>
                </div>
                
            </div>
            <div className="cont-row left"> <h2 className='section-heading-text smaller'><span className='prim-color'>I'm</span> Only A <br/><span className='prim-color'>Click </span>Away!</h2>
            <p className='dark-body-text contact-body'>Reach out either through traditional phone call/ email, or find me on the following social media platforms.</p>
            <div className="icons">
              
              <a href="https://www.linkedin.com/in/slivengood01/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl"></i></a>
              <a href="https://www.instagram.com/boooks.and.sunlight/" target="_blank"><i className="fa-brands fa-square-instagram fa-2xl"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61559910358447" target="_blank"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
           
            </div>
            <hr id='contact-divider'/>
            <div className="bottom-left">
              <div className="phone">
              <i className="fa-solid fa-phone fa-lg"></i>
                <a href="tel:4632468451"><p>(463)246-8451</p></a>
              </div>
              <div className="email">
              <i className="fa-solid fa-envelope fa-lg"></i>
              <a href="mailto:sreneelive@gmail.com"><p>sreneelive@gmail.com</p></a>
              </div>
            </div>
            
            </div>

           
        </div>
     
    </div>
  )
}

export default Contact
