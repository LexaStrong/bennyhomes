import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProperties } from '../context/PropertiesContext';
import Footer from '../components/Footer';
import { ArrowLeft, MapPin, MessageCircle, Send, BedDouble, Bath, Maximize, ArrowRight } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import './PropertyPage.css';

export default function PropertyPage() {
  const { id } = useParams();
  const { properties, addInquiry } = useProperties();
  const navigate = useNavigate();
  const prop = properties.find((p) => p.id === id);

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // Set up dynamic SEO/AEO/GEO values safely
  const seoData = prop ? {
    title: `${prop.title} in ${prop.location} — Beny Homes`,
    description: `Explore this stunning ${prop.beds} Bed, ${prop.baths} Bath property (${prop.size}) for ${prop.type === 'sale' ? 'sale' : 'rent'} in ${prop.location}, Ghana. Price: GH₵ ${Number(prop.price).toLocaleString()}. Contact Bernard Awuley.`,
    ogTitle: `${prop.title} | Beny Homes Ghana`,
    ogDescription: prop.description,
    ogImage: prop.image,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SingleFamilyResidence',
      'name': prop.title,
      'image': prop.image,
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': prop.location,
        'addressRegion': prop.area,
        'addressCountry': 'Ghana'
      },
      'offers': {
        '@type': 'Offer',
        'priceCurrency': 'GHS',
        'price': prop.price,
        'url': window.location.href,
        'availability': 'https://schema.org/InStock'
      },
      'numberOfBedrooms': prop.beds,
      'numberOfBathroomsTotal': prop.baths,
      'description': prop.description
    }
  } : {
    title: 'Property Not Found — Beny Homes',
    description: 'The requested property could not be found in our Ghana real estate portfolio.'
  };

  useSEO(seoData);

  if (!prop) {
    return (
      <div className="prop-not-found">
        <h2>Property not found</h2>
        <button onClick={() => navigate('/')}>
          <ArrowLeft size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Back to listings
        </button>
      </div>
    );
  }

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    addInquiry({ ...form, interest: `Inquiry on: ${prop.title}` });
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: `I'm interested in: ${prop.title} (${prop.location}).` });
    setTimeout(() => setSent(false), 5000);
  };

  // Find previous and next property IDs for smooth browsing navigation
  const currentIndex = properties.findIndex((p) => p.id === id);
  const prevProp = properties[currentIndex - 1] || properties[properties.length - 1];
  const nextProp = properties[currentIndex + 1] || properties[0];

  // Select up to 3 similar listings matching the same area (or fall back to others)
  const similarListings = properties
    .filter((p) => p.id !== id)
    .sort((a, b) => {
      if (a.area === prop.area && b.area !== prop.area) return -1;
      if (a.area !== prop.area && b.area === prop.area) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <>
      <div className="prop-detail-page">
        {/* Back bar */}
        <div className="detail-back-bar">
          <button className="back-btn" onClick={() => navigate('/')}>
            <ArrowLeft size={16} style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }} />
            Back to Portfolio
          </button>

          <div className="detail-nav-controls">
            <button className="detail-nav-btn" onClick={() => navigate(`/property/${prevProp.id}`)}>
              <ArrowLeft size={14} style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
              Prev Property
            </button>
            <span className="detail-nav-separator">|</span>
            <button className="detail-nav-btn" onClick={() => navigate(`/property/${nextProp.id}`)}>
              Next Property
              <ArrowRight size={14} style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
            </button>
          </div>

          <span className="back-area">{prop.area} Collection</span>
        </div>

        {/* Hero image */}
        <div className="detail-hero-img">
          <img src={prop.image} alt={prop.title} />
          <span className="detail-badge">{prop.tag}</span>
        </div>

        {/* Content grid */}
        <div className="detail-content-grid">
          {/* Left column */}
          <div className="detail-main">
            <p className="detail-eyebrow">{prop.area} · {prop.type === 'sale' ? 'For Sale' : 'For Rent'}</p>
            <h1 className="detail-title">{prop.title}</h1>
            <p className="detail-location">
              <MapPin size={16} color="#b3842b" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }} />
              {prop.location}
            </p>

            <div className="detail-price-row">
              <span className="dp-sym">GH₵</span>
              <span className="dp-num">{Number(prop.price).toLocaleString()}</span>
            </div>

            <div className="detail-specs">
              <div className="detail-spec">
                <BedDouble size={24} color="#b3842b" style={{ marginBottom: '8px' }} />
                <strong>{prop.beds}</strong><label>Bedrooms</label>
              </div>
              <div className="detail-spec">
                <Bath size={24} color="#b3842b" style={{ marginBottom: '8px' }} />
                <strong>{prop.baths}</strong><label>Bathrooms</label>
              </div>
              <div className="detail-spec">
                <Maximize size={24} color="#b3842b" style={{ marginBottom: '8px' }} />
                <strong>{prop.size}</strong><label>Total Area</label>
              </div>
            </div>

            <div className="detail-description">
              <h3>Property Description</h3>
              <p>{prop.description}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            <div className="agent-card">
              <div className="agent-monogram">BA</div>
              <h4>Bernard Awuley</h4>
              <p className="agent-role">Lead Broker, Beny Homes</p>
              <p className="agent-quote">"We are passionate about helping families find their dream homes in Ghana."</p>
            </div>

            {sent && <div className="form-success">✓ Inquiry sent! Bernard will reach out shortly.</div>}
            <form className="inq-form" onSubmit={submit}>
              <div className="form-group">
                <label>Name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="0XX XXX XXXX" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4} required />
              </div>
              <button type="submit" className="inq-submit">
                Submit Inquiry &nbsp;
                <Send size={14} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
              </button>
            </form>

            <a
              href={`https://wa.me/233246908872?text=Hello%20Beny%20Homes%2C%20I'm%20interested%20in%20${encodeURIComponent(prop.title)}.`}
              target="_blank"
              rel="noreferrer"
              className="wa-btn"
            >
              <MessageCircle size={16} style={{ marginRight: '8px', display: 'inline-block', verticalAlign: 'middle' }} />
              Contact via WhatsApp
            </a>
          </aside>
        </div>

        {/* Similar Listings Section */}
        <section className="similar-listings-section">
          <div className="similar-inner">
            <p className="section-eyebrow">Recommendations</p>
            <h2 className="similar-title">SIMILAR LISTINGS</h2>
            <div className="property-grid">
              {similarListings.map((similar) => (
                <div
                  className="property-card"
                  key={similar.id}
                  onClick={() => navigate(`/property/${similar.id}`)}
                >
                  <div className="card-img-wrap">
                    <img src={similar.image} alt={similar.title} />
                    <span className="card-badge">{similar.tag}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-top">
                      <span className="card-area">{similar.area}</span>
                      <span className="card-arrow">→</span>
                    </div>
                    <h3 className="card-title">{similar.title}</h3>
                    <p className="card-location">
                      <MapPin size={14} color="#b3842b" style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
                      {similar.location}
                    </p>
                    <div className="card-meta">
                      <span>{similar.beds} Bed</span>
                      <span>{similar.baths} Bath</span>
                      <span>{similar.size}</span>
                    </div>
                    <div className="card-price">
                      <span className="price-sym">GH₵</span>
                      <span className="price-num">{Number(similar.price).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
