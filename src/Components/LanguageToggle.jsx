import React from 'react'
import { useTranslation } from "react-i18next";


const LanguageToggle= () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
  };

  return (
    <select value={i18n.language} onChange={handleLanguageChange}>
      <option value="ja">Japanese</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageToggle
