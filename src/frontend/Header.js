import './Header.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Header() {
  return (
    <div className="Header">
       <h1 className="Header_title" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        D.H.
      </h1>
      <div className="Header_hrefs">
       
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href={require('./Files/DH_Resume_v7.pdf')} target='blank' >Resume</a>
      </div>
    </div>
  );
}

export default Header;
