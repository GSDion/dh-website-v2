
import './Intro.css';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col} from 'react-bootstrap'



function Intro() {
    return (

      <div className="Intro">
      <Container className="Intro_content">

        <Row className="d-flex justify-content-center align-items-center flex-column">
          
          <Col xs={12} className="text-center custom-col-intro">
            <h1>
              Hello! I'm <span className="rainbow">Dion.</span>
            </h1>
            <h1>An Aspiring Software Engineer.</h1>
          </Col>

          <Col>
            <img src="/Pictures/undraw_programming_65t2.svg" class="img-fluid custom-intro-img mx-auto mx-auto d-block" alt="computer programming"></img>
          </Col>

          {/* <Col xs={12} className="">
            <div className="image-container">
              <img
                src={require('../Pictures/computer_typing.png')}
                alt="computer"
                className="intro-image align-self-end"
              />
            </div>
          </Col> */}

        </Row>

      </Container>
    </div>
    );
  }

  export default Intro;

  // put 2 horinzontal lines of 2 alternating lengths of left/right side of pages. 
  // or put email on bottom of left side of page and put other links (github, linkedin, etc on right side of page)