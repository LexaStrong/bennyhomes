import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">BENY <em>HOMES</em></Link>
          <p>We are passionate about helping families find their dream homes in Ghana. Contact us 0246908872.</p>
        </div>
        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Regions</h4>
            <button onClick={() => scrollTo('properties')}>Tema Communities</button>
            <button onClick={() => scrollTo('properties')}>Accra Spintex</button>
            <button onClick={() => scrollTo('properties')}>East Legon</button>
            <button onClick={() => scrollTo('properties')}>Cantonments</button>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <a href="https://www.tiktok.com/@bennyhomesgh" target="_blank" rel="noreferrer">TikTok @bennyhomesgh</a>
            <a href="https://www.facebook.com/bernard.awuley.7/" target="_blank" rel="noreferrer">FB: bernard.awuley.7</a>
            <a href="tel:0246908872">Phone: 0246908872</a>
            <a href="https://wa.me/233246908872" target="_blank" rel="noreferrer">WhatsApp Chat</a>
          </div>
          <div className="footer-col">
            <h4>Portal</h4>
            <Link to="/admin">Admin Dashboard</Link>
            <button onClick={() => scrollTo('contact')}>Submit Inquiry</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Beny Homes. All rights reserved. Registered in Ghana.</span>
        <span>Designed with ♥ for Ghanaian families</span>
      </div>
    </footer>
  );
}
