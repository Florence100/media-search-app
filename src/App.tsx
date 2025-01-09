import React, { useState } from 'react';
import SearchBar from './components/searchBar/SearchBar';
import SearchResults from './components/searchResults/SearchResults';
import { searchMedia } from './api/searchMedia';

const App: React.FC = () => {
    const [results, setResults] = useState([]);

    const handleSearch = async (query: string) => {
        const searchResults = await searchMedia(query);
        setResults(searchResults);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
};

export default App;

