import { Link } from 'react-router-dom'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <div className="logo-placeholder-sm">Y4I</div>
              <h3>Youth 4 Impact Trust</h3>
            </div>
            <p>Empowering youth to create positive social change through education, awareness, and community service.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Focus</h4>
            <ul>
              <li>Education Support</li>
              <li>Social Activities</li>
              <li>Youth Empowerment</li>
              <li>Awareness Programs</li>
              <li>Community Outreach</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-list">
              <li><FaPhone /> 7204103615 / 8139969417</li>
              <li><FaPhone /> 6362440257</li>
              <li><FaMapMarkerAlt /> Mysore, Karnataka, India</li>
              <li><FaEnvelope /> youth4impact@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Youth 4 Impact Trust. Made with <FaHeart className="heart-icon" /> for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
