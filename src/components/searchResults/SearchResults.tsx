import React from 'react';
import SearchResultItem from '../searchResultItem/SearchResultItem';
import { SearchResult } from '../../types/SearchResult';
import './searchResults.css';

interface SearchResultsProps {
    results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="search-results">
            {results.map((result, index) => ( 
                <SearchResultItem key={index} result={result} /> 
            ))}
        </div>
    );
};

export default SearchResults;
