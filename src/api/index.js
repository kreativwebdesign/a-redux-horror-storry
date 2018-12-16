import { normalizeFetch, normalizePost } from './normalize'
import handleStatus from './handle-status'
import handleError from './handle-error'

const baseUrl = 'https://lines-written-in-early-spring.herokuapp.com'

const clientUrl = baseUrl + '/clients'

const bookingUrl = baseUrl + '/bookings'

const createFetch = url => () => {
  return fetch(url)
    .then(res => res.json())
    .then(normalizeFetch)
    .then(handleStatus)
    .catch(handleError)
}

const createSingleFetch = url => id => {
  return fetch(url)
    .then(res => res.json())
    .then(normalizeFetch)
    .then(handleStatus)
    .then(payload => {
      return {
        data: { [id]: payload.data[id] },
        list: [id],
        meta: payload.meta
      }
    })
    .catch(handleError)
}

const createPost = url => payload => {
  return fetch(url, {
    body: JSON.stringify(payload),
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(normalizePost)
    .then(handleStatus)
    .catch(handleError)
}

export const fetchClients = createFetch(clientUrl)

export const fetchSingleClient = createSingleFetch(clientUrl)

export const postClient = createPost(clientUrl)

export const fetchBookings = createFetch(bookingUrl)

export const postBooking = createPost(bookingUrl)
