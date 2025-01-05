import './Skills.css';
import SkillsCard from './SkillsCard';
import { faDocker, faReact, faJs, faCss3Alt, faPython, faJava, faHtml5, faAws, faGoogle, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import {faCodeBranch, faDatabase} from '@fortawesome/free-solid-svg-icons'


function Skills() {
    return (
      <div className = 'Skills'>

      <div className='Skills_title'>
       <h1>Skills</h1>
      </div>

      <div className="d-flex flex-wrap justify-content-start z-1 Skills_list">
          <SkillsCard
            SkillsCardImage={faJava} 
            SkillsCardTitle="Java"
            color="#f0950e"

           />

          <SkillsCard
            SkillsCardImage={faPython} 
            SkillsCardTitle="Python"
            color="#3c73a2"
           />

          <SkillsCard
            SkillsCardImage={faJs} 
            SkillsCardTitle="Java Script"
            color="#ffdf2b"
           />


          <SkillsCard
            SkillsCardImage={faHtml5} 
            SkillsCardTitle="HTML"
            color="#f16a30"
           />

          <SkillsCard
            SkillsCardImage={faCss3Alt} 
            SkillsCardTitle="CSS"
            color="#319ad1"
           />

          <SkillsCard
            SkillsCardImage={faReact} 
            SkillsCardTitle="React"
            color="#08d9ff"
           />

           {/* <SkillsCard
            SkillsCardImage={fa} 
            SkillsCardTitle="Express.js"
            color="#"
           /> */}

           
           <SkillsCard
            SkillsCardImage={faNodeJs} 
            SkillsCardTitle="Node.js"
            color="#5fa04e"
           />

          <SkillsCard
            SkillsCardImage={faDatabase} 
            SkillsCardTitle="SQL"
            color="#399ddc"
           />

           {/* <SkillsCard
            SkillsCardImage={fa} 
            SkillsCardTitle="MySQL"
            color="#"
           /> */}

           {/* <SkillsCard
            SkillsCardImage={fa} 
            SkillsCardTitle="SQLite"
            color="#"
           /> */}

          {/* <SkillsCard
            SkillsCardImage={fa} 
            SkillsCardTitle="MongoDB"
            color="#"
           /> */}

          <SkillsCard
            SkillsCardImage={faAws} 
            SkillsCardTitle="AWS"
            color="#ff9c08"
           />

          <SkillsCard
            SkillsCardImage={faGoogle} 
            SkillsCardTitle="Google Cloud Platform"
            color="#fbbe0d"
           />

          <SkillsCard
            SkillsCardImage={faJava}
            SkillsCardTitle="Java Spring Boot"
            color="#77bc1f"
           />

          <SkillsCard
            SkillsCardImage={faJava} 
            SkillsCardTitle="Java Swing"
            color="#f0950e"
           />

          <SkillsCard
            SkillsCardImage={faCodeBranch}
            SkillsCardTitle="Git"
            color="#e94e31"
           />

          <SkillsCard
            SkillsCardImage={faDocker} 
            SkillsCardTitle="Docker"
            color="#1e63ee"
           />

           {/* <SkillsCard
            SkillsCardImage={fa} 
            SkillsCardTitle="Flask"
            color="#"
           /> */}


           



      </div>

      </div>
    );
  }

  export default Skills;
