import { useParams } from 'react-router-dom';
import projects from './Projects.json'; 
import Header from '../Header';
import './ProjectPage.css'
import { Carousel } from 'react-bootstrap'; 
import Footer from '../Footer';

function ProjectPage() {
  const { id } = useParams(); // Get the dynamic 'id' from the route
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
    <Header/>
    <div className='Project_Page'>
      <div className="container py-5">
        <h1 className="mb-3 custom-project-page-title">{project.title}</h1>
        <p className="text-muted">{project.date}</p>

        <div className="row mb-4">
          <div className="col-md-8">
          <Carousel>
                {project.images.map((img, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={img}
                      className="d-block w-100 img-fluid"
                      alt={`${project.title} screenshot ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
          </div>
          <div className="col-md-4">
            <h3>What Is It?</h3>
            <p>{project.description}</p>

            <h4>Tools & Technologies</h4>
            <ul>
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
}

export default ProjectPage;
