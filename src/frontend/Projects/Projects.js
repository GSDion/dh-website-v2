import './Projects.css';
import './ProjectsCard';
import ProjectsCard from './ProjectsCard';

function Projects() {
    return (
      <div className=" mt-5 Projects">

        <div className='Projects_title'>
           <h1>Projects</h1>
        </div>

        <div className="row custom-projects-row ">
          {/**the row class automatically applies -15px negative margins on both sides to align the grid system correctly.  */}

            {/* StackTrack */}
          <ProjectsCard 
              ProjectsCardImage="/Pictures/lms_admin_dashboard.png"
              ProjectsCardDate="Sep. 2024 – Nov. 2024"
              ProjectsCardCategory="Application"
              ProjectsCardTitle="StackTrack - Library Management System"
              ProjectsCardDescription="A Library Management System designed to streamline the process of managing library users and books."
              ProjectsCardTechStack="Java, Java Swing, MySQL, Git"
              id='stacktrack'
            />

            {/* BookIt */}
            <ProjectsCard 
             ProjectsCardImage="/Pictures/Bookit_mods_homepage_02.png"
              ProjectsCardDate="Aug. 2023 – Dec. 2023"
              ProjectsCardCategory="Web"
              ProjectsCardTitle="Bookit - E-Cinema Booking Site"
              ProjectsCardDescription="An E-Cinema Booking website made by team of five using React.js, CSS, Java Spring Boot, and MySQL."
              ProjectsCardTechStack="React, JavaScript, CSS, Java Spring Boot, MySQL, Agile, Scrum, Git"
              id="bookit"
            />

            {/* DCC*/}
            <ProjectsCard 
             ProjectsCardImage="Pictures/DCC_homepage_logged_out.png"
              ProjectsCardDate="April 2023 – May 2023"
              ProjectsCardCategory="Web"
              ProjectsCardTitle="DCC - Movie Review Website"
              ProjectsCardDescription="A movie review website made by a team a three using the MERN stack."
              ProjectsCardTechStack="React, JavaScript, CSS, MongoDB, Express.js, Node.js, Git"
              id="dcc"
            />

            {/* Tactical Emblem Hub */}
          <ProjectsCard  
            ProjectsCardImage="Pictures/TEH_Homepage.png"
              ProjectsCardDate="Jan. 2025 – July 2025"
              ProjectsCardCategory="Web"
              ProjectsCardTitle="Tactical Emblem Hub - Team Management Tool"
              ProjectsCardDescription="A website for managing Fire Emblem characters, teams, and strategies"
              ProjectsCardTechStack="Python, Flask, HTML, CSS, JavaScript, Bootstrap, SQLAlchemy, SQLite, Git"
              id="teh"
            />
          
           {/* GoodReadsFilter */}
          <ProjectsCard  
            ProjectsCardImage="Pictures/GoodReadsFilter_Homepage.png"
              ProjectsCardDate="Sep. 2024 – Jan 2025"
              ProjectsCardCategory="Web"
              ProjectsCardTitle="GoodReadsFilter"
              ProjectsCardDescription="GoodreadsFilter allows you to filter the data associated with your Goodreads account by a specified filter (Author) and filter constraint (George R.R. Martin)."
              ProjectsCardTechStack="Python, Flask, HTML, CSS, JavaScript, Bootstrap, Git"
              id="goodreadsfilter"
            />
            

        
        </div>
    </div>
    );
}  
  
  export default Projects;
  