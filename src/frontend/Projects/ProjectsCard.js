import './ProjectsCard.css'

function ProjectsCard({ProjectsCardTitle, ProjectsCardImage, ProjectsCardAttribtutes}) {
    return (
        <div className="ProjectsCard">
            <img src={ ProjectsCardImage} alt={ProjectsCardTitle} className="Projectscard-image" />
            <h2 className="Projectscard-title">{ProjectsCardTitle}</h2>
            <p className='Projectscard-attributes'>{ProjectsCardAttribtutes}</p>
        </div>
    );
}

export default ProjectsCard;