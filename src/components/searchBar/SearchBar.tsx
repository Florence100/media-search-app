import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import './searchBar.css';

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
        <div className="search-bar">
            <Input
                size="sm"
                radius="md"
                variant="flat"
                type="text"
                label="Search..."
                value={query}
                onChange={handleChange}
            >
            </Input>
            <Button
                color="primary"
                size="lg"
                radius="md"
                fullWidth={true}
                isDisabled={ query ? false : true }
                onPress={handleSearch}
            >
                Submit
            </Button>
        </div>
    );
};

export default SearchBar;

