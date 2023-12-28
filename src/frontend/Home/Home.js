import Header from "../Header";
import './Home.css';

function Home() {
    return (
      <div>
        <Header/>
        <div className = 'Home'>
          <h1>Hi! My name is Dion.</h1>
          <p>I am a 4th year Computer Science student at the University of Georgia.</p>
          <p>I am adept at Java, Javascript, CSS, HTML, React, Node.js, and more. </p>
        </div>
      </div>
    );
  }

  export default Home;

  // put 2 horinzontal lines of 2 alternating lengths of left/right side of pages. 
  // or put email on bottom of left side of page and put other links (github, linkedin, etc on right side of page)