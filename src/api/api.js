import { normalizeFetch, normalizePost } from './normalize';
import handleStatus from './handleStatus';
import handleError from './handleError';

const baseUrl = 'https://lines-written-in-early-spring.herokuapp.com/'

const clientUrl = baseUrl + '/clients'

const bookingUrl = baseUrl + '/bookings'

const createFetch = url => () => {
  return fetch(url)
    .then(res => res.json())
    .then(normalizeFetch)
    .then(handleStatus)
    .catch(handleError)
}

const createPost = url => payload => {
  return fetch(url, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: { 'Content-Type': 'application/json'}
  })
    .then(res => res.json())
    .then(normalizePost)
    .then(handleStatus)
    .catch(handleError)
}

export const fetchClient = createFetch(clientUrl)

export const postClient = createPost(clientUrl)

export const fetchBooking = createFetch(bookingUrl)

export const postBooking = createPost(bookingUrl)