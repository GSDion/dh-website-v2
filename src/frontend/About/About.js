import './About.css';
//add some animations to the background (rainbow like intro?)


function About() {
    
  
    return (
      <div className =  'About' >

        <div className = 'About_title '>
        <h1>About</h1>
       </div>

      <div className = 'About_container'>
          <div className = 'About_paragraph'> 
            <p>Hello! My name is Dion. I'm a recent graduate from the University of Georgia, where
              I obtained a degree in Computer Science with a certifcate in Applied Data Science. At the University of Georgia, I learned about topics such as 
              cloud computing, web development, and machine learning. With this knowledge, I am eager to pursue a career in software development.
            </p>

            <p>🔭 I’m currently working on Tactical Emblem Hub, a website developed using Python, Flask, SQLite, and SQLAlchemy, which helps manage Fire Emblem characters, teams, and strategies.</p>

            <p>🌱 I’m currently learning Powershell Script and C#</p>

            <p>🎮 I'm interested in video games and 3D printing.</p>
            
          </div>

          {/* <div className = 'About_photo'> 
            <img src={require('../Pictures/DH_portfolio.jpg')} alt="DH_portfolio" />
          </div> */}
      </div>
        
      </div>
    );
}  
  
  export default About;
