import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VoiceListPage from './pages/VoiceListPage';
import SalonInfoPage from './pages/SalonInfoPage';
import BlogListPage from './pages/BlogListPage';
import FAQListPage from './pages/FAQListPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="voice" element={<VoiceListPage />} />
          <Route path="salons" element={<SalonInfoPage />} />
          <Route path="blog" element={<BlogListPage />} />
          <Route path="faq" element={<FAQListPage />} />
          {/* We will add other pages here later */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
