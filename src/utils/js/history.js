import createHashHistory from 'history/createHashHistory'

const history = createHashHistory()

export const push = (...args) => history.push(...args)

export default history
