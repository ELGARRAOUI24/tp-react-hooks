import { useEffect } from "react";

const useDebounce = (value, delay = 500, setDebounceSearchTerm) => {
    
   useEffect(()=>{
       const timer = setTimeout(()=>{
         setDebounceSearchTerm(value)
       }, delay);
       return ()=>clearTimeout(timer);
     },[value, delay]);
}

export default useDebounce;