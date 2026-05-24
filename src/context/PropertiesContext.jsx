import { createContext, useContext, useState, useEffect } from 'react';
import { DEFAULT_PROPERTIES } from '../data/properties';

const PropertiesContext = createContext(null);

export function PropertiesProvider({ children }) {
  const [properties, setProperties] = useState(() => {
    try {
      const stored = localStorage.getItem('beny_properties');
      if (stored) {
        const parsed = JSON.parse(stored);
        // Migrate old USD prices
        if (parsed.length > 0 && parsed[0].price < 1000000) {
          localStorage.removeItem('beny_properties');
          return DEFAULT_PROPERTIES;
        }
        return parsed;
      }
    } catch (_) {}
    return DEFAULT_PROPERTIES;
  });

  const [inquiries, setInquiries] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('beny_inquiries') || '[]');
    } catch (_) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('beny_properties', JSON.stringify(properties));
  }, [properties]);

  useEffect(() => {
    localStorage.setItem('beny_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const addProperty = (prop) =>
    setProperties((prev) => [...prev, { ...prop, id: 'prop-' + Date.now() }]);

  const updateProperty = (updated) =>
    setProperties((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));

  const deleteProperty = (id) =>
    setProperties((prev) => prev.filter((p) => p.id !== id));

  const addInquiry = (inq) =>
    setInquiries((prev) => [...prev, { ...inq, id: 'inq-' + Date.now(), date: new Date().toISOString() }]);

  const deleteInquiry = (id) =>
    setInquiries((prev) => prev.filter((i) => i.id !== id));

  return (
    <PropertiesContext.Provider
      value={{ properties, inquiries, addProperty, updateProperty, deleteProperty, addInquiry, deleteInquiry }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

export const useProperties = () => useContext(PropertiesContext);
