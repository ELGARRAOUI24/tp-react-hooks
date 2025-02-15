import { useState, useEffect } from 'react';

const useProductSearch = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const nbrProduit = 6;
  const skip = (currentPage - 1) * nbrProduit;

  const fetchProducts = async () => {
    try {      
      setLoading(true);
      setError(null);
      const response = await fetch(`https://api.daaif.net/products?delay=1000&skip=${skip}&limit=${nbrProduit}`);
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
      setTotalPages(Math.ceil(data.total / nbrProduit));
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchProducts();
  },[currentPage])

  const reload = () => {
    fetchProducts();
  };

  const nextPage = () =>{
    if(currentPage < totalPages)
      setCurrentPage(currentPage + 1);
  };
  
  const previousPage = () => {
    if(currentPage > 1)
      setCurrentPage(currentPage - 1);
  };

  return { 
    products, 
    loading, 
    error,
    reload,
    totalPages,
    currentPage,
    previousPage,
    nextPage
  };
};

export default useProductSearch;