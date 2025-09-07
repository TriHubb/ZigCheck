import { useEffect, useRef } from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  const { t } = useTranslation('home');

  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const refs = [heroRef, featuresRef, aboutRef];
    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="home-page">
      <div className="hero-section-wrapper" id="home-content" ref={heroRef}>
        <h1>
          <Trans
            i18nKey="home_title"
            components={{ 1: <span className="gradient-blue" /> }}
            ns="home"
          />
        </h1>
        <p className="center-text">{t('home_description')}</p>
        <Link to="/validate" className="transpatent-btn">{t('try_now')}</Link>
      </div>
      <div className="features-section-wrapper" id="features-content" ref={featuresRef}>
        <h1>{t('features_title')}</h1>
        <div className="grid-container">
          <div className="grid-item">
            <h2>{t('feature_1_title')}</h2>
            <p>{t('feature_1_description')}</p>
          </div>
          <div className="grid-item">
            <h2>{t('feature_2_title')}</h2>
            <p>{t('feature_2_description')}</p>
          </div>
          <div className="grid-item">
            <h2>{t('feature_3_title')}</h2>
            <p>{t('feature_3_description')}</p>
          </div>
          <div className="grid-item">
            <h2>{t('feature_4_title')}</h2>
            <p>{t('feature_4_description')}</p>
          </div>
        </div>
      </div>
      <div className="about-section-wrapper" id="about-content" ref={aboutRef}>
        <h1>{t('about_title')}</h1>
        <div className="normal-text">
          <p>{t('about_description_1')}</p>
          <p>{t('about_description_2')}</p>
          <p>{t('about_description_3')}</p>
        </div>
        <div className="grid-btn-container">
          <a href="https://github.com/TriHubb/ZigCheck" className="transpatent-btn grid-btn"><FontAwesomeIcon icon={['fab', 'github']} /> {t('github_button')}</a>
          <a href="https://WIP" className="transpatent-btn grid-btn">{t('form_button')}</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
