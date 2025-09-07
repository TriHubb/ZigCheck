import './Signup.css'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation, Trans } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

function Signup() {
  const { t } = useTranslation('signup');
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [password, setPassword] = useState('');
  const [passwordReminder, setPasswordError] = useState('');

  const validatePassword = (password) => {
    if (password.length < 8) {
      return t('password_error_length');
    }
    if (!/[A-Z]/.test(password)) {
      return t('password_error_uppercase');
    }
    if (!/[a-z]/.test(password)) {
      return t('password_error_lowercase');
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return t('password_error_special');
    }
    return '';
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError(validatePassword(newPassword));
  };

  return (
    <div className="signup">
      <h1 class="gradient-black">{t('signup_greeting')}</h1>
      <p class="subheader">{t('signup_description')}</p>
      <div class="quick-signup-container">
        <a href="https://google.com" class="quick-signup-btn">
          <FontAwesomeIcon icon={['fab', 'google']} />
          {t('google')}
        </a>
        <a href="https://github.com" class="quick-signup-btn">
          <FontAwesomeIcon icon={['fab', 'github']} />
          {t('github')}
        </a>
      </div>
      <span>{t('or')}</span>
      <div class="input-container">
        <div class="input-group">
          <p>{t('username')}</p>
            <input type="text" placeholder="John" />
        </div>
        <div class="input-group">
          <p>{t('email')}</p>
          <input type="text" placeholder="example@email.com" />
        </div>
        <div class="input-group">
          <p>{t('password')}</p>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p class="pwd-reminder">{passwordReminder}</p>
        </div>
      </div>

      <Link to={from} className="quick-signup-btn black-btn">{t('signup')}</Link>
    </div>
  );
}

export default Signup;
