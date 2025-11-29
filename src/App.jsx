import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Japanese pages
import Home from './pages/Home';
import PrivacyPolicy from './pages/PolicyDoc';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';
import About from "./pages/About"; 
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Brand from "./pages/Brand";

// English pages
import HomeEn from './pages_en/Home';
import PrivacyPolicyEn from './pages_en/PolicyDoc';
import TermsOfServiceEn from './pages_en/TermsOfService';
import ContactEn from './pages_en/Contact';
import AboutEn from "./pages_en/About"; 
import NewsEn from "./pages_en/News";
import NewsDetailEn from "./pages_en/NewsDetail";
import BrandEn from "./pages_en/Brand";

import './index.css';

// Component to set html lang attribute based on route
const HtmlLangSetter = () => {
  const location = useLocation();
  
  useEffect(() => {
    const isEnglish = location.pathname.startsWith('/en');
    document.documentElement.lang = isEnglish ? 'en' : 'ja';
  }, [location.pathname]);
  
  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HtmlLangSetter />
      <main className="flex-grow">
        <Routes>
          {/* Japanese Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/brand" element={<Brand />} />

          {/* English Routes */}
          <Route path="/en" element={<HomeEn />} />
          <Route path="/en/privacy-policy" element={<PrivacyPolicyEn />} />
          <Route path="/en/terms-of-service" element={<TermsOfServiceEn />} />
          <Route path="/en/contact" element={<ContactEn />} />
          <Route path="/en/about" element={<AboutEn />} />
          <Route path="/en/news" element={<NewsEn />} />
          <Route path="/en/news/:id" element={<NewsDetailEn />} />
          <Route path="/en/brand" element={<BrandEn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
