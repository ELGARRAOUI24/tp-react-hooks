import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../App';
import { LanguageContext } from '../App';
import useDebounce from '../hooks/useDebounce';

const ProductSearch = ({searchTerm ,setSearchTerm ,setDebounceSearchTerm}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  
  // utilisation le nouveau hook "useDebounce" avec un timer pour limiter la fréquence de changement du state "debounceSearchTerm" lorque "searchTerm" changé
  useDebounce(searchTerm, 500, setDebounceSearchTerm);
  
  return (
    <div className="mb-4">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={language == "Fr" ? "Rechercher un produit..." : "Search for a product..."}
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;