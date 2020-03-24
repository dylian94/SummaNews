export default async function fetchNews(query) {
    // TODO: Vraag een API-sleutel aan bij Microsoft, zie Readme.md
    const apiKey = 'zet-je-api-sleutel-hier';

    const baseUrl = 'https://api.cognitive.microsoft.com/bing/v7.0';
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

    let data = [];

    try
    {
        let response = await fetch(url, init);
        let result = await response.json();

        if(result._type === 'News')
        {
            data = result.value;
        }
    }
    catch (err) {
        alert('Er is een fout opgetreden: \r\n' + err);
    }

    return data;
}