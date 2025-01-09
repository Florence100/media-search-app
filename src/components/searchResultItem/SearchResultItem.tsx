import React from 'react';
import { SearchResult } from '../../types/SearchResult';

interface SearchResultItemProps {
    result: SearchResult;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ result }) => {
    return (
        <div>
            <img src={result.artworkUrl60} alt={result.trackName} />
            <p>{result.trackName} by {result.artistName}</p>
        </div>
    );
};

export default SearchResultItem;
