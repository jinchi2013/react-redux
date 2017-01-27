import { normalize, schema } from 'normalizr';
import { camelizeKeys } from 'humps';

// Extracts the next page URL from Github API response
const getNextPageUrl = response => {
    const link = response.headers.get('link');
    if (!link) {
        return null;
    }

    const nextLink = link.split(',').find(s=> s.indexOf('rel="next"') > -1);
    if(!nextLink) {
        return null;
    }

    return nextLink.split(';')[0].slice(1, -1);
};

const API_ROOT = 'https://api.github.com';

// Fetches an API response and normalizes the result JSON according to schma.
// This makes every API response have the same shape, regardless of how nexted it was.
