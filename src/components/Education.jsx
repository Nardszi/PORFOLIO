import { FiBookOpen } from 'react-icons/fi'
import { resumeData } from '../data/resume'
import './Education.css'

function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div className="education-container">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-icon">
              <FiBookOpen size={32} />
            </div>

            <div className="education-content">
              <h3>{edu.degree}</h3>
              <p className="school">{edu.school}</p>
              <p className="location">{edu.location}</p>

              <ul className="education-details">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
