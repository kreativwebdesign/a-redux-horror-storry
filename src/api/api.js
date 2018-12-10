import normalize from './normalize';
import handleStatus from './handleStatus';
import handleError from './handleError';

const baseUrl = 'http://lines-written-in-early-spring.herokuapp.com/'

const clientUrl = baseUrl + '/clients'

export const fetchClient = () => {
  return fetch(clientUrl)
    .then(res => res.json())
    .then(normalize)
    .then(handleStatus)
    .catch(handleError)
}