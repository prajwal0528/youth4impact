import { useState } from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaHeart, FaUserPlus, FaCalendarCheck } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch for queries, donations, memberships, or activity registrations</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <p>Have questions? Fill out the form and we'll get back to you shortly.</p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group"><label htmlFor="name">Full Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required /></div>
                <div className="form-group"><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required /></div>
                <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email address" required /></div>
                <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows="5" required></textarea></div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>

            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3>Contact Details</h3>
                <div className="contact-item"><FaPhone className="contact-icon" /><div><span>Phone</span><p>7204103615 / 8139969417</p><p>6362440257</p></div></div>
                <div className="contact-item"><FaMapMarkerAlt className="contact-icon" /><div><span>Location</span><p>Mysore, Karnataka, India</p></div></div>
                <div className="contact-item"><FaEnvelope className="contact-icon" /><div><span>Email</span><p>youth4impact@gmail.com</p></div></div>
              </div>
              <div className="map-placeholder"><div className="map-inner"><FaMapMarkerAlt className="map-pin" /><p>Mysore, Karnataka</p><span>Google Maps</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section donation-section">
        <div className="container">
          <div className="donation-card">
            <div className="donation-icon"><FaHeart /></div>
            <h2>Support Our Mission</h2>
            <p>Your contribution helps us empower more youth and create positive social change. Every donation, no matter the amount, makes a difference.</p>
            <p className="donation-note">You can donate any amount to support our programs and activities.</p>
            <button className="btn btn-secondary">Donate Now</button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="registration-grid">
            <div className="registration-card">
              <FaUserPlus className="reg-icon" />
              <h3>Membership Registration</h3>
              <p>Become a member of Youth 4 Impact Trust and be part of our growing community.</p>
              <ul><li>Access to all activities</li><li>Priority registration</li><li>Membership certificate</li><li>Networking opportunities</li></ul>
              <button className="btn btn-outline">Register as Member</button>
            </div>
            <div className="registration-card">
              <FaCalendarCheck className="reg-icon" />
              <h3>Activities Registration</h3>
              <p>Register for our upcoming activities, workshops, and community programs.</p>
              <ul><li>Social awareness programs</li><li>Environmental activities</li><li>Student development</li><li>Participation certificates</li></ul>
              <button className="btn btn-outline">Register for Activities</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
