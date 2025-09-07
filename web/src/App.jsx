import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Validate from './pages/Validate'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation('common');
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home-content');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['home-content', 'features-content', 'about-content'];
      const headerOffset = 90;
      const scrollPosition = window.scrollY + headerOffset + 1;

      let currentSection = '';
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScrollEvent);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [location.pathname]);

  return (
    <div className="app">
      <div className="header">
        <Link to="/" className="logo">
          <img src="/ZigCheck.svg" className="logo" alt="ZigCheck logo" />
        </Link>

        {location.pathname === '/' && (
          <div className="header-nav">
            <button className={`nav-btn ${activeSection === 'home-content' ? 'active' : ''}`} onClick={() => handleScroll('home-content')}>{t('home')}</button>
            <button className={`nav-btn ${activeSection === 'features-content' ? 'active' : ''}`} onClick={() => handleScroll('features-content')}>{t('features')}</button>
            <button className={`nav-btn ${activeSection === 'about-content' ? 'active' : ''}`} onClick={() => handleScroll('about-content')}>{t('about')}</button>
          </div>
        )}

        <div className="header-btn user-btn">
          <Link to="/login" className="login-btn">{t('log_in')}</Link>
          <select className="language-selector" onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
            <option value="en">EN</option>
            <option value="ms">MS</option>
          </select>
        </div>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
