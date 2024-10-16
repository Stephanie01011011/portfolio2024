
import { useState } from 'react';
import projects from '../projects';


function Projects() {
   
  return (
    <div className="container" id='project-container'>
        <h2 className='section-heading-text'>Projects</h2>
        <div id='project-section'>
            
        {projects.map((proj) => (
            <div className="projects">
            <a className="project-card" href={proj.url} target="_blank">
               
                <div className="project-info" id="info">
                    <div className="image"><img src={proj.image} alt="" className='project-image'/></div>
                    <div className="text">
                        <p className='project-card-text-heading'>{proj.title}</p>
                        <p>{proj.tech}</p>
                    </div>
                    
                </div>
            </a>
            <a href={proj.github} id='project-btn' target="_blank"><div className="button-outline proj-btn border-pop"></div></a>
            </div>
        ) )}
    </div>
    
    <div className="ux-section">
        <h2 id='ux-text'>Don't forget to check out my UX portfolio as well. Plenty more Designs there for your viewing pleasure :)</h2>
        <a href="https://sreneelive9.wixsite.com/steph-create" className='cta' target="_blank"><div className="button border-pop ux"></div></a>
    </div>
    </div>
    
        
    
    
  )
}

export default Projects
