import { FiMapPin, FiCalendar } from 'react-icons/fi'
import { resumeData } from '../data/resume'
import './Experience.css'

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-timeline">
        {resumeData.experience.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <div className="experience-meta">
                  <span className="duration">
                    <FiCalendar /> {job.duration}
                  </span>
                  <span className="location">
                    <FiMapPin /> {job.location}
                  </span>
                </div>
              </div>

              <ul className="responsibilities">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
