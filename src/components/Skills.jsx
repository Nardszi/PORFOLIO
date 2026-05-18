import { resumeData } from '../data/resume'
import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: resumeData.skills.frontend,
      icon: '🎨'
    },
    {
      title: 'Backend',
      skills: resumeData.skills.backend,
      icon: '⚙️'
    },
    {
      title: 'Database',
      skills: resumeData.skills.database,
      icon: '📊'
    },
    {
      title: 'Tools & Platforms',
      skills: resumeData.skills.tools,
      icon: '🛠️'
    },
    {
      title: 'Other Skills',
      skills: resumeData.skills.other,
      icon: '💡'
    }
  ]

  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <div className="skill-header">
              <span className="skill-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-summary">
        <div className="summary-card">
          <h4>Full Stack Development</h4>
          <p>End-to-end web application development from frontend UI to backend architecture</p>
        </div>
        <div className="summary-card">
          <h4>Database Design</h4>
          <p>Design and optimization of relational databases like MySQL and NoSQL with MongoDB</p>
        </div>
        <div className="summary-card">
          <h4>API Development</h4>
          <p>Building RESTful APIs and integrating third-party services</p>
        </div>
      </div>
    </section>
  )
}

export default Skills
