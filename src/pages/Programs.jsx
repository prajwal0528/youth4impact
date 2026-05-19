import { useEffect } from 'react'
import { FaCheckCircle, FaCertificate, FaUsers, FaCompass, FaLeaf, FaUserGraduate, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa'
import './Programs.css'

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

function Programs() {
  useReveal()

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
          <h1 className="fade-in-up">Our Activities & Vision</h1>
          <p className="fade-in">Programs designed to empower youth and create meaningful social impact</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title reveal">Aligned with Excellence</h2>
          <p className="section-subtitle reveal reveal-delay-1">Our activities are designed to complement institutional requirements</p>
          <div className="aligned-grid">
            <div className="aligned-card reveal reveal-delay-1">
              <div className="aligned-badge">AICTE / NAAC</div>
              <h3>Aligned Activities</h3>
              <p>Our programs are structured to support AICTE and NAAC requirements, helping institutions meet their social responsibility criteria.</p>
              <ul>
                <li><FaCheckCircle /> Community engagement programs</li>
                <li><FaCheckCircle /> Social responsibility initiatives</li>
                <li><FaCheckCircle /> Student participation records</li>
                <li><FaCheckCircle /> Documentation & certificates</li>
              </ul>
            </div>
            <div className="aligned-card reveal reveal-delay-2">
              <div className="aligned-badge acp">Social Activities</div>
              <h3>Community Programs</h3>
              <p>Organizing cleanliness drives, food distribution programs, public awareness campaigns, village development initiatives, and community welfare activities.</p>
              <ul>
                <li><FaCheckCircle /> Cleanliness drives</li>
                <li><FaCheckCircle /> Food distribution programs</li>
                <li><FaCheckCircle /> Public awareness campaigns</li>
                <li><FaCheckCircle /> Village development initiatives</li>
              </ul>
            </div>
            <div className="aligned-card reveal reveal-delay-3">
              <div className="aligned-badge mac">Educational Support</div>
              <h3>Student Development</h3>
              <p>Helping government school students through books, bags, digital learning, smart classrooms, computer education, scholarships, and skill development support.</p>
              <ul>
                <li><FaCheckCircle /> Books, bags & digital learning</li>
                <li><FaCheckCircle /> Smart classrooms & computer education</li>
                <li><FaCheckCircle /> Scholarships & skill development</li>
                <li><FaCheckCircle /> Government school outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section activities-section">
        <div className="container">
          <h2 className="section-title reveal">Our Activities</h2>
          <p className="section-subtitle reveal reveal-delay-1">Diverse programs designed for holistic youth development</p>
          <div className="activities-grid">
            {activities.map((a, i) => (
              <div className={`activity-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
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
          <h2 className="section-title reveal">What We Provide</h2>
          <p className="section-subtitle reveal reveal-delay-1">Complete support for your participation journey</p>
          <div className="provide-grid">
            <div className="provide-card reveal reveal-delay-1"><FaCompass className="provide-icon" /><h3>Guidance</h3><p>Expert guidance on choosing the right activities and maximizing your learning experience.</p></div>
            <div className="provide-card reveal reveal-delay-2"><FaUsers className="provide-icon" /><h3>Participation Support</h3><p>Complete support throughout your participation including registration and coordination.</p></div>
            <div className="provide-card reveal reveal-delay-3"><FaCertificate className="provide-icon" /><h3>Certificates</h3><p>Official participation and completion certificates recognized by educational institutions.</p></div>
          </div>
        </div>
      </section>

      <section className="section programs-cta">
        <div className="container">
          <div className="programs-cta-content reveal">
            <h2>Ready to Participate?</h2>
            <p>Register now to join our upcoming activities and earn certificates while making a real difference.</p>
            <a href="https://forms.gle/uaNaz9K8afnBjxyn8" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register Now <FaArrowRight /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs