import React from 'react';
import {Card, CardBody, Image, CardFooter} from "@nextui-org/react";
import { SearchResult } from '../../types/SearchResult';
import './searchResultItem.css';

interface SearchResultItemProps {
    result: SearchResult;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ result }) => {
    return (
        <Card className="py-4 px-4 search-result-item">
            <CardBody className="pt-0 px-0 py-0 flex-none items-center cart-body h-[100px]">
                <Image
                    alt={result.trackName}
                    radius="lg"
                    src={result.artworkUrl100}
                    loading="lazy"
                    className="z-0 w-full h-full object-cover"
                    width={100}
                    height={100}
                />
            </CardBody>
            <CardFooter className="pt-0 px-0 flex-col items-center">
                <h4 className="font-bold text-large">{result.trackName}</h4>
                <small>{result.artistName}</small>
            </CardFooter>
        </Card>
    );
};

export default SearchResultItem;
