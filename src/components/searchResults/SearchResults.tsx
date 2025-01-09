import React from 'react';
import SearchResultItem from '../searchResultItem/SearchResultItem';
import './searchResults.css';

interface SearchResult {
    trackId: number;
    trackName: string;
    artistName: string;
    artworkUrl60: string;
}

interface SearchResultsProps {
    results: SearchResult[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div>
            {results.map((result, index) => ( 
                <SearchResultItem key={index} result={result} /> 
            ))}
        </div>
    );
};

export default SearchResults;
