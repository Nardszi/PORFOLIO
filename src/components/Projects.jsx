import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { resumeData } from '../data/resume'
import './Projects.css'

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              {project.type && <span className="project-type">{project.type}</span>}
            </div>

            <h4 className="project-subtitle">{project.subtitle}</h4>

            <p className="project-description">{project.description}</p>

            {project.features && (
              <div className="project-features">
                <h5>Key Features:</h5>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.highlights && (
              <p className="project-highlights">
                <strong>Highlights:</strong> {project.highlights}
              </p>
            )}

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FiGithub /> View Code
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
