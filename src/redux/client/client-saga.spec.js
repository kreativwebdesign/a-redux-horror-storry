import { put, call } from 'redux-saga/effects'

import {
  fetchClient,
  FETCH_CLIENT_PENDING,
  FETCH_CLIENT_SUCCESS
} from './client-saga'
import * as api from '../../api/api'

test('client saga', () => {
  const gen = fetchClient()
  expect(gen.next().value).toEqual(put({ type: FETCH_CLIENT_PENDING }))
  expect(gen.next().value).toEqual(call(api.fetchClient))
  expect(gen.next().value).toEqual(
    put({ type: FETCH_CLIENT_SUCCESS, data: undefined })
  )
  expect(gen.next()).toEqual({ done: true, value: undefined })
})
