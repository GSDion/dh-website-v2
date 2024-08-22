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
         <Header/>
         <Intro/>
         <About/>
         <Skills/>
         <Projects/>
         <Contact/>
         
    </div>
       
    );
  }

  export default Homepage;
