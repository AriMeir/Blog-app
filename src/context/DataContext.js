import { createContext, useState, useEffect } from "react";
import { useNavigate  } from 'react-router-dom';
import api from '../api/posts'
import useAxiosFetch from '../hooks/useAxios';
import { format } from 'date-fns';


const DataContext = createContext({})
export const DataProvider = ({children}) => {
    const [posts,setPosts] =useState([])
    const [search,setSearch] = useState('')
    const [searchResults,setSearchResults] = useState([]);
    const navigate = useNavigate();
    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
    
    useEffect(() => {
      setPosts(data);
    },[data])
   
    
    useEffect(() => {
      const filteredResults = posts.filter(post =>
        ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.title).toLowerCase()).includes(search.toLowerCase())
      );
      setSearchResults(filteredResults.reverse());
    }, [posts, search]);
   
    
      
      
    return (
        <DataContext.Provider value = { {
            search, setSearch,
            searchResults, fetchError, isLoading,
            posts,setPosts,
        }}>
            {children}
            </DataContext.Provider>
    )
}

export default DataContext;