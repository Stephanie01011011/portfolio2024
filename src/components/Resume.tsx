import React from 'react'

function Resume() {
  return (
    <div id='resume-section'>
        <div className="top-resume"><h2 className='section-heading-text' style={{marginTop: "30px"}}>Resume</h2><div className="stripe"></div></div>
        
        <div className="resume-cols">
            <div className="resume-right">

                <div className="row">
                <div className="head">
                    <p className='dark-heading-small-text'>Revvnue</p>
                    <p>Aug.2024 - Present</p>
                </div>
                <ul className='resume-list'>
                    <li>Design and develop web pages within Wordpress, including enhancing for SEO.</li>
                    <li>Create web design wireframes using Figma to insure UX of pages is top priority.</li>
                    <li>Design, create and update email campaigns within HubSpot and SharpSpring for clients.</li>
                    <li>Assist creative director and CTO with any digital design projects needed, such as survey creation, featured images, and social media ads, using Canva, Photoshop, and InDesign.</li>
                    <li>Update client’s WordPress websites with any content or digital assets needed.</li>
                    <li>Analyze and clean excel data using pivot tables and VLOOKUPs for marketing automation using Zapier.</li>
                </ul>
                </div>

                <div className="row">
                <div className="head">
                    <p className='dark-heading-small-text'>Haynes International, Inc.</p>
                    <p>Oct. 2022 - Aug. 2023</p>
                </div>
                <ul className='resume-list'>
                    <li>Managed internal and external websites using Sitefinity CMS, ensuring seamless content delivery and user engagement with HTML, CSS, and JavaScript.</li>
                    <li>Planned, created, and executed social media campaigns, managing timelines and resources to achieve marketing goals.</li>
                    <li>Analyzed social media metrics using tools like Facebook Analytics, translating insights into actionable improvements for campaigns. </li>
                    <li>Collaborated with all departments of the company to develop and execute social media strategies, improving brand presence and engagement.</li>
                    
                </ul>
                </div>
            </div>
            <div className="resume-left">
            <div className="row">
                <div className="head">
                    <p className='dark-heading-small-text'>Indiana University Indianapolis</p>
                    <p>Aug.2022 - May 2024</p>
                </div>
                <ul className='resume-list'>
                    <li>B.S Informatics</li>
                    <li>Minor in Human-Computer Interactions</li>
                    
                </ul>
                </div>

                <div className="row">
                <div className="head">
                    <p className='dark-heading-small-text'>Ivy Tech Community College</p>
                    <p>Aug.2019 - May 2022</p>
                </div>
                <ul className='resume-list'>
                    <li>A.S Software Development</li>
                    <li>Certificate in Software Application Development</li>
                    
                </ul>
                <div className="decor-image">
                    <img src="decorimg.jpg" alt="" className='dec-img'/>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Resume
