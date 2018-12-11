import { normalizeFetch, normalizePost } from './normalize';
import handleStatus from './handleStatus';
import handleError from './handleError';

const baseUrl = 'https://lines-written-in-early-spring.herokuapp.com/'

const clientUrl = baseUrl + '/clients'

export const fetchClient = () => {
  return fetch(clientUrl)
    .then(res => res.json())
    .then(normalizeFetch)
    .then(handleStatus)
    .catch(handleError)
}

export const postClient = (client) => {
  return fetch(clientUrl, {
    body: JSON.stringify(client),
    method: 'POST',
    headers: { 'Content-Type': 'application/json'}
  })
    .then(res => res.json())
    .then(normalizePost)
    .then(handleStatus)
    .catch(handleError)
}