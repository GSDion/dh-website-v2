import { useParams } from 'react-router-dom';
import projects from './Projects.json'; 
import Header from '../Header';
import './ProjectPage.css'


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
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                className="img-fluid mb-3"
                alt={`${project.title} screenshot ${index + 1}`}
              />
            ))}
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
    </div>
    </div>
  );
}

export default ProjectPage;
