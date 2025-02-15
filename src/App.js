import React, { createContext, useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import ThemeToggle from './components/ThemeToggle';

// TODO: Exercice 2.1 - Créer le LanguageContext

export const ThemeContext = createContext();

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // le state "searchTerm" déclaré ici pour l'utilise dans les componants fils
  const [searchTerm, setSearchTerm] = useState('');
  // le state "debounceSearchTerm" pour l'utilisation dans la recherche sur le componant "ProductList"
  const [debounceSearchTerm, setDebounceSearchTerm] = useState('');
  // TODO: Exercice 2.2 - Ajouter l'état pour la langue

  // un UseEffect avec un timer pour limiter la fréquence de changement du state "debounceSearchTerm" lorque "searchTerm" changé
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebounceSearchTerm(searchTerm)
    }, 500);
    return ()=>clearTimeout(timer);
  },[searchTerm]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {/* TODO: Exercice 2.1 - Wrapper avec LanguageContext.Provider */}
      <div className={`container ${isDarkTheme ? 'bg-dark text-light' : 'bg-light'}`}>
        <header className="my-4">
          <h1 className="text-center">Catalogue de Produits</h1>
          <div className="d-flex justify-content-end gap-2">
            <ThemeToggle />
            {/* TODO: Exercice 2.2 - Ajouter le sélecteur de langue */}
          </div>
        </header>
        <main>
          {/* Envoi la méthode "setSearchTerm" comme un parametre pour le componant "ProductSearch" afin de 
          l'utiliser pour changer la valeur du state "searchTerm" par les données saisies par l'utilisateur */}
          <ProductSearch setSearchTerm={setSearchTerm} />
          {/* Envoi le state "debounceSearchTerm" comme un parametre pour le composant "ProductList" afin de 
          l'utiliser pour filter dans la liste des produits*/}
          <ProductList debounceSearchTerm={debounceSearchTerm} />
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App
