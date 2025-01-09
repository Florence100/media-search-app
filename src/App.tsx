import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';
import { searchMedia } from './api/searchMedia';
import './App.css';

const App: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                const searchResults = await searchMedia(query);
                setResults(searchResults);
            }
        };

        fetchData();
    }, [query]);

    const handleSearch = useCallback((newQuery: string) => { 
        setQuery(newQuery); 
    }, []);

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
};

export default App;

