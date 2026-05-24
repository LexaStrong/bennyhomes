import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { PropertiesProvider } from './context/PropertiesContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropertyPage from './pages/PropertyPage';
import Admin from './pages/Admin';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <PropertiesProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <SpeedInsights />
      </Router>
    </PropertiesProvider>
  );
}
