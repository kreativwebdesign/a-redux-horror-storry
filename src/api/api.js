import normalize from './normalize';
import handleStatus from './handleStatus';

const url = 'https://randomuser.me/api'

export const fetchUser = () => {
  return fetch(url)
    .then(res => res.json())
    .then(normalize)
    .then(handleStatus)
    .catch(console.log)
}