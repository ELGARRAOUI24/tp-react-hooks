import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { ThemeContext } from '../App';

const LanguageToggle = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const { isDarkTheme } = useContext(ThemeContext);
  
    const ChangeLanguage = (e) => {
        setLanguage(e.target.value);
    }

    return (
        <select onChange={ChangeLanguage}
        className={`px-5 py-2 rounded ${
            isDarkTheme 
              ? 'bg-dark text-light border border-light' 
              : 'bg-light text-dark border border-dark'
          }`}>          
            {language == "Fr" ? <option value="An">Anglais</option>
             : <option value="An" selected>English</option>}
            {language == "Fr" ? <option value="Fr" selected>Français</option>
             : <option value="Fr">French</option>}   
        </select>
    );
};

export default LanguageToggle;