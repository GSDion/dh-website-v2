
import './Intro.css';

function Intro() {
  // const handleResumeClick = () => {
  //   window.open(require('../Files/DH_Resume_v7.pdf'), '_blank');
  // };
    return (
      
      <div className = 'Intro'>
        
        <div className = 'Intro_content'>
          <h1>Hello! I'm <span className='rainbow'>Dion.</span></h1>
          {/* <h1>My name is <br className="Intro_br"></br>Dion.</h1> */}
          <h1>An Aspiring Software Engineer.</h1>
      
         
      

          {/* <p>I am an aspiring Software Engineer. </p>
          <p>I am adept at Java, Python, Javascript, CSS, HTML, React, Node.js, and more. </p> */}
          
          {/* <button onClick={handleResumeClick}>
            Resume
          </button> */}

          <div class="image-container">
            {/* <div class="square"></div> */}
            <img src={require('../Pictures/computer_typing.png')}  alt="Person" />
          </div>

        </div>
      </div>
    );
  }

  export default Intro;

  // put 2 horinzontal lines of 2 alternating lengths of left/right side of pages. 
  // or put email on bottom of left side of page and put other links (github, linkedin, etc on right side of page)