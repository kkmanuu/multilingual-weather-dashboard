import React from 'react';
import { FormattedMessage } from 'react-intl';
import github_icon from '../assets/images/github-icon.png';

function Header({ onLocaleChange }) {
  const changeLanguage = (e) => {
    const newLocale = e.target.value;
    onLocaleChange(newLocale);
  };

  return (
    <div className="header">
      <h1 className="logo">
        <FormattedMessage id="app.title" />
      </h1>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="sw">Swahili</option>
      </select>
      <span className="credit">
        <a
          href="https://github.com/kkmanuu/multilingual-weather-dashboard"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github_icon} alt="" />
        </a>
      </span>
    </div>
  );
}

export default Header;
