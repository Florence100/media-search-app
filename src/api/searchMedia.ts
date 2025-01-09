export const searchMedia = async (query: string) => {
    const response = await fetch(`https://itunes.apple.com/search?term=${query}&media=all`);
    const data = await response.json();
    return data.results;
};