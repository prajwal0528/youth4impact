import { Link } from 'react-router-dom'
import { FaGraduationCap, FaUsers, FaHandsHelping, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text fade-in-up">
            <div className="hero-badge">🌟 Registered Trust | Mysore, Karnataka</div>
            <h1>Empowering Youth,<br /><span>Driving Change</span></h1>
            <p>Youth 4 Impact Trust is dedicated to empowering young minds through education, social awareness, and community engagement. Together, we build a better tomorrow.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Join Now <FaArrowRight /></Link>
              <Link to="/programs" className="btn btn-secondary">Register for Activities</Link>
            </div>
          </div>
          <div className="hero-visual fade-in">
            <div className="hero-card">
              <div className="hero-card-icon">🎓</div>
              <span>500+ Students Impacted</span>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">🤝</div>
              <span>50+ Activities Conducted</span>
            </div>
            <div className="hero-card">
              <div className="hero-card-icon">🌍</div>
              <span>100+ Volunteers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">A youth-driven organization committed to creating lasting social impact</p>
          <div className="intro-content">
            <div className="intro-text">
              <p>Youth 4 Impact Trust is a registered non-profit organization based in Mysore, Karnataka. We believe in the power of youth to transform communities. Our programs focus on bridging the gap between academic learning and real-world experience.</p>
              <p>We work closely with educational institutions, communities, and volunteers to create meaningful opportunities for students and young professionals to contribute to society while developing their skills.</p>
              <Link to="/about" className="btn btn-outline">Learn More About Us <FaArrowRight /></Link>
            </div>
            <div className="intro-image">
              <div className="intro-img-placeholder">
                <span>🌱</span>
                <p>Growing Together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section focus-section">
        <div className="container">
          <h2 className="section-title">Our Key Focus Areas</h2>
          <p className="section-subtitle">Three pillars that drive our mission forward</p>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon"><FaGraduationCap /></div>
              <h3>Education Support</h3>
              <p>Providing guidance, mentorship, and resources to students for academic and personal growth.</p>
              <ul>
                <li><FaCheckCircle /> Academic Mentorship</li>
                <li><FaCheckCircle /> Skill Development</li>
                <li><FaCheckCircle /> Career Guidance</li>
              </ul>
            </div>
            <div className="focus-card featured">
              <div className="focus-icon"><FaUsers /></div>
              <h3>Social Activities</h3>
              <p>Organizing community events, awareness campaigns, and social service programs.</p>
              <ul>
                <li><FaCheckCircle /> Community Events</li>
                <li><FaCheckCircle /> Awareness Campaigns</li>
                <li><FaCheckCircle /> Cultural Programs</li>
              </ul>
            </div>
            <div className="focus-card">
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

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card"><h2>500+</h2><p>Students Impacted</p></div>
            <div className="stat-card"><h2>50+</h2><p>Activities Conducted</p></div>
            <div className="stat-card"><h2>100+</h2><p>Active Volunteers</p></div>
            <div className="stat-card"><h2>10+</h2><p>Partner Institutions</p></div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Make a Difference?</h2>
            <p>Join Youth 4 Impact Trust and be part of a movement that empowers youth and drives positive change.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Become a Member</Link>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>Donate Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
