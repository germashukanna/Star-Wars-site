import {HTTP, HTTPS} from "../constants/api";


//           Изменяет url с HTTP на HTTPS

export const changeHTTP = url => {
    return url ? url.replace(HTTP, HTTPS) : url;
}

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Could not fetch.', error.message);
        return false;
    }
}

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));

    return res;
}

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body =>console.log(body))

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE);
//     console.log(body)
// })();



