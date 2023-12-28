import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="header_title">D.H.</h1>
      <div className="header_links">
        <Link to="/About" className="header_link">About</Link>
        <Link to="/Projects" className="header_link">Projects</Link>
        <Link to="/Experience" className="header_link">Experience</Link>
        <Link to="/Contact" className="header_link">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
