import './Gallery.css'

function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Social Awareness Campaign', category: 'Events', emoji: '📢' },
    { id: 2, title: 'Tree Plantation Drive', category: 'Environment', emoji: '🌳' },
    { id: 3, title: 'Student Workshop', category: 'Education', emoji: '📚' },
    { id: 4, title: 'Community Service', category: 'Service', emoji: '🤝' },
    { id: 5, title: 'Youth Leadership Camp', category: 'Training', emoji: '🏕️' },
    { id: 6, title: 'Blood Donation Camp', category: 'Health', emoji: '🩸' },
    { id: 7, title: 'Cultural Event', category: 'Events', emoji: '🎭' },
    { id: 8, title: 'Clean India Drive', category: 'Environment', emoji: '🧹' },
    { id: 9, title: 'Career Guidance Session', category: 'Education', emoji: '🎯' },
    { id: 10, title: 'Volunteer Meet', category: 'Community', emoji: '👥' },
    { id: 11, title: 'Health Awareness', category: 'Health', emoji: '💚' },
    { id: 12, title: 'Certificate Distribution', category: 'Events', emoji: '🏆' },
  ]

  return (
    <div className="gallery-page">
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Moments captured from our activities, events, and community programs</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Moments</h2>
          <p className="section-subtitle">A glimpse into the activities and events organized by Youth 4 Impact Trust</p>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <div className="gallery-item" key={item.id}>
                <div className="gallery-img-placeholder">
                  <span className="gallery-emoji">{item.emoji}</span>
                </div>
                <div className="gallery-overlay">
                  <span className="gallery-category">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
