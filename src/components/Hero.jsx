import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const slides = [
  { image: '/assets/hero-villa.png', label: 'Accra Spintex Collection' },
  { image: '/assets/luxury-interior.png', label: 'Tema Community Homes' },
  { image: '/assets/property-townhouse.png', label: 'Premium Developments' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const go = (i) => {
    setCurrent(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides">
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <img src={s.image} alt={s.label} />
          </div>
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">— Tema &amp; Accra Spintex, Ghana</p>
        <h1>
          HOMES THAT<br />
          <span className="hero-accent">INSPIRE</span>
        </h1>
        <p className="hero-sub">
          We are passionate about helping families find their dream homes in Ghana.
          Premium properties in Tema, Accra Spintex and beyond.
        </p>
        <div className="hero-btns">
          <a href="#properties" className="btn-hero-primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View Properties &nbsp;→
          </a>
          <a href="#contact" className="btn-hero-ghost" onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Contact Us &nbsp;→
          </a>
        </div>
      </div>

      <div className="hero-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      <div className="hero-slide-label">{slides[current].label}</div>
    </section>
  );
}
