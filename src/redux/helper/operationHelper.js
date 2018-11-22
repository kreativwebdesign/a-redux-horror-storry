import suffix from './suffix'

const DELIMITER = '/'

const FETCH = 'FETCH'
const ADD = 'ADD'
const DELETE = 'DELETE'
const UPDATE = 'UPDATE'

export const fetch = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, FETCH)

export const add = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, ADD)

  export const del = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, DELETE)

export const update = NAMESPACE =>
  suffix(NAMESPACE, DELIMITER, UPDATE)