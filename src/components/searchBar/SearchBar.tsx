import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;

