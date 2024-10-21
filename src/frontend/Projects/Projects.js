import './Projects.css';
import './ProjectsCard';
import ProjectsCard from './ProjectsCard';

function Projects() {
    return (
      <div className = 'Projects'>
        
        <div className='Projects_title'>
          <h1>Projects</h1>
        </div>

        <div className='Projects_list'>
          <ProjectsCard 
            ProjectsCardImage={require('../Pictures/DCC_homepage_logged_out.png')} 
            ProjectsCardTitle='DCC - Movie Review Website'
            ProjectsCardAttribtutes='React, CSS, MongoDB, Express.js, Node.js, Git'
          />

          {/* <ProjectsCard 
            ProjectsCardImage={require('../Pictures/...')} 
            ProjectsCardTitle='Library Management System'
            ProjectsCardAttribtutes='Java, Java Swing, MySQL, Git'
          /> */}

          <ProjectsCard
            ProjectsCardImage={require('../Pictures/Bookit_mods_homepage_02.png')} 
            ProjectsCardTitle='Bookit - E-Cinema Booking Site'
            ProjectsCardAttribtutes='React, CSS, MySQL, Java SpringBoot, Git, Agile, Scrum'
          />

        </div>
      </div>
    );
}  
  
  export default Projects;
  