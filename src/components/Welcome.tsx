import React, { forwardRef } from 'react'
import { useRef } from 'react'


function Welcome() {

  
  return (
    
    <div id="welcome-section">
    <div className="sides">
    <div id="welcome-text">
      <h1>Full Stack <br/>Developer</h1>
      <p className='dark-body-text welcome-msg'>My name is Stephanie and I am so glad you’ve made it to my portfolio. As a quick introduction, I started college in 2019 studying informatics with a concentration in human-computer interaction, and have obtained numerous certificates along the way. Please check out the pages of this site to see my projects and learn more about my process.</p>
      <a href="#project-container" className='cta'><div className="button border-pop proj"></div></a>
      </div>
      <div className="headerimg"></div>
      </div>
      <div id="infobar">
        <div id="info" style={{marginLeft: 0}}><p className='heading'>Graduated in</p><h3 className='info-large-text'>2024</h3></div>
        <div id="info"><p className='heading'>Years Coding</p><h3 className='info-large-text'>5</h3></div>
        <div id="info"><p className='heading'>Work experience</p><h3 className='info-large-text'>2</h3></div>
        <div id="info"><p className='heading'>Github Repos</p><h3 className='info-large-text'>40+</h3></div>
      </div>
    </div>
   
    
  )
}

export default Welcome
