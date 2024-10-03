
import './Intro.css';

function Intro() {
  const handleResumeClick = () => {
    window.open(require('../Files/DH_Resume_v5.pdf'), '_blank');
  };
    return (
      
      <div className = 'Intro'>
        
        <div className = 'Intro_content'>
          <h1>Hi!</h1>
        <div className="Intro_repeating_text">
          <h1>My name is Dion.</h1>
        </div>
         
      

          <p>I am a Software Engineer that can manage both the front and back end. </p>
          <p>I am adept at Java, Python, Javascript, CSS, HTML, React, Node.js, and more. </p>
          
          <button onClick={handleResumeClick}>
            Resume
          </button>

        </div>
      </div>
    );
  }

  export default Intro;

  // put 2 horinzontal lines of 2 alternating lengths of left/right side of pages. 
  // or put email on bottom of left side of page and put other links (github, linkedin, etc on right side of page)