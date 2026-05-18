import { FiGithub, FiMail, FiExternalLink } from 'react-icons/fi'
import { resumeData } from '../data/resume'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span className="gradient-text">Linard Cordero</span></h1>
          <h2 className="subtitle">{resumeData.title}</h2>
          <p className="description">{resumeData.objective}</p>
          
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href={`mailto:${resumeData.email}`} className="btn btn-secondary">
              <FiMail /> Send Email
            </a>
          </div>

          <div className="social-links">
            <a 
              href={resumeData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a 
              href={`mailto:${resumeData.email}`}
              className="social-icon"
              title="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="blob"></div>
          <div className="blob-2"></div>
          <div className="code-snippet">
            <pre>
              <code>{`const developer = {
  name: "Linard",
  role: "Full Stack Developer",
  skills: ["React", "PHP", "Laravel"],
  passionate: true
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
