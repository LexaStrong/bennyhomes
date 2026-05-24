import { useState } from 'react';
import { useProperties } from '../context/PropertiesContext';
import useSEO from '../hooks/useSEO';
import './Admin.css';

export default function Admin() {
  const { properties, inquiries, addProperty, updateProperty, deleteProperty, deleteInquiry } = useProperties();
  const [activeTab, setActiveTab] = useState('listings');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProp, setEditingProp] = useState(null);

  useSEO({
    title: 'Admin Console — Beny Homes Studio',
    description: 'Manage property listings, client inquiries, and portfolio operations for Beny Homes Ghana.',
  });

  // Form states
  const [form, setForm] = useState({
    title: '',
    location: '',
    area: 'Spintex',
    price: '',
    image: '/assets/hero-villa.png',
    beds: '',
    baths: '',
    size: '',
    tag: '',
    description: '',
  });

  const openAdd = () => {
    setEditingProp(null);
    setForm({
      title: '',
      location: '',
      area: 'Spintex',
      price: '',
      image: '/assets/hero-villa.png',
      beds: '',
      baths: '',
      size: '',
      tag: '',
      description: '',
    });
    setModalOpen(true);
  };

  const openEdit = (prop) => {
    setEditingProp(prop);
    setForm({
      title: prop.title,
      location: prop.location,
      area: prop.area || 'Spintex',
      price: prop.price,
      image: prop.image,
      beds: prop.beds,
      baths: prop.baths,
      size: prop.size,
      tag: prop.tag || '',
      description: prop.description,
    });
    setModalOpen(true);
  };

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const save = (e) => {
    e.preventDefault();
    const data = {
      ...form,
      price: Number(form.price),
    };

    if (editingProp) {
      updateProperty({ ...data, id: editingProp.id });
    } else {
      addProperty(data);
    }
    setModalOpen(false);
  };

  const remove = (id) => {
    if (window.confirm('Are you sure you want to delete this property listing?')) {
      deleteProperty(id);
    }
  };

  const removeInquiry = (id) => {
    if (window.confirm('Are you sure you want to remove this client inquiry?')) {
      deleteInquiry(id);
    }
  };

  const totalValue = properties.reduce((acc, p) => acc + Number(p.price || 0), 0);

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <p className="admin-eyebrow">Console</p>
          <h1 className="admin-title">BENY HOMES STUDIO</h1>
          <p className="admin-subtitle">Add, edit, and manage luxury listings in Accra Spintex and Tema.</p>
        </div>
        <button className="add-listing-btn" onClick={openAdd}>
          + Create Listing
        </button>
      </header>

      {/* Stats row */}
      <div className="admin-stats-row">
        <div className="admin-stat-card">
          <span className="asc-label">Active Properties</span>
          <span className="asc-num">{properties.length}</span>
        </div>
        <div className="admin-stat-card">
          <span className="asc-label">Portfolio Value</span>
          <span className="asc-num">GH₵ {totalValue.toLocaleString()}</span>
        </div>
        <div className="admin-stat-card">
          <span className="asc-label">Pending Inquiries</span>
          <span className="asc-num">{inquiries.length}</span>
        </div>
      </div>

      {/* Tab select */}
      <nav className="admin-tabs" aria-label="Admin sections">
        <button
          className={`admin-tab-btn ${activeTab === 'listings' ? 'active' : ''}`}
          onClick={() => setActiveTab('listings')}
          aria-selected={activeTab === 'listings'}
        >
          Properties
        </button>
        <button
          className={`admin-tab-btn ${activeTab === 'inquiries' ? 'active' : ''}`}
          onClick={() => setActiveTab('inquiries')}
          aria-selected={activeTab === 'inquiries'}
        >
          Client Requests
        </button>
      </nav>

      {/* Content */}
      {activeTab === 'listings' ? (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Location</th>
                <th>Price</th>
                <th>Specs</th>
                <th>Tag</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((prop) => (
                <tr key={prop.id}>
                  <td>
                    <img src={prop.image} alt={prop.title} className="at-thumb" />
                  </td>
                  <td className="at-title">{prop.title}</td>
                  <td>📍 {prop.location}</td>
                  <td className="at-price">GH₵ {Number(prop.price).toLocaleString()}</td>
                  <td>
                    {prop.beds} Beds · {prop.baths} Baths · {prop.size}
                  </td>
                  <td>
                    <span className="at-tag">{prop.tag || 'Sale'}</span>
                  </td>
                  <td style={{ textAlign: 'right' }}>
                    <div className="at-actions">
                      <button className="at-btn-edit" onClick={() => openEdit(prop)}>
                        Edit
                      </button>
                      <button className="at-btn-del" onClick={() => remove(prop.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Client Name</th>
                <th>Contact</th>
                <th>Topic</th>
                <th>Message</th>
                <th style={{ textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                    No client requests at this moment.
                  </td>
                </tr>
              ) : (
                inquiries.map((inq) => (
                  <tr key={inq.id}>
                    <td style={{ fontSize: '0.8rem', color: '#888' }}>
                      {new Date(inq.date).toLocaleDateString()}
                    </td>
                    <td style={{ fontWeight: '600' }}>{inq.name}</td>
                    <td>
                      <div>✉️ {inq.email}</div>
                      {inq.phone && <div>📞 {inq.phone}</div>}
                    </td>
                    <td>
                      <span className="at-tag">{inq.interest}</span>
                    </td>
                    <td style={{ maxWidth: '300px', fontSize: '0.85rem', lineHeight: '1.4' }}>
                      {inq.message}
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="at-btn-del" onClick={() => removeInquiry(inq.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Form */}
      {modalOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Property form">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{editingProp ? 'Modify Listing' : 'Add Listing'}</h3>
              <button className="modal-close-btn" onClick={() => setModalOpen(false)} aria-label="Close modal">
                &times;
              </button>
            </div>
            <form onSubmit={save} className="admin-form">
              <div className="form-group">
                <label>Listing Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleInput}
                  placeholder="e.g. Modern Executive Villa"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Exact Location</label>
                  <input
                    name="location"
                    value={form.location}
                    onChange={handleInput}
                    placeholder="e.g. Accra Spintex, Ghana"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Region/Area</label>
                  <select name="area" value={form.area} onChange={handleInput}>
                    <option value="Spintex">Spintex</option>
                    <option value="Tema">Tema</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Price (GH₵)</label>
                  <input
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleInput}
                    placeholder="e.g. 5500000"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Image Upload</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setForm((prev) => ({ ...prev, image: reader.result }));
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: '0.4rem 0',
                      cursor: 'pointer'
                    }}
                  />
                  {form.image && (
                    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <img
                        src={form.image}
                        alt="Preview"
                        style={{
                          width: '60px',
                          height: '45px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          border: '1px solid #ddd'
                        }}
                      />
                      <span style={{ fontSize: '0.75rem', color: '#888', wordBreak: 'break-all' }}>
                        {form.image.startsWith('data:') ? 'Uploaded Image' : 'Default Asset'}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row-three">
                <div className="form-group">
                  <label>Bedrooms</label>
                  <input name="beds" value={form.beds} onChange={handleInput} placeholder="e.g. 5" required />
                </div>
                <div className="form-group">
                  <label>Bathrooms</label>
                  <input name="baths" value={form.baths} onChange={handleInput} placeholder="e.g. 6" required />
                </div>
                <div className="form-group">
                  <label>Size (Area)</label>
                  <input name="size" value={form.size} onChange={handleInput} placeholder="e.g. 450 sqm" required />
                </div>
              </div>

              <div className="form-group">
                <label>Listing Tag / Badge</label>
                <input
                  name="tag"
                  value={form.tag}
                  onChange={handleInput}
                  placeholder="e.g. Exclusive, Best Value"
                />
              </div>

              <div className="form-group">
                <label>Detailed Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleInput}
                  rows={4}
                  placeholder="Describe the architectural specifications, materials, and luxury features…"
                  required
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-save">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
