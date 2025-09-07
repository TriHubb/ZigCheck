import './Login.css'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Login() {
  const { t } = useTranslation('login');
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <div className="login">
      <h1 class="gradient-black">{t('login_greeting')}</h1>
      <p class="subheader">{t('login_description')}</p>
      <div class="quick-login-container">
        <a href="https://google.com" class="quick-login-btn">
          <FontAwesomeIcon icon={['fab', 'google']} />
          {t('login_with_google')}
        </a>
        <a href="https://github.com" class="quick-login-btn">
          <FontAwesomeIcon icon={['fab', 'github']} />
          {t('login_with_github')}
        </a>
      </div>
      <span>{t('or')}</span>
      <div class="input-container">
        <div class="input-group">
          <p>{t('email')}</p>
          <input type="text" placeholder="example@email.com" />
        </div>
        <div class="input-group">
          <p>{t('password')}</p>
          <input type="password" placeholder="password" />
        </div>
      </div>

      <p>{t('no_account')} <Link to="/signup" className="signup-link">{t('signup_now')}</Link></p>
      <Link to={from} className="quick-login-btn black-btn">{t('signin')}</Link>
    </div>
  );
}

export default Login;
