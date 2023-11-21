import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [isSpanish, setIsSpanish] = useState(i18n.language === 'es');

  const toggleLanguage = () => {
    const newLanguage = isSpanish ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
    setIsSpanish(!isSpanish);
  };

  return (
    <div style={{ margin:50}}>
      <div>
        <span>Es</span>
        <FormControlLabel  style={{ margin:4  }}
          control={
            <Switch
              checked={isSpanish}
              onChange={toggleLanguage}
              name="languageSwitch"
            />
          }
        />
        <span>En</span>
      </div>
    </div>
  );
}

export default LanguageSwitch;