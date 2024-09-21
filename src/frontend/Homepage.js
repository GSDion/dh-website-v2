import Header from "./Header";
import './Homepage.css';
import About from './About/About';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Intro from './Intro/Intro';
import Contact from './Contact/Contact'
import Footer from "./Footer";

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
          </div>

          <div id ="projects">
            <Projects/>
          </div>

          <div id ="contact">
            <Contact/>
          </div> 
        
          <Footer/>
        </div> {/* Content end */}
     

    {/* Parent div end */}
    </div>   
       
    );
  }

  export default Homepage;
