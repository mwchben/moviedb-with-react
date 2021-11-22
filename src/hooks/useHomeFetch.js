import { useState, useEffect } from "react"; 
import API from '../API';


const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const useHomeFetch = () => {
        //*******state that will hold all the movies*******
        const [state ,setState] = useState(initialState);

        //we can also use alt 2
   
        //const state = useState();
        //[stateValue , theSetter] ...it isn't sestructured as the first alternative
   
        //so if we want to grab the state we use... 
        //state[0]
   
        //and if we want to set the state we would use
        //theSetter[]
   
        //*******state for the loading*******
        const [loading, setLoading] = useState(false);
   
        //*******state for if we receive an error from the API*******
        const [error, setError] = useState(false);
   
   
       const fetchMovies = async (page , searchTerm="") => {
           try{
               setError(false);
               setLoading(false);
   
               const movies = await API.fetchMovies(searchTerm, page);
              
               setState(prev =>({
                   ...movies,
                   results:
                       page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
               }));
   
           }catch(error){
               setError(true);
           }
           setLoading(false);
           
       };
   
       //initial render
   
       useEffect(()=>{
           fetchMovies(1);
       },[]);

       return { state, loading, error };
}