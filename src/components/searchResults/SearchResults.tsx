import React from 'react';
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
            {results.map((result: SearchResult) => (
                <div key={result.trackId}>
                    <div>{result.trackId}</div>
                    <img src={result.artworkUrl60} alt={result.trackName} />
                    <p>{result.trackName} by {result.artistName}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
