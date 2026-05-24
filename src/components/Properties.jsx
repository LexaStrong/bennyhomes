import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProperties } from '../context/PropertiesContext';
import { formatPrice } from '../data/properties';
import { MapPin } from 'lucide-react';
import './Properties.css';

export default function Properties() {
  const { properties } = useProperties();
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  const areas = ['All', 'Spintex', 'Tema'];
  const filtered = filter === 'All' ? properties : properties.filter((p) => p.area === filter);

  return (
    <section className="properties-section" id="properties">
      <div className="properties-header">
        <div>
          <p className="section-eyebrow">Featured Properties</p>
          <h2 className="section-title">SPACES CRAFTED<br />WITH PURPOSE</h2>
        </div>
        <div className="properties-controls">
          <div className="filter-tabs">
            {areas.map((a) => (
              <button
                key={a}
                className={`filter-tab ${filter === a ? 'active' : ''}`}
                onClick={() => setFilter(a)}
              >
                {a}
              </button>
            ))}
          </div>
          <button className="view-all-btn" onClick={() => document.getElementById('properties')?.scrollIntoView()}>
            View All Properties →
          </button>
        </div>
      </div>

      <div className="property-grid">
        {filtered.map((prop) => (
          <div className="property-card" key={prop.id} onClick={() => navigate(`/property/${prop.id}`)}>
            <div className="card-img-wrap">
              <img src={prop.image} alt={prop.title} />
              <span className="card-badge">{prop.tag}</span>
            </div>
            <div className="card-body">
              <div className="card-top">
                <span className="card-area">{prop.area}</span>
                <span className="card-arrow">→</span>
              </div>
              <h3 className="card-title">{prop.title}</h3>
              <p className="card-location">
                <MapPin size={14} color="#b3842b" style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
                {prop.location}
              </p>
              <div className="card-meta">
                <span>{prop.beds} Bed</span>
                <span>{prop.baths} Bath</span>
                <span>{prop.size}</span>
              </div>
              <div className="card-price">
                <span className="price-sym">GH₵</span>
                <span className="price-num">{Number(prop.price).toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
