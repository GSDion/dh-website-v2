import './Footer.css';
import {  Nav } from 'react-bootstrap';

function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top custom-copy-footer">
        <p class="col-md-4 mb-0 ">&copy; 2024-2025 Dion Humphrey</p>

        <a href="https://www.linkedin.com/in/dion-humphrey/" col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none target='blank' class="fa fa-linkedin fa-2x"> </a>
        <a href="https://github.com/GSDion" col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none target='blank' class="fa fa-github fa-2x" > </a>
        <a href="mailto:humphreydion@yahoo.com?subject=Hello!" col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none target='blank' class="fa fa-envelope fa-2x" > </a>

        <ul class="nav col-md-4 justify-content-end custom-nav-links-footer">
          <Nav.Link href="/#about">About</Nav.Link>
          <Nav.Link href="/#skills">Skills</Nav.Link>
          <Nav.Link href="/#projects">Projects</Nav.Link>
          <Nav.Link href="/#contact">Contact</Nav.Link>
          <Nav.Link 
            href={require('./Files/HumphreyDion_Resume_v13.pdf')} 
            target="_blank"
          >
            Resume
          </Nav.Link>
        </ul>
      </footer>
    </div> 
  );
}

export default Footer;
