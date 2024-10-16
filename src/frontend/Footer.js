import './Footer.css';


function Footer() {
  return (
    <div className='Footer'>
        <div className="Footer_copyright">
            <p>Copyright © Dion Humphrey 2024</p>
        </div>

        <div className="Footer_social_links">
            <a href="https://www.linkedin.com/in/dion-humphrey/" target='blank' class="fa fa-linkedin"></a>
            <a href="https://github.com/GSDion" target='blank' class="fa fa-github" ></a>
            <a href="mailto:humphreydion@yahoo.com?subject=Hello!" target='blank' class="fa fa-yahoo" ></a>
        </div>

        <div className='Footer_nav_links'>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href={require('./Files/DH_Resume_v7.pdf')} >Resume</a>
        </div>

    </div>
  );
}

export default Footer;
