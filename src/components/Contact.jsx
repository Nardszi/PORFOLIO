import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { resumeData } from '../data/resume'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link
    const mailtoLink = `mailto:${resumeData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="contact" id="contact">
      <h2>Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's connect!</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to collaborate or just chat.
          </p>

          <div className="contact-details">
            <a href={`mailto:${resumeData.email}`} className="contact-method">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div>
                <h4>Email</h4>
                <p>{resumeData.email}</p>
              </div>
            </a>

            <a href={`tel:${resumeData.phone}`} className="contact-method">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>{resumeData.phone}</p>
              </div>
            </a>

            <div className="contact-method">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div>
                <h4>Location</h4>
                <p>{resumeData.location}</p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <p>Availability: <strong>{resumeData.availability}</strong></p>
            <p>Work Setup: <strong>{resumeData.workSetup}</strong></p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <FiSend /> Send Message
          </button>

          {submitted && (
            <div className="success-message">
              Thanks for your message! I'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
