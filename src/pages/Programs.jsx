import { Link } from 'react-router-dom'
import { FaCheckCircle, FaCertificate, FaUsers, FaCompass, FaLeaf, FaUserGraduate, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa'
import './Programs.css'

function Programs() {
  const activities = [
    { icon: <FaCompass />, title: 'Social Awareness Programs', desc: 'Campaigns on health, hygiene, digital literacy, and social issues' },
    { icon: <FaLeaf />, title: 'Environmental Activities', desc: 'Tree plantation, clean drives, and sustainability awareness' },
    { icon: <FaUserGraduate />, title: 'Student Development Programs', desc: 'Workshops, seminars, and skill-building sessions' },
    { icon: <FaHandHoldingHeart />, title: 'Community Outreach', desc: 'Helping underprivileged communities and organizing service events' },
  ]

  return (
    <div className="programs-page">
      <section className="page-header">
        <div className="container">
          <h1>Our Activities & Vision</h1>
          <p>Programs designed to empower youth and create meaningful social impact</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Aligned with Excellence</h2>
          <p className="section-subtitle">Our activities are designed to complement institutional requirements</p>
          <div className="aligned-grid">
            <div className="aligned-card">
              <div className="aligned-badge">AICTE / NAAC</div>
              <h3>Aligned Activities</h3>
              <p>Our programs are structured to support AICTE and NAAC requirements, helping institutions meet their social responsibility criteria.</p>
              <ul><li><FaCheckCircle /> Community engagement programs</li><li><FaCheckCircle /> Social responsibility initiatives</li><li><FaCheckCircle /> Student participation records</li><li><FaCheckCircle /> Documentation & certificates</li></ul>
            </div>
            <div className="aligned-card">
              <div className="aligned-badge acp">ACP Activities</div>
              <h3>ACP Support</h3>
              <p>We provide comprehensive support for Activity Credit Points through organized events and verified participation certificates.</p>
              <ul><li><FaCheckCircle /> Structured activity programs</li><li><FaCheckCircle /> Credit-worthy participation</li><li><FaCheckCircle /> Proper documentation</li><li><FaCheckCircle /> Institutional coordination</li></ul>
            </div>
            <div className="aligned-card">
              <div className="aligned-badge mac">MAC Activities</div>
              <h3>MAC Support</h3>
              <p>Supporting Mandatory Activity Credits through diverse programs covering social service and community development.</p>
              <ul><li><FaCheckCircle /> Diverse activity options</li><li><FaCheckCircle /> Regular event scheduling</li><li><FaCheckCircle /> Verified attendance</li><li><FaCheckCircle /> Completion certificates</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section activities-section">
        <div className="container">
          <h2 className="section-title">Our Activities</h2>
          <p className="section-subtitle">Diverse programs designed for holistic youth development</p>
          <div className="activities-grid">
            {activities.map((a, i) => (
              <div className="activity-card" key={i}>
                <div className="activity-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">What We Provide</h2>
          <p className="section-subtitle">Complete support for your participation journey</p>
          <div className="provide-grid">
            <div className="provide-card"><FaCompass className="provide-icon" /><h3>Guidance</h3><p>Expert guidance on choosing the right activities and maximizing your learning experience.</p></div>
            <div className="provide-card"><FaUsers className="provide-icon" /><h3>Participation Support</h3><p>Complete support throughout your participation including registration and coordination.</p></div>
            <div className="provide-card"><FaCertificate className="provide-icon" /><h3>Certificates</h3><p>Official participation and completion certificates recognized by educational institutions.</p></div>
          </div>
        </div>
      </section>

      <section className="section programs-cta">
        <div className="container">
          <div className="programs-cta-content">
            <h2>Ready to Participate?</h2>
            <p>Register now to join our upcoming activities and earn certificates while making a real difference.</p>
            <Link to="/contact" className="btn btn-primary">Register Now <FaArrowRight /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
