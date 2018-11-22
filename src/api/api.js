import normalize from './normalize';

const url = 'https://randomuser.me/api'

export const fetchUser = () => {
  return fetch(url)
    .then(res => res.json())
    .then(normalize)
    .catch(console.log)
}