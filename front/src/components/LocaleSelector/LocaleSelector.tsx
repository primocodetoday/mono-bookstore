import * as React from 'react';
import { useTranslation } from 'react-i18next';

export const LocaleSelector = () => {
  const { i18n } = useTranslation();

  const [lang, changeLang] = React.useState(i18n.language);

  const changeLanguage = () => {
    const lng = i18n.language === 'pl' ? 'en' : 'pl';
    i18n.changeLanguage(lng);
    changeLang(lng);
  };

  return (
    <div className="d-flex align-items-center">
      <button className="btn text-light text-uppercase font-weight-bolder" onClick={() => changeLanguage()}>
        {lang === 'pl' ? 'en' : 'pl'}
      </button>
    </div>
  );
};
