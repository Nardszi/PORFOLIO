import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'
import { resumeData } from '../data/resume'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Linard Cordero</h3>
          <p>{resumeData.title}</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Social</h4>
          <div className="social-links">
            <a 
              href={resumeData.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href={`mailto:${resumeData.email}`}
              title="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Linard Cordero. All rights reserved.</p>
        <p>Designed & Built with React + Vite</p>
      </div>
    </footer>
  )
}

export default Footer
