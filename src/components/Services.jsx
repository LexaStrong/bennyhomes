import './Services.css';

const services = [
  {
    icon: '🏘️',
    title: 'Tema Property Focus',
    body: 'Gated estate houses, single-family luxury residences, and investment lands in Tema Community 25, 18, and surrounding enclaves.',
  },
  {
    icon: '🏙️',
    title: 'Accra Spintex Focus',
    body: 'Executive apartments, modern duplex townhouses, and premium showroom properties on Spintex Road, Accra.',
  },
  {
    icon: '📈',
    title: 'Investment Advisory',
    body: 'High-yield real estate consulting for diaspora clients, secure land acquisition strategies, and property development guidance.',
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="section-eyebrow light">Our Services</p>
          <h2 className="services-title">EXCLUSIVE REAL<br />ESTATE SERVICES</h2>
          <p className="services-sub">
            Comprehensive care for property seekers, sellers, and developers across Ghana.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-body">{s.body}</p>
              <span className="service-arrow">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
