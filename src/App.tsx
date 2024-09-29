import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Thanks from './components/Thanks';

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebar">
        <div id="logo">
        <h3 className='logo-header'>Stephanie Livengood</h3>
        <p className='light-body-text'>Full Stack Developer</p>
        </div>

        <div id="menu">
          <ul id='menu-items'>
            <li><p className='light-body-text'>Welcome</p></li>
            <li><p className='light-body-text'>Skills</p></li>
            <li><p className='light-body-text'>Projects</p></li>
            <li><p className='light-body-text'>Resume</p></li>
            <li><p className='light-body-text'>Contact</p></li>
            
          </ul>
        </div>

        <div id="socials">
          <ul id='social-items'>
          <li><p className='light-body-text'>Instagram</p></li>
            <li><p className='light-body-text'>Facebook</p></li>
            <li><p className='light-body-text'>LinkedIn</p></li>
          </ul>
        </div>
     
  </div>


  <div className="d-flex p2 flex-column flex-shrink-0 main">
    <Welcome/>
    <Skills />
    <div id="divider">
      <div id="divider-text">
        <p className="question">Whats my favorite project?</p>
        <p className="answer">I had so much fun working on all of my projects listed, but I think my favorite one to develop has been the Star Wars</p>
      </div>
    </div>
    <Projects />
    <Resume />
    <Contact />
    <Thanks />
  </div>


    </div>
  );
}

export default App;
