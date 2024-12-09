import './Header.css';
import { Container, Navbar, Nav, NavbarToggle, NavbarCollapse } from 'react-bootstrap';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function Header() {
  return (
  <Navbar  className="bg-body-tertiary fixed-top navbar-expand-lg z-5 custom-nav"expand="lg">
    <Container>
      <Navbar.Brand>
          <span onClick={scrollToTop} style={{ cursor: 'pointer' }}>D.H.</span>
      </Navbar.Brand>
      <NavbarToggle aria-controls="navbar-nav" />
        <NavbarCollapse id="navbar-nav">
          <Nav className="custom-nav-links-header ms-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link 
                  href={require('./Files/DH_Resume_v7.pdf')} 
                  target="_blank"
                >
                  Resume
                </Nav.Link>
          </Nav>
        </NavbarCollapse>
    </Container>
</Navbar>
  );
}

export default Header;
