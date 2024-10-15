import React, { useRef, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Thanks from './components/Thanks';


function App() {
  const [item, setItem] = useState("welcome");
  
  
  

  return (
    <div className="App">
      <Sidebar item={item}/>


  <div className="d-flex p2 flex-column flex-shrink-0 main">
    <div className="welcome-scroll" onScroll={() => setItem("welcome")}></div>
    <Welcome />
    <div className="skills-scroll" onScroll={() => setItem("skills")}></div>
    <Skills />
    <div id="divider">
      <div id="divider-text">
        <p className="question">Whats my favorite project?</p>
        <p className="answer">I had so much fun working on all of my projects listed, but I think my favorite one to develop has been the <span className='prim-color'>Book Store website</span>. I was able to include my personal hobby of reading with my career aspirations of programming to come up with a super fun website to browse a book collection. This was also one of the first sites I developed creating my own API, which held the book collection.</p>
      </div>
    </div>
    <div className="projects-scroll" onScroll={() => setItem("projects")}></div>
    <Projects />
    <div className="resume-scroll" onScroll={() => setItem("resume")}></div>
    <Resume />
    <div className="contact-scroll" onScroll={() => setItem("contact")}></div>
    <Contact />
    <Thanks />
  </div>


    </div>
  );
}

export default App;
