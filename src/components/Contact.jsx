import { useState } from 'react';
import { useProperties } from '../context/PropertiesContext';
import { Phone, Music, Smartphone, MessageCircle, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { addInquiry } = useProperties();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    addInquiry({ ...form, interest: 'General Inquiry' });
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="contact-title">
            SCHEDULE A<br /><span className="contact-accent">VIEWING</span>
          </h2>
          <p className="contact-body">
            We are passionate about helping families find their dream homes in Ghana.
            Reach out to Bernard Awuley directly and let's find your perfect property.
          </p>
          <div className="contact-details">
            <a href="tel:0246908872" className="contact-detail-row">
              <span className="detail-icon">
                <Phone size={18} color="#b3842b" />
              </span>
              <div>
                <strong>Phone / WhatsApp</strong>
                <span>0246908872</span>
              </div>
            </a>
            <a href="https://www.tiktok.com/@bennyhomesgh" target="_blank" rel="noreferrer" className="contact-detail-row">
              <span className="detail-icon">
                <Music size={18} color="#b3842b" />
              </span>
              <div>
                <strong>TikTok</strong>
                <span>@bennyhomesgh</span>
              </div>
            </a>
            <div className="contact-detail-row">
              <span className="detail-icon">
                <Smartphone size={18} color="#b3842b" />
              </span>
              <div>
                <strong>Socials</strong>
                <span>@bennyhomesgh · @bernardawuley</span>
              </div>
            </div>
          </div>
          <a
            href="https://wa.me/233246908872?text=Hello%20Beny%20Homes%2C%20I'm%20interested%20in%20your%20properties."
            target="_blank"
            rel="noreferrer"
            className="whatsapp-cta"
          >
            <MessageCircle size={18} style={{ marginRight: '8px' }} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-form-col">
          {sent && (
            <div className="form-success">
              ✓ Message sent! Bernard will contact you shortly.
            </div>
          )}
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={handle} placeholder="Your number" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us about your property needs…" required />
            </div>
            <button type="submit" className="submit-btn">
              Send Message &nbsp;
              <Send size={14} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
