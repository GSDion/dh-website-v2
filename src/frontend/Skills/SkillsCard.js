import './SkillsCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SkillsCard({SkillsCardTitle, SkillsCardImage, color}) {
    return (
        <div className="card SkillsCard z-1 position-relative">
             <div className="card-body d-flex align-items-center">
                <FontAwesomeIcon icon={SkillsCardImage} style={{color: color}} alt={SkillsCardTitle} className="Skillscard-image img-fluid" />
                <h2 className="Skillscard-title text-wrap">{SkillsCardTitle}</h2>
            </div>
        </div>
    );
}

export default SkillsCard;