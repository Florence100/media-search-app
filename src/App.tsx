import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';
import { searchMedia } from './api/searchMedia';
import { SearchResult } from './types/SearchResult';
import './App.css';

const App: React.FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const clearOldData = useCallback(() => {
        const keys = Object.keys(localStorage);
        if (keys.length > 0) {
            localStorage.removeItem(keys[0]);
        }
    }, []);
    
    const saveData = useCallback((key: string, data: SearchResult[]) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            if (e instanceof DOMException && e.name === 'QuotaExceededError') {
                clearOldData();
                localStorage.setItem(key, JSON.stringify(data));
            }
        }
    }, [clearOldData]);

    useEffect(() => {
        const fetchData = async () => {
            if (query) {
                const cachedResults = localStorage.getItem(query);
                if (cachedResults) {
                    setResults(JSON.parse(cachedResults));
                } else {
                    const searchResults = await searchMedia(query);
                    setResults(searchResults);
                    saveData(query, searchResults);
                }
            }
        };

        fetchData();
    }, [query, saveData]);

    const handleSearch = useCallback((newQuery: string) => {
        setQuery(newQuery);
    }, []);

    return (
        <div className="app-container">
            <div className="search-bar-container">
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="search-results-container">
                <SearchResults results={results} />
            </div>
        </div>
    );
};

export default App;

