import './Header.css';
import React, { useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Properly toggles the state
  };

  return (
    <div className="Header">
       <h1 className="Header_title" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        D.H.
      </h1>
      <div className={`Header_hrefs ${isMenuOpen ? 'open' : ''}`}>
       
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={require('./Files/DH_Resume_v7.pdf')} target='blank' >Resume</a>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Header;
