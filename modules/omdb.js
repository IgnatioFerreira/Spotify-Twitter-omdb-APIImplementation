import fetch from 'node-fetch';

async function myfunction(title) {
    try {
        const response = await fetch('http://www.omdbapi.com/?apikey=' + process.env.OMDB_API_KEY + '&t=' + title);
        const body = JSON.parse(await response.text());
        return body //This is the JSON object asked for in the assignment

    } catch (error) {
        console.log('Something went wrong!' + err);
        return
    }
}

function getOMDBMovie(title) {
    return myfunction(title);
}

export { getOMDBMovie }