import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import TransportPage from './pages/TransportPage';
import DirectionsPage from './pages/DirectionsPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import FaqPage from './pages/FaqPage';
import DocumentsPage from './pages/DocumentsPage';
import ContactsPage from './pages/ContactsPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pilomaterialy/" element={<ServicePage />} />
          <Route path="/oborudovanie/" element={<ServicePage />} />
          <Route path="/refrizherator/" element={<ServicePage />} />
          <Route path="/negabarit/" element={<ServicePage />} />
          <Route path="/tnp/" element={<ServicePage />} />
          <Route path="/himiya/" element={<ServicePage />} />
          <Route path="/vykup/" element={<ServicePage />} />
          <Route path="/transport/" element={<TransportPage />} />
          <Route path="/napravleniya/" element={<DirectionsPage />} />
          <Route path="/kak-rabotaem/" element={<HowWeWorkPage />} />
          <Route path="/faq/" element={<FaqPage />} />
          <Route path="/dokumenty/" element={<DocumentsPage />} />
          <Route path="/kontakty/" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
