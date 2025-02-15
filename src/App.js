import React, { createContext, useState } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';

// Création un context nommé "LanguageContext" pour gérer la langue d'affichage choisie par l'utilisateur
export const LanguageContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // le state "searchTerm" déclaré ici pour l'utilise dans les componants fils
  const [searchTerm, setSearchTerm] = useState('');
  // le state "debounceSearchTerm" pour l'utilisation dans la recherche sur le componant "ProductList"
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');
  // le state "language" pour stocker le choix de la langue choisie par l'utilisateur
  const [language, setLanguage] = useState('Fr');

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <LanguageContext.Provider value={{language, setLanguage, isDarkTheme}}>
        <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
          <header className="my-4">
            <h1 className="text-center">{language == "Fr" ? "Catalogue de Produits" : "Product Catalog"}</h1>
            <div className="d-flex justify-content-end gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </header>
          <main>
            {/* Envoi la méthode "setSearchTerm" comme un parametre pour le componant "ProductSearch" afin de 
            l'utiliser pour changer la valeur du state "searchTerm" par les données saisies par l'utilisateur */}
            <ProductSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} setDebounceSearchTerm={setDebounceSearchTerm} />
            {/* Envoi le state "debounceSearchTerm" comme un parametre pour le composant "ProductList" afin de 
            l'utiliser pour filter dans la liste des produits*/}
            <ProductList debounceSearchTerm={debounceSearchTerm} />
          </main>
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App
