import './About.css';

const stats = [
  { num: '150+', label: 'Homes Handled' },
  { num: '8+', label: 'Years Active' },
  { num: '2', label: 'Key Regions' },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-img-col">
          <img src="/assets/property-apartment.png" alt="Beny Homes properties" className="about-img" />
          <div className="about-img-accent" />
        </div>
        <div className="about-text-col">
          <p className="section-eyebrow">Our Story</p>
          <h2 className="about-title">
            ARCHITECTURE<br />
            <span className="about-accent">DRIVEN BY PASSION</span><br />
            AND PRECISION
          </h2>
          <p className="about-body">
            Founded by Bernard Awuley, Beny Homes is a premium property agency focused on
            Tema Communities and Accra Spintex — two of Ghana's fastest-growing residential corridors.
          </p>
          <p className="about-body">
            We are passionate about helping families find their dream homes in Ghana.
            Every listing we handle is chosen for its build quality, location, and long-term value.
          </p>
          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="about-cta"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About Our Studio →
          </a>
        </div>
      </div>
    </section>
  );
}
