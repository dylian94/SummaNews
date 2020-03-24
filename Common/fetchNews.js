export default async function fetchNews(query) {
    // TODO: Vraag een API-sleutel aan bij Microsoft, zie Readme.md
    const apiKey = 'zet-je-api-sleutel-hier';

    const baseUrl = 'https://summanews.cognitiveservices.azure.com/bing/v7.0';
    const endpoint = '/news/search';
    const encodedQuery = encodeURIComponent('"Summa College "' + (query != null ? query : ''));
    const url = baseUrl + endpoint + '?q=' + encodedQuery;

    const init = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Ocp-Apim-Subscription-Key': apiKey
        }
    };

    let response = await fetch(url, init);
    let result = await response.json();

    if(result._type === 'News')
    {
        return result.value;
    }
    else
    {
        return [];
    }
}