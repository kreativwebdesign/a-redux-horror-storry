const url = 'https://randomuser.me/api'

export const fetchUser = () => {
  console.log('fetching user')
  return fetch(url)
    .then(res => res.json())
    .then(res => {
      return res.results
    })
    .catch(console.log)
}