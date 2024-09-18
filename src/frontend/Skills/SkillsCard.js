import './SkillsCard.css'

function SkillsCard({SkillsCardTitle, SkillsCardImage}) {
    return (
        <div className="SkillsCard">
            <img src={ SkillsCardImage} alt={SkillsCardTitle} className="Skillscard-image" />
            <h2 className="Skillscard-title">{SkillsCardTitle}</h2>
        </div>
    );
}

export default SkillsCard;