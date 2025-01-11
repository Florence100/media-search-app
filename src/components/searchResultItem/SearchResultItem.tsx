import React from 'react';
import { Card, CardBody, Image, CardFooter, Link, CardHeader } from "@nextui-org/react";
import { SearchResult } from '../../types/SearchResult';

interface SearchResultItemProps {
    result: SearchResult;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ result }) => {
    return (
        <Card>
            <CardHeader className="flex justify-between items-start gap-3">
                <Image
                    alt={result.trackName}
                    radius="lg"
                    src={result.artworkUrl100}
                    className="object-cover"
                    shadow="sm"
                    width={75}
                    height={75}
                />
                <div className="flex">
                    { result.previewUrl && 
                        <Link isExternal showAnchorIcon href={result.previewUrl}>
                            Preview
                        </Link>
                    }
                </div>
            </CardHeader>
            <CardBody className="py-0">
                <p className="text-md">{result.trackName}</p>
                { result.artistName && 
                    result.artistViewUrl 
                        ? <p className="text-small text-default-500">by <Link className="text-small" isExternal href={result.artistViewUrl}>{result.artistName}</Link></p> 
                        : <p className="text-small text-default-500">by {result.artistName}</p>
                }
            </CardBody>
            <CardFooter>
                { result.trackViewUrl && 
                    <Link isExternal showAnchorIcon href={result.trackViewUrl}>
                        Visit source
                    </Link>
                }
            </CardFooter>
        </Card>
    );
};

export default SearchResultItem;
