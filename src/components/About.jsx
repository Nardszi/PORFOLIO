import { resumeData } from '../data/resume'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-intro">
            I'm a BSIT graduate from Central Philippines State University with a passion for building 
            web applications that solve real-world problems. With hands-on experience in full-stack 
            development, I've completed several thesis projects and successfully worked on various 
            web applications during my internship.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎓 Education</h3>
              <p>Bachelor of Science in Information Technology (BSIT)</p>
              <span>Central Philippines State University</span>
            </div>

            <div className="highlight-card">
              <h3>💼 Experience</h3>
              <p>Web Development Intern (2024 - 2025)</p>
              <span>CPSU Victorias Campus IT Department</span>
            </div>

            <div className="highlight-card">
              <h3>🌍 Availability</h3>
              <p>{resumeData.availability}</p>
              <span>{resumeData.workSetup}</span>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-item">
              <h4>Languages</h4>
              <p>{resumeData.languages.join(', ')}</p>
            </div>
            <div className="detail-item">
              <h4>Location</h4>
              <p>{resumeData.location}</p>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">4+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">5</div>
              <div className="stat-label">Tech Skills</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">8</div>
              <div className="stat-label">Languages</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1 yr</div>
              <div className="stat-label">Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
