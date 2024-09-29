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
            <p className='dark-body-text contact-body'>Reach out either through traditional phone call/ email, or find me on the following social media platforms.</p></div>
           
        </div>
     
    </div>
  )
}

export default Contact
