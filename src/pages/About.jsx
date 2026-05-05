import { FaGlobeAsia, FaBookOpen, FaHandsHelping, FaBullhorn, FaQuoteLeft } from 'react-icons/fa'
import './About.css'

function About() {
  const trustees = [
    { name: 'Founder Name', role: 'Founder & President', initials: 'FN' },
    { name: 'Trustee 1', role: 'Vice President', initials: 'T1' },
    { name: 'Trustee 2', role: 'Secretary', initials: 'T2' },
    { name: 'Trustee 3', role: 'Treasurer', initials: 'T3' },
    { name: 'Trustee 4', role: 'Joint Secretary', initials: 'T4' },
  ]

  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our journey, mission, and the people behind Youth 4 Impact Trust</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-text">
              <h2>Youth 4 Impact Trust</h2>
              <p>Youth 4 Impact Trust is a registered non-profit organization established with the vision of empowering young people to become active contributors to society. Based in Mysore, Karnataka, India, we work at the intersection of education, social service, and youth development.</p>
              <p>Our organization provides a platform for students and young professionals to gain real-world experience, develop leadership skills, and make meaningful contributions to their communities.</p>
            </div>
            <div className="about-intro-visual">
              <div className="about-img-placeholder">
                <span>🏛️</span>
                <p>Established in Mysore, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section regions-section">
        <div className="container">
          <h2 className="section-title">Our Reach</h2>
          <p className="section-subtitle">Making an impact across India, starting from Karnataka</p>
          <div className="regions-grid">
            <div className="region-card"><FaGlobeAsia className="region-icon" /><h3>India</h3><p>Primary country of operation with focus on Karnataka state</p></div>
            <div className="region-card"><FaGlobeAsia className="region-icon" /><h3>Karnataka</h3><p>Headquartered in Mysore with activities across the state</p></div>
            <div className="region-card"><FaGlobeAsia className="region-icon" /><h3>Expanding</h3><p>Plans to extend our programs to other states in India</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Areas of Work</h2>
          <p className="section-subtitle">Our three core areas that drive social transformation</p>
          <div className="areas-grid">
            <div className="area-card"><FaBookOpen className="area-icon" /><h3>Education</h3><p>Supporting students with mentorship, skill development workshops, and academic guidance aligned with AICTE/NAAC standards.</p></div>
            <div className="area-card"><FaHandsHelping className="area-icon" /><h3>Social Service</h3><p>Organizing community service events, helping underprivileged sections, and promoting volunteerism among youth.</p></div>
            <div className="area-card"><FaBullhorn className="area-icon" /><h3>Awareness Programs</h3><p>Conducting awareness campaigns on health, environment, digital literacy, and social issues affecting communities.</p></div>
          </div>
        </div>
      </section>

      <section className="section vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <FaQuoteLeft className="vm-quote" />
              <h3>Our Vision</h3>
              <p>"To empower youth and create positive social change"</p>
              <span className="vm-label">What we aspire to achieve</span>
            </div>
            <div className="vm-card mission-card">
              <FaQuoteLeft className="vm-quote" />
              <h3>Our Mission</h3>
              <p>"Provide opportunities for students to gain real-world experience and contribute to society"</p>
              <span className="vm-label">How we work towards our vision</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Founder & President</h2>
          <p className="section-subtitle">The visionary behind Youth 4 Impact Trust</p>
          <div className="founder-card">
            <div className="founder-avatar"><span>FP</span></div>
            <div className="founder-info">
              <h3>Founder Name</h3>
              <span className="founder-role">Founder & President</span>
              <p>A passionate social worker and educator dedicated to empowering youth through meaningful opportunities. With a vision to bridge the gap between education and real-world impact, the founder established Youth 4 Impact Trust to create a platform where young people can grow, learn, and contribute to society.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section trustees-section">
        <div className="container">
          <h2 className="section-title">Our Trustees</h2>
          <p className="section-subtitle">The dedicated team guiding our organization</p>
          <div className="trustees-grid">
            {trustees.map((trustee, index) => (
              <div className="trustee-card" key={index}>
                <div className="trustee-avatar"><span>{trustee.initials}</span></div>
                <h4>{trustee.name}</h4>
                <p>{trustee.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
