import './ProjectsCard.css'

import React from 'react';
import { Link } from 'react-router-dom';


function ProjectsCard({ ProjectsCardImage, ProjectsCardDate, ProjectsCardCategory, ProjectsCardTitle, ProjectsCardDescription,ProjectsCardTechStack, ProjectsCardLink, id  }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="col-md-6 mb-4">
      <div className="card custom-projects-card shadow-sm border-0">
        {/* Card Image */}
        <img src={ProjectsCardImage} className="custom-projects-card-img-top card-img-top" alt={ProjectsCardTitle} />

        {/* Card Body */}
        <div className="custom-projects-card-body card-body">
          {/* ProjectsCardDate */}
          <span className="custom-projects-badge badge bg-light text-dark mb-2">{ProjectsCardDate}</span>

          {/* ProjectsCardCategory Tags */}
          <p className="custom-projects-card-subtitle card-subtitle text-muted mb-2">{ProjectsCardCategory}</p>

          {/* ProjectsCardTitle */}
          <h5 className="custom-projects-card-title card-title">{ProjectsCardTitle}</h5>

          {/* ProjectsCardDescription */}
          <p className="custom-projects-card-text card-text">{ProjectsCardDescription}</p>

          {/* Tech Stack */}
          <p className=" custom-projects-card-text card-text">
            <small className="text-muted">{ProjectsCardTechStack}</small>
          </p>
          {/* Link */}
          <Link to={`/Projects/${id}`} onClick={scrollToTop} className="btn btn-link text-decoration-none">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
