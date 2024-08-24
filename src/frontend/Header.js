import { Link } from 'react-router-dom';
import './Header.css';
import Homepage from './Homepage';

function Header() {
  return (
    <div className="header">
      <h1 className="header_title">D.H.</h1>
      <div className="header_hrefs">
        {/* <Link to="/About" className="header_link">About</Link>
        <Link to="/Skills" className="header_link">Skills</Link>
        <Link to="/Projects" className="header_link">Projects</Link>
        <Link to="/Contact" className="header_link">Contact</Link> */}
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
       <hr></hr>
      </div>
    </div>
  );
}

export default Header;
