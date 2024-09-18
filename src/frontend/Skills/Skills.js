
import './Skills.css';
import SkillsCard from './SkillsCard';


function Skills() {
    return (
      <div className = 'Skills'>

      <div className='Skills_title'>
       <h1>Skills</h1>
      </div>

      <div className='Skills_list'>
          <SkillsCard
            SkillsCardImage={require('../Pictures/java_logo.webp')} 
            SkillsCardTitle="Java"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/python_logo.webp')} 
            SkillsCardTitle="Python"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/javascript_logo.webp')} 
            SkillsCardTitle="JavaScript"
           />


          <SkillsCard
            SkillsCardImage={require('../Pictures/html_logo.png')} 
            SkillsCardTitle="HTML"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/css_logo.png')} 
            SkillsCardTitle="CSS"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/react_logo.png')} 
            SkillsCardTitle="React"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/google_cloud_logo.webp')} 
            SkillsCardTitle="Google Cloud"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/aws_logo.webp')} 
            SkillsCardTitle="AWS (S3)"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/java_spring_boot_logo.png')}
            SkillsCardTitle="Java SpringBoot"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/java_logo.webp')} 
            SkillsCardTitle="Java Swing"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/git_logo.png')} 
            SkillsCardTitle="Git"
           />

          <SkillsCard
            SkillsCardImage={require('../Pictures/docker_logo.jfif')} 
            SkillsCardTitle="Docker"
           />

      </div>

      </div>
    );
  }

  export default Skills;
