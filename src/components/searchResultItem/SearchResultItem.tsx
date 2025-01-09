import React from 'react';

interface SearchResultItemProps {
    result: {
        trackId: number;
        trackName: string;
        artistName: string;
        artworkUrl60: string;
    };
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
