import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1 className="header_title">D.H.</h1>
      <div className="header_hrefs">
       
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
       {/* <hr></hr> */}
      </div>
    </div>
  );
}

export default Header;
