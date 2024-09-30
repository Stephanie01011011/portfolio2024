import React from 'react'

function Skills() {
  return (
    <div id='skills-section'>
      <h2 className='section-heading-text'>Skills</h2>
      <div id="skill-cards">
      <div className="card" style={{width: "240px"}}>
  <div className="skill-header"><h3 id='skill-title'>Frontend</h3></div>
  <div className="card-body">
    <p className="card-text">HTML, CSS, Javascript, Typescript, React, Angular, Bootstrap, Sass, Less, MaterialUI, Wordpress, Sitefinity</p>
  </div>
</div>
      <div className="card" style={{width: "240px"}}>
  <div className="skill-header">
    <h3 id='skill-title'>Backend</h3>
    </div>
  <div className="card-body">
    <p className="card-text">Node.js, Express, MongoDB, C#, C++, php, Python, JSON, Git, Github, Docker</p>
  </div>
</div>
      <div className="card" style={{width: "240px"}}>
  <div className="skill-header"><h3 id='skill-title'>Design</h3></div>
  <div className="card-body">
    <p className="card-text">UX/ UI Design and Research, Figma, Illustrator, Photoshop, Canva, Branding, Logo Design, Web Design</p>
  </div>
</div>
      <div className="card" style={{width: "240px"}}>
  <div className="skill-header"><h3 id='skill-title'>Analytics</h3></div>
  <div className="card-body">
    <p className="card-text">SQL, Excel, Python, Microsoft SQL Server, MongoDB, Tableau, Database management</p>
  </div>
</div>
      </div>
    </div>
  )
}

export default Skills
