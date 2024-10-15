import React, { useState } from 'react'

function Sidebar() {
    const [welcomeActive, setWelcomeActive] = useState(false);
    const [skillsActive, setSkillsActive] = useState(false);
    const [projectsActive, setProjectsActive] = useState(false);
    const [resumeActive, setResumeActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);

    let resetItems = () => {
        setWelcomeActive(false);
        setSkillsActive(false);
        setResumeActive(false);
        setProjectsActive(false);
        setContactActive(false);
        
    }
    
  return (
    <div className="sidebar">
        <div id="logo">
        <h3 className='logo-header'>Stephanie Livengood</h3>
        <p className='light-body-text'>Full Stack Developer</p>
        </div>

        <div id="menu">
          <ul id='menu-items'>
            <a href="#welcome-section"><li id='welcome-item' className={welcomeActive ? 'sidebar-item-active' : 'sidebar-item'} onClick={() => {
                
                resetItems();
                setWelcomeActive(true);
                
            }}><p className='light-body-text'>Welcome</p></li></a>
            <a href="#skills-section"><li id='skills-item' className={skillsActive ? 'sidebar-item-active' : 'sidebar-item'} onClick={() => {
                
                resetItems();
                setSkillsActive(true);
                
            }}><p className='light-body-text'>Skills</p></li></a>
            <a href="#project-section"><li id='projects-item' className={projectsActive ? 'sidebar-item-active' : 'sidebar-item'} onClick={() => {
                resetItems();
                setProjectsActive(true);
                
            }}><p className='light-body-text'>Projects</p></li></a>
            <a href="#resume-section"><li id='resume-item' className={resumeActive ? 'sidebar-item-active' : 'sidebar-item'} onClick={() => {
                resetItems();
                setResumeActive(true);
                
            }}><p className='light-body-text'>Resume</p></li></a>
            <a href="#contact-section"><li id='contact-item' className={contactActive ? 'sidebar-item-active' : 'sidebar-item'} onClick={() => {
                resetItems();
                setContactActive(true);
                
            }}><p className='light-body-text'>Contact</p></li></a>
            
          </ul>
        </div>

        <div id="socials">
          <ul id='social-items'>
          <li><a href="https://www.linkedin.com/in/slivengood01/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl"></i></a></li>
              <li><a href="https://www.instagram.com/boooks.and.sunlight/" target="_blank"><i className="fa-brands fa-square-instagram fa-2xl"></i></a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61559910358447" target="_blank"><i className="fa-brands fa-square-facebook fa-2xl"></i></a></li>
          </ul>
        </div>
     
  </div>
  )
}

export default Sidebar
