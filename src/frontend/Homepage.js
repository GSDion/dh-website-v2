import Header from "./Header";
import './Homepage.css';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Intro from './Intro/Intro';
import Contact from './Contact/Contact'

function Homepage() {
    return (
      
      <div>
        
        <div id = 'header'>
          <Header/>
        </div>

        <div id = "content">
        <div id ="intro">
          <Intro/>
          </div>

          <div id ="about">
          <About/>
          </div>

          <div id ="skills">
          <Skills/>
          <a href=".#about">jump link</a>
          </div>

          <div id ="projects">
          <Projects/>
          </div>

          <div id ="contact">
          <Contact/>
        </div>
        </div>
         
    </div>
       
    );
  }

  export default Homepage;
