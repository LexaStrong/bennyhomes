import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isDetail = location.pathname.startsWith('/property/');
  const isAdmin = location.pathname === '/admin';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const forceLight = isDetail || isAdmin;
  const navClass = `navbar ${forceLight || scrolled ? 'scrolled' : 'transparent'} ${forceLight ? 'light' : ''}`;

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // Wait slightly for navigation/render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={navClass}>
        <Link to="/" className="nav-logo">
          <img src="/assets/logo.png" alt="Beny Homes Logo" className="nav-logo-img" />
        </Link>

        <ul className="nav-links">
          <li><button onClick={() => scrollTo('properties')}>Properties</button></li>
          <li><button onClick={() => scrollTo('about')}>About</button></li>
          <li><button onClick={() => scrollTo('services')}>Services</button></li>
          <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
          <li><Link to="/admin" className="nav-cta">Admin Portal</Link></li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
        <button onClick={() => scrollTo('properties')}>Properties</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('services')}>Services</button>
        <button onClick={() => scrollTo('contact')}>Contact</button>
        <Link to="/admin">Admin Portal</Link>
      </div>
    </>
  );
}
