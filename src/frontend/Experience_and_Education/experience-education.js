
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience-education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faBriefcase,
//   faSchool,
//   faStar,
// } from '@fortawesome/free-solid-svg-icons';
import {
  faBriefcase,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

function Timeline() {
    return (
        <div>
            <VerticalTimeline className="custom-gradient-timeline">

             {/* First Job */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(39, 39, 42)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #7e57c2' }}
                date="2025 - Present"
                iconStyle={{ background: 'rgb(39, 39, 42)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
                
                dateClassName="timeline_date"
                
            >
                <h3 className="vertical-timeline-element-title">First Job.</h3>
                <h4 className="vertical-timeline-element-subtitle">Atlanta, GA</h4>
                
                <p>
                First Job. First Job. First Job. First Job. First Job. First Job.
                </p>
            </VerticalTimelineElement>
            
            {/* UGA */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(39, 39, 42)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #f48fb1' }}
                date="2022 - 2024"
                iconStyle={{ background: 'rgb(39, 39, 42)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faSchool} />}
                dateClassName="timeline_date"
                
            >
                <h3 className="vertical-timeline-element-title">University of Georgia</h3>
                <h4 className="vertical-timeline-element-subtitle">Athens, GA</h4>
                <p>
                I obtained my Bachelor of Science in Computer Science from the University of Georgia with
                a 3.74 GPA (Cum Laude). I also obtained a certificate in Applied Data Science.
                </p>
            </VerticalTimelineElement>

            {/* Georgia Southern University */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(39, 39, 42)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #ef5350' }}
                date="2020 - 2022"
                iconStyle={{ background: 'rgb(39, 39, 42)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faSchool} />}
                dateClassName="timeline_date"
                
            >
                <h3 className="vertical-timeline-element-title">Georgia Southern University</h3>
                <h4 className="vertical-timeline-element-subtitle">Statesboro, GA</h4>
                <p>
                I completed my first two years of study at Georgia Southern University
                </p>
            </VerticalTimelineElement>

            {/* Beginning */}
            {/* <VerticalTimelineElement
                icon={<FontAwesomeIcon icon={faStar} />}
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            >
            </VerticalTimelineElement> */}
            

           
        </VerticalTimeline>
        </div>
        
      
    );
}

export default Timeline;