import { FETCH, ADD, DELETE, UPDATE } from 'src/api/constants'
import suffix from './suffix'

const DELIMITER = '/'

export const fetch = NAMESPACE => suffix(NAMESPACE, DELIMITER, FETCH)

export const fetchSingle = NAMESPACE => suffix(NAMESPACE, DELIMITER, FETCH)

export const add = NAMESPACE => suffix(NAMESPACE, DELIMITER, ADD)

export const del = NAMESPACE => suffix(NAMESPACE, DELIMITER, DELETE)

export const update = NAMESPACE => suffix(NAMESPACE, DELIMITER, UPDATE)
