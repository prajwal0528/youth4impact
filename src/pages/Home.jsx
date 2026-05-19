import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaUsers, FaHandsHelping, FaArrowRight, FaCheckCircle, FaTimes, FaDownload, FaFileAlt } from 'react-icons/fa'
import './Home.css'

const rules = [
  "I will abide by the mission, vision and goals of Youth 4 Impact Trust.",
  "I will actively participate in trust activities and contribute towards social impact.",
  "I will maintain honesty, integrity and respect in all interactions.",
  "I will not engage in any activity that harms the reputation of the trust.",
  "I will follow all guidelines and decisions made by the trust management.",
  "Membership can be terminated if any rule is violated or if conduct is found inappropriate.",
  "My personal information provided is true and accurate.",
  "I understand that membership does not guarantee any financial benefits.",
  "A valid ID xerox (Aadhar Card / Voter ID / Passport / Driving Licence) must be attached with the application form.",
]

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function MembershipModal({ onClose }) {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><FaTimes /></button>

        <div className="modal-header">
          <div className="modal-header-icon">📋</div>
          <h2>Rules & Regulations</h2>
          <p>Youth 4 Impact Trust — Membership Terms</p>
        </div>

        <div className="modal-rules">
          {rules.map((rule, i) => (
            <div className={`modal-rule-item${i === 8 ? ' rule-highlight' : ''}`} key={i}>
              <div className="rule-number">{i + 1}</div>
              <p>{rule}</p>
            </div>
          ))}
        </div>

        <div className="modal-agree">
          <label className="agree-label">
            <input
              type="checkbox"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
            />
            <span>I have read and agree to all the rules & regulations of Youth 4 Impact Trust.</span>
          </label>
        </div>

        <div className="modal-footer">
          <div className="modal-instructions">
            <FaFileAlt />
            <p>Download the form, fill it out, attach a valid ID xerox, and submit the hard copy to our office.</p>
          </div>
          <a
            href="https://drive.google.com/uc?export=download&id=1ZKPDhQLhoueFN2GBjV6lIYC-mCxmR26i"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary modal-download-btn${!agreed ? ' btn-disabled' : ''}`}
            onClick={e => { if (!agreed) e.preventDefault() }}
          >
            <FaDownload /> Get Application Form
          </a>
          {!agreed && <p className="agree-hint">Please agree to the rules above to enable the download.</p>}
        </div>
      </div>
    </div>
  )
}

function Home() {
  const [showModal, setShowModal] = useState(false)
  useReveal()

  return (
    <div className="home">
      {showModal && <MembershipModal onClose={() => setShowModal(false)} />}

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text fade-in-up">
            <div className="hero-badge">Registered Trust | Mysore, Karnataka</div>
            <h1>Empowering Youth,<br /><span>Driving Change</span></h1>
            <p>Youth 4 Impact Trust is dedicated to empowering young minds through education, social awareness, and community engagement. Together, we build a better tomorrow.</p>
            <div className="hero-buttons">
              <button onClick={() => setShowModal(true)} className="btn btn-primary">Join Now <FaArrowRight /></button>
              <a href="https://forms.gle/uaNaz9K8afnBjxyn8" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Register for Activities</a>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="hero-card">
              <div className="hero-card-icon">🎓</div>
              <span>Serve. Inspire. Impact.</span>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">🤝</div>
              <span>Together for Better Tomorrow.</span>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">🌍</div>
              <span>Driven by purpose, powered by volunteers.</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section intro-section">
        <div className="container">
          <h2 className="section-title reveal">Who We Are</h2>
          <p className="section-subtitle reveal reveal-delay-1">A youth-driven organization committed to creating lasting social impact</p>
          <div className="intro-content">
            <div className="intro-text reveal reveal-delay-1">
              <p>Youth 4 Impact Trust is a registered non-profit organization based in Mysore, Karnataka. We believe in the power of youth to transform communities. Our programs focus on bridging the gap between academic learning and real-world experience.</p>
              <p>We work closely with educational institutions, communities, and volunteers to create meaningful opportunities for students and young professionals to contribute to society while developing their skills.</p>
              <Link to="/about" className="btn btn-outline">Learn More About Us <FaArrowRight /></Link>
            </div>
            <div className="intro-image reveal reveal-delay-2">
              <img
                src="https://asset.youth4impact.senoraic.com/who_we_are.png"
                alt="Who We Are"
                className="intro-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS */}
      <section className="section focus-section">
        <div className="container">
          <h2 className="section-title reveal">Our Key Focus Areas</h2>
          <p className="section-subtitle reveal reveal-delay-1">Three pillars that drive our mission forward</p>
          <div className="focus-grid">
            <div className="focus-card reveal reveal-delay-1">
              <div className="focus-icon"><FaGraduationCap /></div>
              <h3>Education Support</h3>
              <p>Providing guidance, mentorship, and resources to students for academic and personal growth.</p>
              <ul>
                <li><FaCheckCircle /> Academic Mentorship</li>
                <li><FaCheckCircle /> Skill Development</li>
                <li><FaCheckCircle /> Career Guidance</li>
              </ul>
            </div>
            <div className="focus-card featured reveal reveal-delay-2">
              <div className="focus-icon"><FaUsers /></div>
              <h3>Social Activities</h3>
              <p>Organizing community events, awareness campaigns, and social service programs.</p>
              <ul>
                <li><FaCheckCircle /> Community Events</li>
                <li><FaCheckCircle /> Awareness Campaigns</li>
                <li><FaCheckCircle /> Cultural Programs</li>
              </ul>
            </div>
            <div className="focus-card reveal reveal-delay-3">
              <div className="focus-icon"><FaHandsHelping /></div>
              <h3>Youth Empowerment</h3>
              <p>Building leadership skills, confidence, and responsibility among young people.</p>
              <ul>
                <li><FaCheckCircle /> Leadership Training</li>
                <li><FaCheckCircle /> Volunteer Programs</li>
                <li><FaCheckCircle /> Certificates & Recognition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready to Make a Difference?</h2>
            <p>Join Youth 4 Impact Trust and be part of a movement that empowers youth and drives positive change.</p>
            <div className="cta-buttons">
              <button onClick={() => setShowModal(true)} className="btn btn-primary">Become a Member</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home