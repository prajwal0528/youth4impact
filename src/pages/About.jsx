import { FaGlobeAsia, FaBookOpen, FaHandsHelping, FaBullhorn, FaQuoteLeft } from 'react-icons/fa'
import './About.css'

function About() {
  const trustees = [
    { name: 'Ullasgowda N M', initials: 'UN' },
    { name: 'Prajwal S', initials: 'PS' },
    { name: 'Preetham B', initials: 'PB' },
    { name: 'Jnanesh K H', initials: 'JK' },
    { name: 'Yashwanth S N', initials: 'YS' },
  ]

  const marketingTeam = [
    { name: 'Mohammed Ahmed', initials: 'MA' },
    { name: 'Mohit R', initials: 'MR' },
    { name: 'Nawaz Ur Rahman Khan', initials: 'NK' },
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

      <section className="section trustees-section">
        <div className="container">
          <h2 className="section-title">Our Trustees</h2>
          <p className="section-subtitle">The dedicated team guiding our organization</p>
          <div className="trustees-grid">
            {trustees.map((trustee, index) => (
              <div className="trustee-card" key={index}>
                <div className="trustee-avatar"><span>{trustee.initials}</span></div>
                <h4>{trustee.name}</h4>
                <p>Trustee {index + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section marketing-section">
        <div className="container">
          <h2 className="section-title">Our Marketing Team</h2>
          <p className="section-subtitle">The team spreading our mission and growing our community</p>
          <div className="trustees-grid">
            {marketingTeam.map((member, index) => (
              <div className="trustee-card" key={index}>
                <div className="trustee-avatar marketing-avatar"><span>{member.initials}</span></div>
                <h4>{member.name}</h4>
                <p>Marketing Team</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About