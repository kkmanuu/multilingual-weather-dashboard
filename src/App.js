import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en from './translations/en.json';
import messages_sw from './translations/sw.json';
import Header from './components/Header';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Footer from './components/Footer';

const messages = {
  en: messages_en,
  sw: messages_sw,
};

function App() {
  const [locale, setLocale] = useState('en');

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <Header onLocaleChange={handleLocaleChange} />
        <Weather />
        <Forecast />
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
